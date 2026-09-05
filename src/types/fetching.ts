export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | string;

export type Fetcher = (
  input: string,
  init?: RequestInit,
) => Promise<Response>;

export interface FetchInput {
  apiUrl: string;
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  requestId?: string;
  timeoutMs?: number;
  fetcher?: Fetcher;
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
  fetchedAt: string;
}

export type ErrorKind =
  | "InvalidUrl"
  | "HttpError"
  | "JsonParseError"
  | "BodyReadError"
  | "NetworkError"
  | "Unexpected";

export interface FetchError {
  kind: ErrorKind;
  message: string;
  url?: string;
  status?: number;
  details?: unknown;
}

export type FetchResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: FetchError };
