/**
 * Client → server submission boundary for all forms.
 *
 * The forms POST to internal Next.js route handlers under /app/api.
 * Those route stubs currently just validate and acknowledge the request —
 * TODO: wire them to a database, email provider, WhatsApp/CRM webhook, etc.
 */

export interface ApiResult {
  ok: boolean;
  status?: string;
  message?: string;
}

export async function postForm(path: string, payload: unknown): Promise<ApiResult> {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as ApiResult;

  if (!response.ok) {
    throw new Error(data.message ?? "Something went wrong. Please try again.");
  }

  return data;
}