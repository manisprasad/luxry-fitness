"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/button";
import { Field, formInputClass, SubmitBar } from "@/components/form-field";
import { fitnessGoals, trialTimeSlots } from "@/lib/data";
import { postForm } from "@/lib/api";
import {
  fieldError,
  isFutureDate,
  isValidEmail,
  isValidIndianPhone,
  isValidName,
  sanitizeText,
  type FormErrors,
} from "@/lib/validation";

interface TrialFormValues {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  goal: string;
  message: string;
}

const initialValues: TrialFormValues = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  goal: "",
  message: "",
};

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

function validate(values: TrialFormValues): FormErrors {
  const errors: FormErrors = {};
  if (!isValidName(values.name)) errors.name = "Please enter your full name.";
  if (!isValidIndianPhone(values.phone))
    errors.phone = "Enter a valid 10-digit Indian mobile number (e.g. 98XXXXXXXX).";
  if (values.email && !isValidEmail(values.email))
    errors.email = "Enter a valid email address.";
  if (!isFutureDate(values.date))
    errors.date = "Pick a valid upcoming date.";
  if (!values.time) errors.time = "Choose a preferred time.";
  if (!values.goal) errors.goal = "Choose a fitness goal.";
  return errors;
}

export function TrialForm({ defaultGoal }: { defaultGoal?: string }) {
  const initialGoal =
    defaultGoal && (fitnessGoals as readonly string[]).includes(defaultGoal)
      ? defaultGoal
      : "";

  const [values, setValues] = useState<TrialFormValues>(() => ({
    ...initialValues,
    goal: initialGoal,
  }));
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const submittingRef = useRef(false);

  const update =
    (field: keyof TrialFormValues, isTouched = true) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
      if (isTouched) setTouched((prev) => ({ ...prev, [field]: true }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypotRef.current?.value) return; // bot trapped

    const next = validate(values);
    setErrors(next);
    setTouched({
      name: true,
      phone: true,
      email: true,
      date: true,
      time: true,
      goal: true,
    });
    if (Object.keys(next).length > 0) return;

    if (submittingRef.current) return;
    submittingRef.current = true;
    setSubmitting(true);
    setStatus(null);

    try {
      // POST to the API boundary — see app/api/free-trial/route.ts for the
      // TODO on where to connect a real backend (DB / email / CRM).
      const result = await postForm("/api/free-trial", {
        ...values,
        name: sanitizeText(values.name),
        phone: sanitizeText(values.phone),
        email: sanitizeText(values.email),
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
            : "Could not submit your request. Please try again.",
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
        <h3 className="text-display-xs mt-8">You&rsquo;re all set!</h3>
        <p className="mt-6 max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl">
          We&rsquo;ve received your free trial request. Our team will contact
          you shortly to confirm your visit.
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
        <Field label="Full Name" htmlFor="trial-name" required error={fieldError(errors, "name", touched)}>
          <input
            id="trial-name"
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
        <Field label="Phone Number" htmlFor="trial-phone" required error={fieldError(errors, "phone", touched)}>
          <input
            id="trial-phone"
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
        <Field label="Email" htmlFor="trial-email" error={fieldError(errors, "email", touched)}>
          <input
            id="trial-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com (optional)"
            value={values.email}
            onChange={update("email")}
            className={formInputClass}
            disabled={submitting}
          />
        </Field>
        <Field label="Preferred Date" htmlFor="trial-date" required error={fieldError(errors, "date", touched)}>
          <input
            id="trial-date"
            name="date"
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={update("date")}
            className={formInputClass}
            disabled={submitting}
          />
        </Field>
        <Field label="Preferred Time" htmlFor="trial-time" required error={fieldError(errors, "time", touched)}>
          <select
            id="trial-time"
            name="time"
            value={values.time}
            onChange={update("time")}
            className={formInputClass}
            disabled={submitting}
          >
            <option value="">Choose a time</option>
            {trialTimeSlots.map((slot) => (
              <option key={slot} value={slot} className="bg-background">
                {slot}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Fitness Goal" htmlFor="trial-goal" required error={fieldError(errors, "goal", touched)}>
          <select
            id="trial-goal"
            name="goal"
            value={values.goal}
            onChange={update("goal")}
            className={formInputClass}
            disabled={submitting}
          >
            <option value="">Choose a goal</option>
            {fitnessGoals.map((goal) => (
              <option key={goal} value={goal} className="bg-background">
                {goal}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Message"
          htmlFor="trial-message"
          className="md:col-span-2"
        >
          <textarea
            id="trial-message"
            name="message"
            rows={4}
            placeholder="Anything else we should know? (optional)"
            value={values.message}
            onChange={update("message")}
            className={`${formInputClass} h-auto resize-y py-4`}
            disabled={submitting}
          />
        </Field>
      </div>

      {/* Honeypot for bots — visually hidden, must stay empty. */}
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
              Submitting...
            </>
          ) : (
            "Book My Free Trial"
          )}
        </Button>
      </SubmitBar>
    </form>
  );
}