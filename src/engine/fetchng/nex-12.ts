/**
 * Single-file fetch pipeline for NexusFrame Engine Core (NEX-12).
 *
 * Implements URL validation, HTTP request orchestration, response
 * status handling, safe JSON parsing, and simple in-memory temporary
 * storage. Designed to be a minimal, dependency-free building block
 * for the Engine Core fetch pipeline.
 */
// --------------------------------------------------------------------------------------- Types and Interfaces

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | string;

// export interface FetchInput {
//   apiUrl: string;
//   method?: HttpMethod;
//   headers?: Record<string, string>;
//   body?: unknown;
//   requestId?: string;
//   timeoutMs?: number;
//   fetcher?: (input: string, init?: any) => Promise<any>;
// }
export interface FetchInput {
  apiUrl: string;
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  requestId?: string;
  timeoutMs?: number; // Added: Enforcement for request duration
  fetcher?: (input: string, init?: any) => Promise<any>;
}

export interface ResponseMetadata {
  status: number;
  statusText?: string;
  headers: Record<string, string>;
  url?: string;
}

export interface FetchSuccess {
  id: string;
  apiUrl: string;
  metadata: ResponseMetadata;
  data: unknown;
  fetchedAt: string; // ISO timestamp
}

export type ErrorKind =
  | 'InvalidUrl'
  | 'HttpError'
  | 'JsonParseError'
  | 'NetworkError'
  | 'StorageError'
  | 'Unexpected';

export interface FetchError {
  kind: ErrorKind;
  message: string;
  url?: string;
  status?: number;
  details?: any;
}

export type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: FetchError };

// --------------------------------------------------------------------------------------- HTTP Validation 

function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

export function validateUrlValue(apiUrl: string): Result<string> {
  if (!apiUrl || typeof apiUrl !== 'string') {
    return {
      ok: false,
      error: { kind: 'InvalidUrl', message: 'API URL must be a non-empty string' },
    };
  }

  if (!isHttpUrl(apiUrl)) {
    return {
      ok: false,
      error: { kind: 'InvalidUrl', message: 'API URL must use http or https protocol', url: apiUrl },
    };
  }

  return { ok: true, value: apiUrl };
}



function headersToRecord(headers: any): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    if (!headers) return out;
    if (typeof headers.entries === 'function') {
      for (const [k, v] of headers.entries()) out[k] = String(v);
    } else if (typeof headers.forEach === 'function') {
      headers.forEach((v: string, k: string) => (out[k] = String(v)));
    } else if (typeof headers === 'object') {
      for (const k of Object.keys(headers)) out[k] = String((headers as any)[k]);
    }
  } catch {
    // best-effort conversion
  }
  return out;
}
//--------------------------------------------------------------------------------------------------------------Response Check
export function handleResponse(response: any, url?: string): Result<ResponseMetadata> {
  if (!response || typeof response.status !== 'number') {
    return { ok: false, error: { kind: 'HttpError', message: 'Invalid response object', url } };
  }

  const status: number = response.status;
  const statusText: string = response.statusText ?? '';

  const metadata: ResponseMetadata = {
    status,
    statusText,
    headers: headersToRecord(response.headers ?? {}),
    url: response.url ?? url,
  };

  if (status >= 200 && status < 300) return { ok: true, value: metadata };

  return {
    ok: false,
    error: {
      kind: 'HttpError',
      message: `HTTP request failed with status ${status} ${statusText}`,
      url,
      status,
      details: metadata,
    },
  };
}
//--------------------------------------------------------------------------------------------------------------Parse JSON Response
export async function safeParseJson(response: any, url?: string): Promise<Result<any>> {
  try {
    if (typeof response.text === 'function') {
      const text = await response.text();
      if (!text) return { ok: true, value: null };
      try {
        const data = JSON.parse(text);
        return { ok: true, value: data };
      } catch (err) {
        return {
          ok: false,
          error: {
            kind: 'JsonParseError',
            message: 'Failed to parse JSON response',
            url,
            details: { raw: typeof text === 'string' ? text.slice(0, 1024) : text, error: String(err) },
          },
        };
      }
    }

    if (typeof response.json === 'function') {
      const data = await response.json();
      return { ok: true, value: data };
    }

    return { ok: true, value: null };
  } catch (err) {
    return { ok: false, error: { kind: 'NetworkError', message: 'Failed to read response body', url, details: String(err) } };
  }
}

