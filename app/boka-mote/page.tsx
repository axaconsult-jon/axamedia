"use client";

import Header from "../components/Header";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BokaMote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const successRef = useRef<HTMLHeadingElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      if (typeof window !== "undefined") {
        (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer =
          (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer || [];

        (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({
          event: "form_submit",
          form_name: "boka_mote",
        });
      }

      setIsSuccess(true);

      setTimeout(() => {
        successRef.current?.focus();
      }, 0);
    } catch (error) {
      console.error("Form submit error:", error);
      setSubmitError("Något gick fel när formuläret skulle skickas. Försök igen.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Hoppa till innehåll
      </a>

      <main id="main-content" className="relative min-h-screen overflow-x-hidden text-white">
        <div className="fixed inset-x-0 top-0 z-[120] h-[12px]">
          <Image
            src="/line-axa.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0">
          <Image
            src="/abtract-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,25,35,0.88)_0%,rgba(26,36,48,0.91)_46%,rgba(34,52,71,0.90)_100%)]" />
        </div>

        <Header variant="boka" />

        <section className="relative px-6 pb-20 pt-[190px] md:px-10 md:pb-28 md:pt-[220px] lg:px-16 lg:pt-[170px]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.012)_0%,rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.012)_100%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:gap-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-start xl:pt-6">
              <div>
                <div className="max-w-3xl">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                    Boka ett första samtal
                  </p>

                  <h1 className="mt-3 text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[64px]">
                    Låt oss prata om
                    <br />
                    vad som skulle göra
                    <br />
                    störst skillnad.
                  </h1>

                  <p className="mt-6 max-w-2xl text-[18px] leading-[1.8] text-white/80 md:text-[20px]">
                    Ett första samtal är ett enkelt sätt att prata om nuläge,
                    behov och vad som vore mest värdefullt att börja med.
                  </p>
                </div>

                <div className="mt-14 max-w-xl space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                      Vad vi pratar om
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Er marknadsföring idag, vad som fungerar, vad som känns
                      oklart och vad som sannolikt borde prioriteras först.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                      Innan ni skickar
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Ni behöver inte ha allt klart. Skriv bara kort vad ni
                      funderar på så tar vi det därifrån.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                      Efteråt
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Ni får ett tydligare grepp om vad nästa steg skulle kunna
                      vara — enkelt, konkret och utan krångel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#ddd6cc] bg-[#f7f3eb] p-10 text-[#1A2430] shadow-[0_40px_100px_rgba(0,0,0,0.22)]">
                <div aria-live="polite" aria-atomic="true">
                  {!isSuccess ? (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {submitError && (
                        <div
                          role="alert"
                          className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
                        >
                          {submitError}
                        </div>
                      )}

                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-[#2f2f35]">
                          Namn
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Ditt namn"
                          required
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#bcae98] focus:border-[#9a6617] focus:shadow-[0_0_0_3px_rgba(154,102,23,0.18)]"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="text-sm font-medium text-[#2f2f35]">
                          Företag
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Företagsnamn"
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#bcae98] focus:border-[#9a6617] focus:shadow-[0_0_0_3px_rgba(154,102,23,0.18)]"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-[#2f2f35]">
                          E-post
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="din@email.se"
                          required
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#bcae98] focus:border-[#9a6617] focus:shadow-[0_0_0_3px_rgba(154,102,23,0.18)]"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sm font-medium text-[#2f2f35]">
                          Kort om behov
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          autoComplete="off"
                          placeholder="Beskriv kort vad ni vill ha hjälp med"
                          required
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#bcae98] focus:border-[#9a6617] focus:shadow-[0_0_0_3px_rgba(154,102,23,0.18)]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#1A2430] px-7 py-3.5 text-[15px] font-medium text-white transition hover:scale-[0.97] hover:bg-[#24364a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a6617] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
                      </button>
                    </form>
                  ) : (
                    <div className="rounded-[22px] border border-[#ddd6cc] bg-[#f7f3eb] p-6 text-[#0f172a]">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a5a14]">
                        Tack
                      </p>
                      <h2
                        ref={successRef}
                        tabIndex={-1}
                        className="mt-3 text-[26px] font-medium focus:outline-none"
                      >
                        Er förfrågan är skickad.
                      </h2>
                      <p className="mt-4 text-[#0f172a]/80">
                        Vi återkommer så snart vi kan.
                      </p>

                      <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 rounded-full border border-[#cfc6ba] px-6 py-3 text-[#0f172a] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a6617]"
                      >
                        Skicka igen
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative mt-24 bg-[#0f1a24] px-6 py-16 md:px-10 lg:px-16">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
            <div className="max-w-sm">
              <Image
                src="/axa-logo.svg"
                alt="AXA Consult"
                width={144}
                height={38}
                priority
              />
              <p className="mt-6 text-[14px] leading-[1.7] text-white/65">
                Strategi, webb och marknadsföring
                <br />
                för företag som vill skapa tydlighet
                <br />
                och bättre struktur.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-white/75 md:items-center">
              {[
                  ["Startsida", "/"],
                  ["Tjänster", "/#services"],
                  ["Arbetssätt", "/#process"],
                  ["Samarbete", "/#samarbete"],
                  ["FAQ", "/#faq"],
                  ["Kontakt", "/#contact"],
                    ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="md:text-right">
              <p className="text-[14px] text-white/60">Kontakt</p>

              <div className="mt-3 space-y-2 text-[15px] text-white/90">
                <p>
                  <a
                    href="mailto:info@axaconsult.se"
                    className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
                  >
                    info@axaconsult.se
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+46760353560"
                    className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
                  >
                    +46 760 35 35 60
                  </a>
                </p>
              </div>

              <a
                href="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#10161f] transition hover:scale-[0.97] hover:bg-[#fff7ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
              >
                Till startsidan
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6 text-center text-[13px] text-white/50">
            © 2026 AXA Consult. Alla rättigheter förbehållna.
          </div>
        </footer>
      </main>
    </>
  );
}