"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const topics = ["Programmes", "Admissions", "Fees", "Partnerships", "Other"] as const;
type Topic = (typeof topics)[number];

type Errors = Partial<Record<"name" | "phone" | "email" | "topic" | "message", string>>;

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");
    setErrors({});
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      topic: String(fd.get("topic") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
    };

    // Client-side validation with inline errors
    const next: Errors = {};
    if (payload.name.trim().length < 2) next.name = "Please give your name";
    if (payload.phone.trim().length < 7) next.phone = "Give a phone number the college can reach you on";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) next.email = "That email address does not look right";
    if (!topics.includes(payload.topic as Topic)) next.topic = "Choose a topic";
    if (payload.message.trim().length < 10) next.message = "Tell the college a little more";
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setDone(true);
        form.reset();
      } else {
        setServerError(data.error || "The message could not be sent. Please phone the college instead.");
      }
    } catch {
      setServerError("The message could not be sent. Please phone the college instead.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className="border-l-2 border-otc-gold bg-white px-6 py-8" role="status">
        <CheckCircle2 className="h-8 w-8 text-otc-green" aria-hidden="true" />
        <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-otc-navy">
          Message received
        </h3>
        <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-otc-ink/75">
          Thank you. The college reads every message and will get back to you. If it is urgent, phone{" "}
          <a href="tel:+264812946126" className="font-medium text-otc-navy underline-offset-4 hover:underline">
            +264 81 294 6126
          </a>{" "}
          during working hours.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="link-underline mt-5 text-sm font-semibold text-otc-navy"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "min-h-[48px] w-full rounded-[2px] border border-input bg-white px-4 text-[0.95rem] text-otc-ink placeholder:text-otc-ink/40 focus:outline-none focus:ring-2 focus:ring-otc-navy/40";

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-otc-ink">
            Your name
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="e.g. Pineas Nangolo" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} />
          {errors.name ? (
            <p id="cf-name-err" className="mt-1.5 text-sm text-otc-red">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-otc-ink">
            Phone
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+264 81 000 0000" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "cf-phone-err" : undefined} />
          {errors.phone ? (
            <p id="cf-phone-err" className="mt-1.5 text-sm text-otc-red">
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-semibold text-otc-ink">
            Email
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} />
          {errors.email ? (
            <p id="cf-email-err" className="mt-1.5 text-sm text-otc-red">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="cf-topic" className="mb-1.5 block text-sm font-semibold text-otc-ink">
            Topic
          </label>
          <select id="cf-topic" name="topic" defaultValue="" className={field} aria-invalid={!!errors.topic} aria-describedby={errors.topic ? "cf-topic-err" : undefined}>
            <option value="" disabled>
              Choose one
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.topic ? (
            <p id="cf-topic-err" className="mt-1.5 text-sm text-otc-red">
              {errors.topic}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-otc-ink">
            Your message
          </label>
          <textarea id="cf-message" name="message" rows={5} placeholder="Which trade interests you, or what would you like to know?" className={`${field} h-auto py-3`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} />
          {errors.message ? (
            <p id="cf-message-err" className="mt-1.5 text-sm text-otc-red">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Honeypot: visually hidden and ignored by keyboard users */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {serverError ? (
        <p role="alert" className="mt-5 border-l-2 border-otc-red bg-[#fbe9e6] px-4 py-3 text-sm text-otc-red">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-otc-navy px-6 text-base font-semibold text-white transition-colors hover:bg-otc-navy-deep disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          "Send message"
        )}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-otc-ink/55">
        Your details go only to the college admissions office and are used to reply to your enquiry.
      </p>
    </form>
  );
}
