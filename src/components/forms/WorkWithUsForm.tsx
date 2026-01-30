"use client";

import { useEffect, useRef, useState } from "react";

export default function WorkWithUsForm() {
  const didPrefillRef = useRef(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (didPrefillRef.current) return;
    if (typeof window === "undefined") return;
    const m = new URLSearchParams(window.location.search).get("message");
    if (!m) return;
    if (message.trim().length > 0) return;
    setMessage(m);
    didPrefillRef.current = true;
  }, [message]);

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
          source: `Work With Us Form${message ? ` - Message: ${message}` : ""}`,
        }),
      });

      if (response.ok) {
        setStatusMessage("✅ Thank you! We'll contact you soon.");
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
        setSubscribe(true);
      } else {
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch {
      setStatusMessage("❌ Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-9" onSubmit={handleSubmit}>
      <label className="block">
        <span className="text-[13px] font-semibold text-black/45">
          Your Full Name*
        </span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3 w-full border-b border-black/45 bg-transparent pb-3 text-[14px] font-semibold text-black placeholder:text-black/30 focus:outline-none"
          placeholder=""
          required
        />
      </label>

      <label className="block">
        <span className="text-[13px] font-semibold text-black/45">
          Company Name*
        </span>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-3 w-full border-b border-black/45 bg-transparent pb-3 text-[14px] font-semibold text-black placeholder:text-black/30 focus:outline-none"
          placeholder=""
          required
        />
      </label>

      <label className="block">
        <span className="text-[13px] font-semibold text-black/45">
          you@yourcompany.com*
        </span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-3 w-full border-b border-black/45 bg-transparent pb-3 text-[14px] font-semibold text-black placeholder:text-black/30 focus:outline-none"
          placeholder=""
          required
        />
      </label>

      <label className="block">
        <span className="text-[13px] font-semibold text-black/45">
          Tell us about your game or what you need help with...
        </span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-3 w-full resize-none border-b border-black/45 bg-transparent pb-3 text-[14px] font-semibold text-black placeholder:text-black/30 focus:outline-none"
          placeholder=""
        />
      </label>

      <label className="flex items-center gap-3 text-[13px] font-semibold text-black/70">
        <input
          type="checkbox"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          className="h-4 w-4 rounded border-black/30 text-[#FF0A5B] accent-[#FF0A5B]"
        />
        I&apos;d like to receive occasional marketing tips
      </label>

      {statusMessage && (
        <div className="text-[13px] font-medium text-center">
          {statusMessage}
        </div>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-[52px] w-full rounded-full bg-[#FF0A5B] text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Let’s Talk"}
        </button>

        <p className="mt-4 text-center text-[12px] font-semibold text-black/45">
          We&apos;ll never share your information. Only one expert will
          contact you.
        </p>
      </div>
    </form>
  );
}
