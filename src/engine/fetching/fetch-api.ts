<<<<<<< HEAD
import type { FetchInput, FetchResult, FetchSuccess } from "@/types/fetching";
=======
import type {
  FetchInput,
  FetchResult,
  FetchSuccess,
} from "@/types/fetching";
>>>>>>> origin/main
import { safeParseJson } from "./json-parsing";
import { handleResponse } from "./response-handling";
import { validateUrlValue } from "./url-validation";

function makeId(): string {
<<<<<<< HEAD
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
=======
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
>>>>>>> origin/main
    return crypto.randomUUID();
  }

  return `req_${Math.random().toString(36).slice(2, 12)}`;
}

function isAbortError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "name" in error &&
    error.name === "AbortError"
  );
}

export async function fetchApi(
  input: FetchInput,
): Promise<FetchResult<FetchSuccess>> {
  const urlResult = validateUrlValue(input.apiUrl);
  if (!urlResult.ok) {
    return urlResult;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    input.timeoutMs ?? 1_000_000,
  );

  try {
    const fetcher = input.fetcher ?? globalThis.fetch?.bind(globalThis);
    if (!fetcher) {
      return {
        ok: false,
        error: {
          kind: "Unexpected",
          message: "No fetch implementation available",
        },
      };
    }

    const headers = new Headers(input.headers);
    if (input.body !== undefined && !headers.has("content-type")) {
      headers.set("content-type", "application/json");
    }

    const response = await fetcher(urlResult.value, {
      method: input.method ?? "GET",
      headers,
      body: input.body === undefined ? undefined : JSON.stringify(input.body),
      signal: controller.signal,
    });

    const responseResult = handleResponse(response, urlResult.value);
    if (!responseResult.ok) {
      return responseResult;
    }

    const dataResult = await safeParseJson(response, urlResult.value);
    if (!dataResult.ok) {
      return dataResult;
    }

<<<<<<< HEAD
    const data = Array.isArray(dataResult.value)
      ? { response: dataResult.value }
      : dataResult.value;

=======
>>>>>>> origin/main
    const success: FetchSuccess = {
      id: input.requestId ?? makeId(),
      apiUrl: urlResult.value,
      metadata: responseResult.value,
<<<<<<< HEAD
      data,
=======
      data: dataResult.value,
>>>>>>> origin/main
      fetchedAt: new Date().toISOString(),
    };

    return { ok: true, value: success };
  } catch (error: unknown) {
    if (isAbortError(error)) {
      return {
        ok: false,
        error: {
          kind: "NetworkError",
          message: "Request timed out",
          url: urlResult.value,
        },
      };
    }

    return {
      ok: false,
      error: {
        kind: "NetworkError",
        message: "Network request failed",
        url: urlResult.value,
        details: String(error),
      },
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
