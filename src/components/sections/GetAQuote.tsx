"use client";

import { useState } from "react";

export type GetAQuoteTranslations = {
  title: string;
  subtitle: string;
  ceoTitle: string;
  messageWhatsapp: string;
  cardTitle: string;
  fieldName: string;
  fieldCompany: string;
  fieldEmail: string;
  submitSending: string;
  submitSend: string;
  success: string;
  errorGeneric: string;
  errorNetwork: string;
};

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

export default function GetAQuote({ translations: tx }: { translations: GetAQuoteTranslations }) {
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
          source: "Get A Quote (Homepage)",
        }),
      });

      if (response.ok) {
        setMessage(tx.success);
        setName("");
        setCompany("");
        setEmail("");
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
          setMessage(serverError);
        } else {
          const base = tx.errorGeneric;
          setMessage(requestId ? `${base} (Error ID: ${requestId})` : base);
        }
      }
    } catch {
      setMessage(tx.errorNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="-mt-12 bg-[#F3F3F3] pb-24 pt-0">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0F0F0F] px-8 py-10 shadow-[0_60px_140px_rgba(0,0,0,0.30)] lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-45 [background-image:radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(255,10,91,0.16),transparent_60%)]" />
          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-[44px] font-extrabold leading-[0.92] tracking-tight text-white">
                {tx.title}
              </h2>
              <p className="mt-6 max-w-[46ch] text-[14px] leading-6 text-[#A0A0A0]">
                {tx.subtitle}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 ring-2 ring-white/15" />
                <div>
                  <div className="text-[16px] font-extrabold leading-tight text-white">
                    Pavel Beresnev
                  </div>
                  <div className="mt-1 text-[12px] font-semibold text-white/55">
                    {tx.ceoTitle}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/381631808155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-white/15"
                >
                  {tx.messageWhatsapp}
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative rounded-[24px] bg-white px-8 py-8 shadow-[0_44px_120px_rgba(0,0,0,0.55)]">
                <h3 className="text-[24px] font-extrabold leading-none tracking-tight text-black">
                  {tx.cardTitle}
                </h3>

                <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                  <Field label={tx.fieldName} value={name} onChange={(e) => setName(e.target.value)} />
                  <Field label={tx.fieldCompany} value={company} onChange={(e) => setCompany(e.target.value)} />
                  <Field label={tx.fieldEmail} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                  {message && (
                    <div className="text-[13px] font-medium text-center">
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#FF0A5B] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(255,10,91,0.34)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,10,91,0.50)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? tx.submitSending
                      : tx.submitSend}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
