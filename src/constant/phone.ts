/** Strip to digits only (keeps leading country code if present). */
export function phoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Accepts common US formats (+1, parentheses, dashes, spaces, dots)
 * and other numbers with 10–15 digits.
 */
export function isValidPhone(value: string): boolean {
  const digits = phoneDigits(value.trim());
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits.startsWith("1")) return true;
  return digits.length >= 10 && digits.length <= 15;
}

export const PHONE_ERROR_MESSAGE =
  "Please enter a valid phone number (at least 10 digits).";

/** HTML pattern for browser-native validation (US-friendly formats). */
export const PHONE_INPUT_PATTERN =
  "^\\+?1?[\\s.\\-]?\\(?\\d{3}\\)?[\\s.\\-]?\\d{3}[\\s.\\-]?\\d{4}$";

export const PHONE_INPUT_TITLE =
  "Enter a valid US phone number, e.g. (781) 244-6847";
