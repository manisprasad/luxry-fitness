import { NextResponse } from "next/server";
import {
  isValidEmail,
  isValidIndianPhone,
  isValidName,
  sanitizeText,
} from "@/lib/validation";

export const runtime = "nodejs";

/**
 * Contact form endpoint.
 *
 * TODO: Connect this to a real backend — persist the message and forward it
 * to the gym (email/WhatsApp/CRM). The route below only validates and
 * acknowledges the request.
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
    subject: sanitizeText(String(body.subject ?? "")).slice(0, 200),
    message: sanitizeText(String(body.message ?? "")),
  };

  const errors: Record<string, string> = {};
  if (!isValidName(form.name)) errors.name = "Please enter your full name.";
  if (!isValidIndianPhone(form.phone))
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  if (!form.email || !isValidEmail(form.email))
    errors.email = "Please enter a valid email address.";
  if (!form.subject) errors.subject = "Please add a short subject.";
  if (form.message.length < 10)
    errors.message = "Please write a message of at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  console.info("[contact] received message", {
    ...form,
    message: form.message.slice(0, 50),
  });

  return NextResponse.json({
    ok: true,
    status: "received",
    message: "Your message has been received.",
  });
}