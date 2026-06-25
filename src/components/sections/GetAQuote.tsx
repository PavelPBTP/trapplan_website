"use client";

import { useState } from "react";

export type GetAQuoteTranslations = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ceoTitle: string;
  messageWhatsapp: string;
  fieldName: string;
  fieldCompany: string;
  fieldEmail: string;
  fieldBudget: string;
  budgetPlaceholder: string;
  fieldMessage: string;
  submitSending: string;
  submitSend: string;
  footnote: string;
  success: string;
  errorGeneric: string;
  errorNetwork: string;
};

const BUDGET_OPTIONS = [
  "Under €5k",
  "€5k – €15k",
  "€15k – €50k",
  "€50k – €150k",
  "€150k+",
  "Not sure yet",
];

const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary";
const inputClass =
  "h-[46px] w-full rounded-[6px] border border-[rgba(244,241,234,0.12)] bg-void px-[14px] text-[15px] text-bone outline-none transition-colors focus:border-[var(--accent)]";

export default function GetAQuote({ translations: tx }: { translations: GetAQuoteTranslations }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const isEmailValid = email.trim().length > 3 && /^\S+@\S+\.\S+$/.test(email.trim());
  const isFormValid = name.trim().length > 0 && company.trim().length > 0 && isEmailValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-to-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          budget: budget || undefined,
          message: details || undefined,
          source: "Get A Quote (Homepage)",
        }),
      });

      if (response.ok) {
        setMessage(tx.success);
        setName("");
        setCompany("");
        setEmail("");
        setBudget("");
        setDetails("");
      } else {
        let requestId: string | undefined;
        try {
          const data: unknown = await response.json();
          if (typeof data === "object" && data !== null) {
            const id = (data as { requestId?: unknown }).requestId;
            if (typeof id === "string" && id.trim()) requestId = id.trim();
          }
        } catch {
          requestId = undefined;
        }
        setMessage(requestId ? `${tx.errorGeneric} (Error ID: ${requestId})` : tx.errorGeneric);
      }
    } catch {
      setMessage(tx.errorNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[64px] px-6 py-[110px] lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-[14px]">
            <span className="font-display text-[13px] font-bold text-[var(--accent)]">04</span>
            <span className="h-px w-[30px] bg-[rgba(244,241,234,0.2)]" />
            <span className="text-[14px] text-secondary">{tx.eyebrow}</span>
          </div>
          <h2 className="mb-5 font-display text-[42px] font-bold leading-[1.06] tracking-[-0.025em] text-bone">
            {tx.title}
          </h2>
          <p className="mb-10 max-w-[380px] text-[16px] leading-[1.6] text-secondary">{tx.subtitle}</p>

          <div className="flex max-w-[380px] items-center gap-4 rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card p-[18px]">
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 font-display text-[15px] font-bold text-[#06120E]">
              PB
            </span>
            <div>
              <div className="font-display text-[16px] font-semibold text-bone">Pavel Beresnev</div>
              <div className="text-[13px] text-secondary">{tx.ceoTitle}</div>
            </div>
            <a
              href="https://wa.me/381631808155"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-mono text-[12px] text-[var(--accent)] no-underline transition-colors hover:brightness-110"
            >
              {tx.messageWhatsapp} ↗
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card p-[34px]"
        >
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="gaq-name" className={labelClass}>{tx.fieldName} *</label>
              <input
                id="gaq-name"
                name="name"
                autoComplete="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="gaq-company" className={labelClass}>{tx.fieldCompany} *</label>
              <input
                id="gaq-company"
                name="organization"
                autoComplete="organization"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={inputClass}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="gaq-email" className={labelClass}>{tx.fieldEmail} *</label>
            <input
              id="gaq-email"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gaq-budget" className={labelClass}>{tx.fieldBudget}</label>
            <select
              id="gaq-budget"
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`${inputClass} ${budget ? "text-bone" : "text-secondary"}`}
            >
              <option value="">{tx.budgetPlaceholder}</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-bone">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="gaq-message" className={labelClass}>{tx.fieldMessage}</label>
            <textarea
              id="gaq-message"
              name="message"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full resize-y rounded-[6px] border border-[rgba(244,241,234,0.12)] bg-void px-[14px] py-3 text-[15px] text-bone outline-none transition-colors focus:border-[var(--accent)]"
            />
          </div>

          {message ? (
            <div className="mb-4 text-center text-[13px] font-medium text-secondary">{message}</div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="h-[52px] w-full rounded-[6px] bg-[var(--accent)] font-display text-[16px] font-semibold text-[var(--accent-on)] transition hover:brightness-[1.06] disabled:cursor-not-allowed disabled:opacity-50"
            style={{ boxShadow: "var(--cta-glow)" }}
          >
            {isSubmitting ? tx.submitSending : tx.submitSend}
          </button>
          <p className="mt-[14px] text-center text-[13px] text-tertiary">{tx.footnote}</p>
        </form>
      </div>
    </section>
  );
}
