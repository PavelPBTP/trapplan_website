"use client";

import { useState } from "react";

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

export default function GetAQuote() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

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
        setMessage("✅ Thank you! We'll contact you soon.");
        setName("");
        setCompany("");
        setEmail("");
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch {
      setMessage("❌ Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="-mt-12 bg-[#F3F3F3] pb-24 pt-0">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0F0F0F] px-8 py-10 shadow-[0_60px_140px_rgba(0,0,0,0.30)] lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-45 [background-image:radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(255,10,91,0.16),transparent_60%)]" />
          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-[44px] font-extrabold leading-[0.92] tracking-tight text-white">
                GET A QUOTE
              </h2>
              <p className="mt-6 max-w-[46ch] text-[14px] leading-6 text-[#A0A0A0]">
                Let’s talk about your task, then we’ll go whisper and come back with a final offer.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 ring-2 ring-white/15" />
                <div>
                  <div className="text-[16px] font-extrabold leading-tight text-white">
                    Pavel Beresnev
                  </div>
                  <div className="mt-1 text-[12px] font-semibold text-white/55">
                    CEO Trap Plan Agency
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
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative rounded-[24px] bg-white px-8 py-8 shadow-[0_44px_120px_rgba(0,0,0,0.55)]">
                <h3 className="text-[24px] font-extrabold leading-none tracking-tight text-black">
                  Let’s work together
                </h3>

                <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                  <Field label="Name*" value={name} onChange={(e) => setName(e.target.value)} />
                  <Field label="Company name*" value={company} onChange={(e) => setCompany(e.target.value)} />
                  <Field label="Work Email*" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                  {message && (
                    <div className="text-[13px] font-medium text-center">
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#FF0A5B] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(255,10,91,0.34)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,10,91,0.50)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
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