// Simple in-memory temporary storage (NEX-21). Isolated and synchronous.
const MEMORY_STORE: Record<string, FetchSuccess> = {};

export function storeTemporary(result: FetchSuccess): Result<FetchSuccess> {
  try {
    MEMORY_STORE[result.id] = result;
    return { ok: true, value: result };
  } catch (err) {
    return { ok: false, error: { kind: 'StorageError', message: 'Failed to store temporary fetch result', details: String(err) } };
  }
}

export function getTemporary(id: string): Result<FetchSuccess | null> {
  try {
    const v = MEMORY_STORE[id] ?? null;
    return { ok: true, value: v };
  } catch (err) {
    return { ok: false, error: { kind: 'StorageError', message: 'Failed to read temporary fetch result', details: String(err) } };
  }
}

function makeId(): string {
  return 'req_' + Math.random().toString(36).slice(2, 9);
}

// export async function fetchApi(input: FetchInput): Promise<Result<FetchSuccess>> {
//   // Validate URL
//   const v = validateUrlValue(input.apiUrl);
//   if (!v.ok) return { ok: false, error: v.error };
//   const url = v.value;

//   const id = input.requestId ?? makeId();

//   const fetcher = input.fetcher ?? (typeof globalThis !== 'undefined' && typeof (globalThis as any).fetch === 'function' ? (globalThis as any).fetch : undefined);
//   if (!fetcher) return { ok: false, error: { kind: 'Unexpected', message: 'No fetch implementation available' } };

//   try {
//     const response = await fetcher(url, { method: input.method ?? 'GET', headers: input.headers, body: input.body as any });

//     const handled = handleResponse(response, url);
//     if (!handled.ok) return { ok: false, error: handled.error };

//     const parsed = await safeParseJson(response, url);
//     if (!parsed.ok) return { ok: false, error: parsed.error };

//     const success: FetchSuccess = {
//       id,
//       apiUrl: url,
//       metadata: handled.value,
//       data: parsed.value,
//       fetchedAt: new Date().toISOString(),
//     };

//     const stored = storeTemporary(success);
//     if (!stored.ok) return { ok: false, error: stored.error };

//     return { ok: true, value: success };
//   } catch (err) {
//     return { ok: false, error: { kind: 'NetworkError', message: 'Network request failed', url, details: String(err) } };
//   }
// }

export async function fetchApi(input: FetchInput): Promise<Result<FetchSuccess>> {
  // Validate URL
  const v = validateUrlValue(input.apiUrl);
  if (!v.ok) return { ok: false, error: v.error };
  const url = v.value;

  // Setup Timeout Controller
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), input.timeoutMs ?? 1000000);

  try {
    const fetcher = input.fetcher ?? (typeof globalThis !== 'undefined' && typeof (globalThis as any).fetch === 'function' ? (globalThis as any).fetch : undefined);
    if (!fetcher) return { ok: false, error: { kind: 'Unexpected', message: 'No fetch implementation available' } };

    const response = await fetcher(url, { 
      method: input.method ?? 'GET', 
      headers: input.headers, 
      body: input.body ? JSON.stringify(input.body) : undefined,
      signal: controller.signal // Enforce timeout
    });

    clearTimeout(timeoutId);

    const handled = handleResponse(response, url);
    if (!handled.ok) return { ok: false, error: handled.error };

    const parsed = await safeParseJson(response, url);
    if (!parsed.ok) return { ok: false, error: parsed.error };

    const success: FetchSuccess = {
      id: input.requestId ?? makeId(),
      apiUrl: url,
      metadata: handled.value,
      data: parsed.value,
      fetchedAt: new Date().toISOString(),
    };

    const stored = storeTemporary(success);
    if (!stored.ok) return { ok: false, error: stored.error };

    return { ok: true, value: success };
  } catch (err: any) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      return { ok: false, error: { kind: 'NetworkError', message: 'Request timed out', url } };
    }
    return { ok: false, error: { kind: 'NetworkError', message: 'Network request failed', url, details: String(err) } };
  }
}