"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  title: string;
  placeholder: string;
  submitLabel: string;
  successLabel: string;
  errorLabel: string;
  privacyNote: string;
}

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export default function NewsletterSignup(props: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/send-to-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter subscriber",
          company: "—",
          email,
          source: "Newsletter (Footer)",
        }),
      });
      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <div className="mt-6">
      <div className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-black/45">
        {props.title}
      </div>
      {state === "success" ? (
        <p className="mt-3 text-[14px] font-semibold text-black">{props.successLabel}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            placeholder={props.placeholder}
            required
            className="flex-1 rounded-full border border-black/15 bg-white px-4 py-2 text-[13px] text-black placeholder:text-black/40 outline-none transition-shadow focus:border-black/30 focus:ring-2 focus:ring-[#FF0A5B]/20"
          />
          <button
            type="submit"
            disabled={state === "sending"}
            className="rounded-full bg-[#FF0A5B] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#E6004E] disabled:opacity-60"
          >
            {state === "sending" ? "…" : props.submitLabel}
          </button>
        </form>
      )}
      {state === "error" ? (
        <p className="mt-2 text-[11px] text-[#FF0A5B]">{props.errorLabel}</p>
      ) : null}
      <p className="mt-2 text-[11px] text-black/45">{props.privacyNote}</p>
    </div>
  );
}
