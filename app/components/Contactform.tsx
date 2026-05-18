"use client";

import { useRef, useState } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const successRef = useRef<HTMLHeadingElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!acceptedPrivacy) {
      setSubmitError(
        "Du behöver godkänna integritetspolicyn för att skicka formuläret."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: "",
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      trackEvent("generate_lead", {
        form_name: "contact_form",
        form_location: "homepage_contact_section",
      });

      setIsSuccess(true);
      setAcceptedPrivacy(false);

      setTimeout(() => {
        successRef.current?.focus();
      }, 0);
    } catch (error) {
      console.error("Form submit error:", error);
      setSubmitError(
        "Något gick fel när formuläret skulle skickas. Försök igen."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/15 backdrop-blur-sm">
      <div aria-live="polite" aria-atomic="true">
        {!isSuccess ? (
          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            {submitError && (
              <div
                role="alert"
                className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
              >
                {submitError}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Namn
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#F5B74E]"
                placeholder="Ditt namn"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                E-post
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#F5B74E]"
                placeholder="din@epost.se"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#F5B74E]"
                placeholder="Berätta kort vad du vill ha hjälp med"
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={(e) => {
                    setAcceptedPrivacy(e.target.checked);
                    if (e.target.checked) setSubmitError("");
                  }}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-white/[0.06] accent-[#F5B74E]"
                />

                <label
                  htmlFor="privacy"
                  className="text-sm leading-6 text-white/75"
                >
                  Jag godkänner att AXA Consult behandlar mina uppgifter enligt{" "}
                  <a
                    href="/integritetspolicy"
                    className="font-medium text-[#F5B74E] underline underline-offset-4 transition hover:text-white"
                  >
                    integritetspolicyn
                  </a>
                  .
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-[#10161f] transition hover:bg-[#f8f3ea] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
            </button>
          </form>
        ) : (
          <div className="rounded-[22px] border border-white/10 bg-white/[0.06] p-6 text-white">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]">
              Tack
            </p>

            <h3
              ref={successRef}
              tabIndex={-1}
              className="mt-3 text-[24px] font-medium focus:outline-none"
            >
              Din förfrågan är skickad.
            </h3>

            <p className="mt-4 text-white/75">
              Jag återkommer så snart jag kan.
            </p>

            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="mt-6 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
            >
              Skicka igen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}