export function sanitizeText(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 2000);
}

export function normalizePhone(value: string): string {
  return value.replace(/[\s\-().+]/g, "");
}

export function isValidIndianPhone(value: string): boolean {
  let digits = normalizePhone(value);
  if (digits.startsWith("91")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  return /^\d{10}$/.test(digits) && /^[6-9]/.test(digits);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function isValidName(value: string): boolean {
  return /^[a-zA-Z\u0900-\u097F][a-zA-Z\u0900-\u097F .'-]{1,60}$/.test(
    value.trim()
  );
}

export function isFutureDate(value: string): boolean {
  if (!value) return false;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date.getTime() >= today.getTime();
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export function fieldError(
  errors: FormErrors,
  field: string,
  touched: Record<string, boolean>
): string | undefined {
  if (!touched[field]) return undefined;
  return errors[field];
}