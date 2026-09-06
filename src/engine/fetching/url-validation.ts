import type { FetchResult } from "@/types/fetching";

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateUrlValue(apiUrl: string): FetchResult<string> {
  if (!apiUrl || typeof apiUrl !== "string") {
    return {
      ok: false,
      error: {
        kind: "InvalidUrl",
        message: "API URL must be a non-empty string",
      },
    };
  }

  if (!isHttpUrl(apiUrl)) {
    return {
      ok: false,
      error: {
        kind: "InvalidUrl",
        message: "API URL must use http or https protocol",
        url: apiUrl,
      },
    };
  }

  return { ok: true, value: apiUrl };
}
