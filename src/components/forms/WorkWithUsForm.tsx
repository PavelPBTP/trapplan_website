"use client";

import { useEffect, useRef, useState } from "react";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/copy";

export default function WorkWithUsForm({ locale }: { locale: Locale }) {

  const didPrefillRef = useRef(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const isEmailValid = email.trim().length > 3 && /^\S+@\S+\.\S+$/.test(email.trim());
  const isFormValid = name.trim().length > 0 && company.trim().length > 0 && isEmailValid;

  useEffect(() => {
    // Prefill the message from ?message= once on mount (e.g. from the influencer planner).
    if (didPrefillRef.current || typeof window === "undefined") return;
    const m = new URLSearchParams(window.location.search).get("message");
    if (!m) return;
    setMessage(m);
    didPrefillRef.current = true;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/send-to-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          message: message || undefined,
          source: "Work With Us Form",
        }),
      });

      if (response.ok) {
        setStatusMessage(t(locale, "work_with_us_form.success"));
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
        setSubscribe(true);
      } else {
        let serverError: string | undefined;
        let requestId: string | undefined;
        try {
          const data: unknown = await response.json();
          if (typeof data === "object" && data !== null) {
            const error = (data as { error?: unknown }).error;
            const details = (data as { details?: unknown }).details;
            const status = (data as { status?: unknown }).status;
            const id = (data as { requestId?: unknown }).requestId;

            const parts: string[] = [];
            if (typeof error === "string") parts.push(error);
            if (typeof details === "string") parts.push(details);
            if (typeof status === "number") parts.push(`(${status})`);
            serverError = parts.length ? parts.join(" ") : undefined;

            if (typeof id === "string" && id.trim()) requestId = id.trim();
          }
        } catch {
          serverError = undefined;
        }

        if (process.env.NODE_ENV !== "production" && serverError) {
          setStatusMessage(serverError);
        } else {
          const base = t(locale, "work_with_us_form.error_generic");
          setStatusMessage(requestId ? `${base} (Error ID: ${requestId})` : base);
        }
      }
    } catch {
      setStatusMessage(t(locale, "work_with_us_form.error_network"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-9" onSubmit={handleSubmit}>
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary">
          {t(locale, "work_with_us_form.field_full_name")}
        </span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3 w-full border-b border-[rgba(244,241,234,0.18)] bg-transparent pb-3 text-[15px] font-medium text-bone placeholder:text-tertiary focus:border-[var(--accent)] focus:outline-none"
          placeholder=""
          required
        />
      </label>

      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary">
          {t(locale, "work_with_us_form.field_company")}
        </span>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-3 w-full border-b border-[rgba(244,241,234,0.18)] bg-transparent pb-3 text-[15px] font-medium text-bone placeholder:text-tertiary focus:border-[var(--accent)] focus:outline-none"
          placeholder=""
          required
        />
      </label>

      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary">
          {t(locale, "work_with_us_form.field_email")}
        </span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-3 w-full border-b border-[rgba(244,241,234,0.18)] bg-transparent pb-3 text-[15px] font-medium text-bone placeholder:text-tertiary focus:border-[var(--accent)] focus:outline-none"
          placeholder=""
          required
        />
      </label>

      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary">
          {t(locale, "work_with_us_form.field_message")}
        </span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-3 w-full resize-none border-b border-[rgba(244,241,234,0.18)] bg-transparent pb-3 text-[15px] font-medium text-bone placeholder:text-tertiary focus:border-[var(--accent)] focus:outline-none"
          placeholder=""
        />
      </label>

      <label className="flex items-center gap-3 text-[13px] font-medium text-secondary">
        <input
          type="checkbox"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          className="h-4 w-4 rounded accent-[var(--accent)]"
        />
        {t(locale, "work_with_us_form.subscribe")}
      </label>

      {statusMessage && (
        <div className="text-[13px] font-medium text-center">
          {statusMessage}
        </div>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className="h-[52px] w-full rounded-[6px] bg-[var(--accent)] font-display text-[15px] font-semibold text-[var(--accent-on)] transition hover:brightness-[1.06] disabled:cursor-not-allowed disabled:opacity-50"
          style={{ boxShadow: "var(--cta-glow)" }}
        >
          {isSubmitting
            ? t(locale, "work_with_us_form.submit_sending")
            : t(locale, "work_with_us_form.submit")}
        </button>

        <p className="mt-4 text-center text-[12px] font-medium text-tertiary">
          {t(locale, "work_with_us_form.privacy_note")}
        </p>
      </div>
    </form>
  );
}
