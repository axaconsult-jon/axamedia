"use client";

import Image from "next/image";
import { useState } from "react";

export default function BokaMote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSuccess(true);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#13202c] text-white">
      <div className="absolute inset-x-0 top-0 z-30 h-[10px]">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,127,196,0.16),transparent_26%),linear-gradient(135deg,rgba(17,25,35,0.90)_0%,rgba(26,36,48,0.94)_46%,rgba(34,52,71,0.94)_100%)]" />
      </div>

      <div className="relative px-6 pb-20 pt-8 md:px-10 lg:px-16 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between pt-[10px]">
            <a href="/" className="flex items-center">
              <Image
                src="/axa-logo.svg"
                alt="AXA Consult"
                width={144}
                height={38}
                priority
              />
            </a>

            <a
              href="/"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-5 py-2.5 text-[14px] font-medium text-white/90 transition hover:scale-[0.97] hover:bg-white/[0.08]"
            >
              Till startsidan
            </a>
          </header>

          <div className="mt-16 max-w-3xl md:mt-24">
            <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
              Boka möte
            </p>

            <h1 className="mt-3 text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[64px]">
              Låt oss ta ett
              <br />
              första samtal.
            </h1>

            <p className="mt-6 max-w-2xl text-[18px] leading-[1.8] text-white/66 md:text-[20px]">
              Ett första möte är ett enkelt sätt att prata om nuläge, behov och
              vad som skulle vara mest värdefullt att börja med.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-xl space-y-4">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                  Vad vi pratar om
                </p>
                <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                  Er marknadsföring idag, vad som fungerar och vad som känns
                  oklart.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                  Innan du skickar
                </p>
                <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                  Du behöver inte ha allt klart. Skriv bara kort vad du
                  funderar på.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                  Efteråt
                </p>
                <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                  Jag återkommer med nästa steg – enkelt och konkret.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#ddd6cc] bg-[#f7f3eb] p-8 text-[#1A2430] shadow-[0_40px_100px_rgba(0,0,0,0.22)] md:p-10">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm text-[#3f3f46]">Namn</label>
                    <input
                      type="text"
                      placeholder="Ditt namn"
                      required
                      className="mt-2 w-full rounded-xl border border-[#ddd6cc] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#d6cfc3] focus:border-[#c8903a] focus:shadow-[0_0_0_3px_rgba(200,144,58,0.15)]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#3f3f46]">Företag</label>
                    <input
                      type="text"
                      placeholder="Företagsnamn"
                      className="mt-2 w-full rounded-xl border border-[#ddd6cc] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#d6cfc3] focus:border-[#c8903a] focus:shadow-[0_0_0_3px_rgba(200,144,58,0.15)]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#3f3f46]">E-post</label>
                    <input
                      type="email"
                      placeholder="din@email.se"
                      required
                      className="mt-2 w-full rounded-xl border border-[#ddd6cc] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#d6cfc3] focus:border-[#c8903a] focus:shadow-[0_0_0_3px_rgba(200,144,58,0.15)]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#3f3f46]">
                      Kort om behov
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Beskriv kort vad ni vill ha hjälp med"
                      required
                      className="mt-2 w-full rounded-xl border border-[#ddd6cc] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] transition outline-none hover:border-[#d6cfc3] focus:border-[#c8903a] focus:shadow-[0_0_0_3px_rgba(200,144,58,0.15)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#1A2430] px-7 py-3.5 text-[15px] font-medium text-white transition hover:scale-[0.97] hover:bg-[#24364a] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
                  </button>
                </form>
              ) : (
                <div className="rounded-[22px] border border-[#ddd6cc] bg-[#f7f3eb] p-6 text-[#0f172a]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#c8903a]">
                    Tack
                  </p>
                  <h2 className="mt-3 text-[26px] font-medium">
                    Din förfrågan är skickad.
                  </h2>
                  <p className="mt-4 text-[#0f172a]/80">
                    Vi återkommer så snart vi kan. 
                  </p>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 rounded-full border border-[#ddd6cc] px-6 py-3 text-[#0f172a]"
                  >
                    Skicka igen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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
            <p className="mt-6 text-[14px] leading-[1.7] text-white/50">
              Strategi, webb och marknadsföring
              <br />
              för företag som vill skapa tydlighet
              <br />
              och bättre struktur.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[15px] text-white/60 md:items-center">
            <a href="/" className="transition hover:text-white">
              Startsida
            </a>
            <a href="/#tjanster" className="transition hover:text-white">
              Tjänster
            </a>
            <a href="/#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="/#kontakt" className="transition hover:text-white">
              Kontakt
            </a>
          </div>

          <div className="md:text-right">
            <p className="text-[14px] text-white/50">Kontakt</p>

            <div className="mt-3 space-y-2 text-[15px] text-white/80">
              <p>info@axaconsult.se</p>
              <p>+46(0) 760 35 35 60</p>
            </div>

            <a
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#10161f] transition hover:scale-[0.97] hover:bg-[#fff7ea]"
            >
              Till startsidan
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-[13px] text-white/40">
          © 2026 AXA Consult. Alla rättigheter förbehållna.
        </div>
      </footer>
    </main>
  );
}