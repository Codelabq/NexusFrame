import type { Tone } from "./types";

/** Static literal classes so Tailwind can statically detect every tone. */
const toneText: Record<Tone, string> = {
  primary: "text-[#93ccff]",
  secondary: "text-[#7bd0ff]",
  tertiary: "text-[#00daf3]",
  surface: "text-[#d4e4fa]",
};

export const toneTextClass = (tone: Tone): string => toneText[tone];
