"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { t } from "@/lib/copy";

function Field({ label, type = "text", value, onChange }: { label: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold text-black/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-[12px] bg-[#F5F5F5] px-4 py-4 text-[14px] text-black placeholder:text-black/40 outline-none ring-2 ring-transparent transition-shadow focus:ring-[#FF0A5B]/35"
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
          <div className="min-w-0">
            <div className="truncate text-[13px] font-semibold text-black">
              {t(locale, "blog_quote_banner.banner.title")}
            </div>
            <div className="truncate text-[12px] font-medium text-black/55">
              {t(locale, "blog_quote_banner.banner.subtitle")}
            </div>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="shrink-0 rounded-full bg-[#FF0A5B] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
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

          <div className="relative w-full max-w-[520px] rounded-[22px] bg-white px-8 pt-8 pb-7 shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[22px] font-extrabold leading-none tracking-tight text-black">
                  {t(locale, "blog_quote_banner.modal.title")}
                </h3>
                <p className="mt-3 text-[13px] font-medium leading-6 text-black/55">
                  {t(locale, "blog_quote_banner.modal.subtitle")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-black/70 transition-colors hover:bg-zinc-200"
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
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#FF0A5B] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(255,10,91,0.34)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,10,91,0.50)] disabled:opacity-50 disabled:cursor-not-allowed"
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
