"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { t } from "@/lib/copy";

function Field({ label, type = "text", value, onChange }: { label: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-[6px] border border-[rgba(244,241,234,0.12)] bg-void px-4 py-3 text-[15px] text-bone outline-none transition-colors focus:border-[var(--accent)]"
        placeholder=""
        required
      />
    </label>
  );
}

export default function BlogQuoteBanner() {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/").filter(Boolean)[0];
  const locale = (seg && (SUPPORTED_LOCALES as readonly string[]).includes(seg)
    ? seg
    : DEFAULT_LOCALE) as Locale;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const isEmailValid = email.trim().length > 3 && /^\S+@\S+\.\S+$/.test(email.trim());
  const isFormValid = name.trim().length > 0 && company.trim().length > 0 && isEmailValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          source: "Blog Quote Banner",
        }),
      });

      if (response.ok) {
        setMessage(t(locale, "blog_quote_banner.success"));
        setName("");
        setCompany("");
        setEmail("");
        setTimeout(() => setOpen(false), 2000);
      } else {
        setMessage(t(locale, "blog_quote_banner.error_generic"));
      }
    } catch {
      setMessage(t(locale, "blog_quote_banner.error_network"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") { setOpen(false); return; }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }, []);

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", trapFocus);
      const timer = setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("button, input")?.focus(), 50);
      return () => { window.removeEventListener("keydown", trapFocus); clearTimeout(timer); };
    }
    triggerRef.current?.focus();
  }, [open, trapFocus]);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(244,241,234,0.08)] bg-[rgba(12,11,10,0.9)] backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3 lg:px-8">
          <div className="min-w-0">
            <div className="truncate font-display text-[14px] font-semibold text-bone">
              {t(locale, "blog_quote_banner.banner.title")}
            </div>
            <div className="truncate text-[12px] font-medium text-tertiary">
              {t(locale, "blog_quote_banner.banner.subtitle")}
            </div>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="shrink-0 rounded-[6px] bg-[var(--accent)] px-5 py-2.5 font-display text-[13px] font-semibold text-[var(--accent-on)] transition hover:brightness-[1.06]"
          >
            {t(locale, "blog_quote_banner.banner.cta")}
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/35 px-4 pb-6 pt-10 sm:items-center"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label={t(locale, "blog_quote_banner.modal.close")}
            className="absolute inset-0 cursor-default"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-full max-w-[520px] rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card px-8 pb-7 pt-8 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[22px] font-bold leading-none tracking-[-0.02em] text-bone">
                  {t(locale, "blog_quote_banner.modal.title")}
                </h3>
                <p className="mt-3 text-[13px] font-medium leading-6 text-secondary">
                  {t(locale, "blog_quote_banner.modal.subtitle")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(244,241,234,0.18)] text-secondary transition-colors hover:text-bone"
                aria-label={t(locale, "blog_quote_banner.modal.close")}
              >
                ×
              </button>
            </div>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <Field label={t(locale, "form.get_a_quote.field_name")} value={name} onChange={(e) => setName(e.target.value)} />
              <Field label={t(locale, "form.get_a_quote.field_company")} value={company} onChange={(e) => setCompany(e.target.value)} />
              <Field label={t(locale, "form.get_a_quote.field_email")} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              {message && (
                <div className="text-[13px] font-medium text-center">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className="mt-7 inline-flex h-[52px] w-full items-center justify-center rounded-[6px] bg-[var(--accent)] font-display text-[15px] font-semibold text-[var(--accent-on)] transition hover:brightness-[1.06] disabled:cursor-not-allowed disabled:opacity-50"
                style={{ boxShadow: "var(--cta-glow)" }}
              >
                {isSubmitting
                  ? t(locale, "form.get_a_quote.submit_sending")
                  : t(locale, "form.get_a_quote.submit_send")}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
