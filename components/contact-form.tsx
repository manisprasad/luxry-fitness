"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/button";
import { Field, formInputClass, SubmitBar } from "@/components/form-field";
import { postForm } from "@/lib/api";
import {
  fieldError,
  isValidEmail,
  isValidIndianPhone,
  isValidName,
  sanitizeText,
  type FormErrors,
} from "@/lib/validation";

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};
  if (!isValidName(values.name)) errors.name = "Please enter your full name.";
  if (!isValidIndianPhone(values.phone))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!values.email || !isValidEmail(values.email))
    errors.email = "Enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Add a short subject.";
  if (values.message.trim().length < 10)
    errors.message = "Write at least 10 characters.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const submittingRef = useRef(false);

  const update =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
      setTouched((prev) => ({ ...prev, [field]: true }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypotRef.current?.value) return;

    const next = validate(values);
    setErrors(next);
    setTouched({
      name: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
    });
    if (Object.keys(next).length > 0) return;
    if (submittingRef.current) return;

    submittingRef.current = true;
    setSubmitting(true);
    setStatus(null);

    try {
      // POST to the API boundary — see app/api/contact/route.ts for the TODO
      // on where to connect a real backend.
      const result = await postForm("/api/contact", {
        ...values,
        name: sanitizeText(values.name),
        phone: sanitizeText(values.phone),
        email: sanitizeText(values.email),
        subject: sanitizeText(values.subject),
        message: sanitizeText(values.message),
      });
      if (!result.ok) throw new Error(result.message);
      setSubmitted(true);
    } catch (error) {
      setStatus({
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Could not send your message. Please try again.",
      });
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border-2 border-line p-10 md:p-16" role="status">
        <CheckCircle2 className="h-14 w-14 text-accent" strokeWidth={1.5} />
        <h3 className="text-display-xs mt-8">Message Received</h3>
        <p className="mt-6 max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl">
          Thank you for reaching out. We&rsquo;ll get back to you as soon as
          possible.
        </p>
        <Button href="/" variant="outline" size="lg" className="mt-10">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        <Field label="Name" htmlFor="contact-name" required error={fieldError(errors, "name", touched)}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={update("name")}
            className={formInputClass}
            disabled={submitting}
          />
        </Field>
        <Field label="Phone" htmlFor="contact-phone" required error={fieldError(errors, "phone", touched)}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            value={values.phone}
            onChange={update("phone")}
            className={formInputClass}
            disabled={submitting}
          />
        </Field>
        <Field label="Email" htmlFor="contact-email" required error={fieldError(errors, "email", touched)}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={update("email")}
            className={formInputClass}
            disabled={submitting}
          />
        </Field>
        <Field label="Subject" htmlFor="contact-subject" required error={fieldError(errors, "subject", touched)}>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            value={values.subject}
            onChange={update("subject")}
            className={formInputClass}
            disabled={submitting}
          />
        </Field>
        <Field
          label="Message"
          htmlFor="contact-message"
          required
          error={fieldError(errors, "message", touched)}
          className="md:col-span-2"
        >
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us how we can help"
            value={values.message}
            onChange={update("message")}
            className={`${formInputClass} h-auto resize-y py-4`}
            disabled={submitting}
          />
        </Field>
      </div>

      <input
        ref={honeypotRef}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <SubmitBar status={status}>
        <Button type="submit" size="xl" className="w-full md:w-auto" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </SubmitBar>
    </form>
  );
}