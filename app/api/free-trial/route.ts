import { NextResponse } from "next/server";
import {
  isFutureDate,
  isValidEmail,
  isValidIndianPhone,
  isValidName,
  sanitizeText,
} from "@/lib/validation";

export const runtime = "nodejs";

/**
 * Free trial booking endpoint.
 *
 * TODO: Connect this to a real backend. At minimum you will want to:
 *   1. Persist the request (database / Google Sheet / Airtable / CRM).
 *   2. Notify the gym team (email, WhatsApp, SMS) so they can confirm the visit.
 *   3. Optionally trigger an SMS/email confirmation to the prospective member.
 *
 * The route below validates the payload server-side and acknowledges the
 * request — it does NOT fake a confirmed booking.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const form = {
    name: sanitizeText(String(body.name ?? "")),
    phone: sanitizeText(String(body.phone ?? "")),
    email: sanitizeText(String(body.email ?? "")),
    date: String(body.date ?? ""),
    time: String(body.time ?? ""),
    goal: sanitizeText(String(body.goal ?? "")),
    message: sanitizeText(String(body.message ?? "")),
  };

  const errors: Record<string, string> = {};
  if (!isValidName(form.name)) errors.name = "Please enter your full name.";
  if (!isValidIndianPhone(form.phone))
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  if (form.email && !isValidEmail(form.email))
    errors.email = "Please enter a valid email address.";
  if (!isFutureDate(form.date))
    errors.date = "Please pick a valid, upcoming date.";
  if (!form.time) errors.time = "Please choose a preferred time.";
  if (!form.goal) errors.goal = "Please choose a fitness goal.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  console.info("[free-trial] received request", { ...form, message: form.message.slice(0, 50) });

  return NextResponse.json({
    ok: true,
    status: "received",
    message: "Your free trial request has been received.",
  });
}