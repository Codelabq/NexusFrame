import type {
  FetchResult,
  ResponseMetadata,
} from "@/types/fetching";

function headersToRecord(
  headers: Headers | Record<string, string>,
): Record<string, string> {
  const output: Record<string, string> = {};

  try {
    if (typeof headers.entries === "function") {
      for (const [key, value] of headers.entries()) {
        output[key] = String(value);
      }
    } else if (typeof headers.forEach === "function") {
      headers.forEach((value, key) => {
        output[key] = String(value);
      });
    } else {
      for (const key of Object.keys(headers)) {
        output[key] = String(headers[key]);
      }
    }
  } catch {
    // Header conversion is best effort.
  }

  return output;
}

export function handleResponse(
  response: Response,
  url?: string,
): FetchResult<ResponseMetadata> {
  if (!response || typeof response.status !== "number") {
    return {
      ok: false,
      error: { kind: "HttpError", message: "Invalid response object", url },
    };
  }

  const metadata: ResponseMetadata = {
    status: response.status,
    statusText: response.statusText ?? "",
    headers: headersToRecord(response.headers ?? {}),
    url: response.url || url,
  };

  if (response.status >= 200 && response.status < 300) {
    return { ok: true, value: metadata };
  }

  return {
    ok: false,
    error: {
      kind: "HttpError",
      message: `HTTP request failed with status ${response.status} ${response.statusText ?? ""}`,
      url,
      status: response.status,
      details: metadata,
    },
  };
}
