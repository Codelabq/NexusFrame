import type { FetchResult } from "@/types/fetching";

export async function safeParseJson(
  response: Response,
  url?: string,
): Promise<FetchResult<unknown>> {
  try {
    const text = await response.text();

    if (!text) {
      return { ok: true, value: null };
    }

    try {
      return { ok: true, value: JSON.parse(text) };
    } catch (error) {
      return {
        ok: false,
        error: {
          kind: "JsonParseError",
          message: "Failed to parse JSON response",
          url,
          details: {
            raw: text.slice(0, 1024),
            error: String(error),
          },
        },
      };
    }
  } catch (error) {
    return {
      ok: false,
      error: {
        kind: "BodyReadError",
        message: "Failed to read response body",
        url,
        details: String(error),
      },
    };
  }
}
