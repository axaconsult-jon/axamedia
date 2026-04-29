"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BokaMote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const successRef = useRef<HTMLHeadingElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!acceptedPrivacy) {
      setSubmitError("Du behöver godkänna integritetspolicyn för att skicka formuläret.");
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
          company: formData.get("company"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      if (typeof window !== "undefined") {
        (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer =
          (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer || [];

        (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({
          event: "form_submit",
          form_name: "boka_mote",
        });
      }

      setIsSuccess(true);
      setAcceptedPrivacy(false);

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
        <div className="fixed inset-x-0 top-0 z-[120] h-[10px]">
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
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111c_0%,#0a1724_38%,#102238_72%,#142b44_100%)]" />

          <div className="hero-particles absolute inset-0" />
          <div className="hero-wave absolute inset-x-0 bottom-0 h-[42%]" />

          <div className="absolute right-[6%] top-[22%] h-[420px] w-[420px] rounded-full bg-[#F5B74E]/20 blur-[140px]" />
          <div className="absolute left-[2%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-[#8fb3da]/18 blur-[130px]" />
        </div>

        <Header variant="boka" />

        <section className="relative px-6 pb-28 pt-[165px] md:px-10 md:pb-32 md:pt-[205px] lg:px-16 lg:pb-36 lg:pt-[235px]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.012)_0%,rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.012)_100%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-24 xl:pt-6">
              <div>
                <div className="max-w-3xl">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]">
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
                  <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/75">
                      Vad vi pratar om
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Er marknadsföring idag, vad som fungerar, vad som känns
                      oklart och vad som sannolikt borde prioriteras först.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/75">
                      Innan ni skickar
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Ni behöver inte ha allt klart. Skriv bara kort vad ni
                      funderar på så tar vi det därifrån.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/75">
                      Efteråt
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Ni får ett tydligare grepp om vad nästa steg skulle kunna
                      vara — enkelt, konkret och utan krångel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#ddd6cc] bg-[#f7f3eb] p-6 text-[#1A2430] shadow-[0_40px_100px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
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
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] outline-none transition hover:border-[#bcae98] focus:border-[#8a5a14] focus:shadow-[0_0_0_3px_rgba(138,90,20,0.18)]"
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
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] outline-none transition hover:border-[#bcae98] focus:border-[#8a5a14] focus:shadow-[0_0_0_3px_rgba(138,90,20,0.18)]"
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
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] outline-none transition hover:border-[#bcae98] focus:border-[#8a5a14] focus:shadow-[0_0_0_3px_rgba(138,90,20,0.18)]"
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
                          className="mt-2 w-full rounded-xl border border-[#cfc6ba] bg-white px-4 py-3 text-[#111827] placeholder-[#6b7280] outline-none transition hover:border-[#bcae98] focus:border-[#8a5a14] focus:shadow-[0_0_0_3px_rgba(138,90,20,0.18)]"
                        />
                      </div>

                      <div className="rounded-2xl border border-[#ddd6cc] bg-white/60 p-4">
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
                            className="mt-1 h-4 w-4 rounded border-[#cfc6ba] accent-[#F5B74E]"
                          />

                          <label htmlFor="privacy" className="text-sm leading-6 text-[#2f2f35]">
                            Jag godkänner att AXA Consult behandlar mina uppgifter enligt{" "}
                            <a
                              href="/integritetspolicy"
                              className="font-medium text-[#8a5a14] underline underline-offset-4 transition hover:text-[#1A2430]"
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
                        className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#1A2430] px-7 py-3.5 text-[15px] font-medium text-white transition hover:scale-[0.97] hover:bg-[#24364a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E] disabled:cursor-not-allowed disabled:opacity-70"
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
                        className="mt-6 rounded-full border border-[#cfc6ba] px-6 py-3 text-[#0f172a] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
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

        <Footer />

        <style jsx>{`
          .hero-particles {
            opacity: 0.48;
            background-image:
              radial-gradient(circle, rgba(245, 183, 78, 0.48) 1px, transparent 1.8px),
              radial-gradient(circle, rgba(143, 179, 218, 0.38) 1px, transparent 1.7px),
              radial-gradient(circle, rgba(255, 255, 255, 0.22) 0.7px, transparent 1.4px);
            background-size: 96px 88px, 142px 132px, 210px 190px;
            background-position: 0 0, 42px 64px, 90px 30px;
            animation: particlesMove 32s linear infinite;
          }

          .hero-wave {
            opacity: 0.7;
            background:
              radial-gradient(ellipse at 20% 85%, rgba(143, 179, 218, 0.32), transparent 34%),
              radial-gradient(ellipse at 78% 75%, rgba(245, 183, 78, 0.28), transparent 36%),
              linear-gradient(115deg, transparent 0%, rgba(143, 179, 218, 0.15) 38%, rgba(245, 183, 78, 0.18) 62%, transparent 100%);
            filter: blur(1px);
            animation: waveMove 12s ease-in-out infinite alternate;
          }

          @keyframes particlesMove {
            from {
              background-position: 0 0, 42px 64px, 90px 30px;
            }
            to {
              background-position: 180px 90px, -90px 190px, 230px 120px;
            }
          }

          @keyframes waveMove {
            from {
              transform: translate3d(-3%, 8px, 0) scale(1);
            }
            to {
              transform: translate3d(4%, -10px, 0) scale(1.04);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-particles,
            .hero-wave {
              animation: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}