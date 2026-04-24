"use client";

import Header from "../components/Header-copy";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WorkStyleCarousel from "../components/WorkStyleCarousel2";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const faqItems = [
    {
      question: "Vad gör AXA Consult?",
      answer:
        "AXA Consult hjälper företag att få bättre struktur i marknadsföringen, prioritera rätt insatser och driva arbetet framåt. Det kan handla om strategi, annonsering, SEO, innehåll, webb och löpande marknadsstöd.",
    },
    {
      question: "Är ni en mediabyrå?",
      answer:
        "Vi erbjuder mycket av samma stöd som en mediabyrå, men arbetar närmare, med färre kunder åt gången och med ett mer hands-on upplägg.",
    },
    {
      question: "Vilka företag passar ni bäst för?",
      answer:
        "Vi passar ofta företag som vill få bättre ordning i marknadsföringen men som saknar en intern marknadsansvarig eller behöver ett starkare externt stöd.",
    },
    {
      question: "Jobbar ni strategiskt eller operativt?",
      answer:
        "Både och. I vissa uppdrag ligger fokus på riktning och prioritering. I andra driver vi också genomförandet löpande.",
    },
    {
      question: "Hur vet vi vad vi ska börja med?",
      answer:
        "Det är en viktig del av arbetet. Vi går igenom nuläge, behov och mål och hjälper er att se vad som sannolikt gör störst skillnad först.",
    },
    {
      question: "Vad kostar det att arbeta med AXA Consult?",
      answer:
        "Det beror på omfattning, mål och hur mycket stöd ni behöver. Målet är alltid att hitta ett upplägg som känns rimligt och skapar tydligt värde.",
    },
  ];

  const services = [
    {
      title: "Strategi & prioritering",
      text: "Vi hjälper er sätta riktning, välja fokus och prioritera det som faktiskt gör skillnad.",
    },
    {
      title: "SEO & synlighet",
      text: "För företag som vill synas bättre i sök och bygga relevant trafik över tid.",
    },
    {
      title: "Google Ads & annonsering",
      text: "Vi hjälper er nå rätt målgrupp och få bättre koll på vad som fungerar.",
    },
    {
      title: "Sociala medier & innehåll",
      text: "Innehåll och annonser som stärker ert varumärke och driver affär.",
    },
    {
      title: "Nyhetsbrev & kundkommunikation",
      text: "För företag som vill hålla kontakt med kunder och skapa fler affärer över tid.",
    },
    {
      title: "Webb & varumärke",
      text: "Vi ser till att budskap, struktur och upplevelse hänger ihop.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Nuläge & behov",
      text: "Vi går igenom var ni står idag, vad som redan görs och vad som behöver bli tydligare.",
    },
    {
      number: "02",
      title: "Riktning & prioritering",
      text: "Vi sätter fokus på det som gör störst skillnad först och landar i ett rimligt nästa steg.",
    },
    {
      number: "03",
      title: "Genomförande",
      text: "Vi driver arbetet framåt i rätt tempo och ser till att det som beslutas också blir gjort.",
    },
    {
      number: "04",
      title: "Uppföljning & justering",
      text: "Vi följer upp, justerar och förbättrar löpande utifrån vad som faktiskt fungerar.",
    },
  ];

  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]";

  const mobileLinkClass = `py-3 text-[28px] tracking-[-0.04em] text-white transition hover:text-[#F5B74E] ${focusRing}`;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Hoppa till innehåll
      </a>

      <main
        id="main-content"
        className="relative min-h-screen overflow-x-hidden bg-white text-[#1A2430]"
      >
        <div
          className={`fixed inset-x-0 top-0 z-[120] h-[10px] transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/line-axa.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className={`fixed inset-0 z-[200] md:hidden ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            type="button"
            aria-label="Stäng menybakgrund"
            onClick={() => setMenuOpen(false)}
            className={`absolute inset-0 bg-black/35 transition-opacity duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobilmeny"
            className={`absolute inset-y-0 right-0 w-full bg-[#101923] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-8">
              <div className="flex justify-end">
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Stäng meny"
                  className={`text-[40px] leading-none text-white transition hover:text-[#F5B74E] ${focusRing}`}
                >
                  <span aria-hidden="true" className="inline-block rotate-45">
                    +
                  </span>
                </button>
              </div>

              <nav aria-label="Mobil navigering" className="mt-8 flex flex-col">
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Tjänster
                </a>
                <a
                  href="#process"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Arbetssätt
                </a>
                <a
                  href="#samarbete"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Samarbete
                </a>
                <a
                  href="#faq"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Kontakt
                </a>
              </nav>

              <div className="mt-auto pt-8">
                <a
                  href="/boka-mote"
                  onClick={() => setMenuOpen(false)}
                  className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-white to-[#f4efe6] px-6 py-4 text-[15px] font-medium text-[#10161f] transition hover:scale-[0.985] hover:from-[#fff7ea] hover:to-white ${focusRing}`}
                >
                  Boka ett första samtal
                </a>
              </div>
            </div>
          </div>
        </div>

        <Header
          variant="home"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <section className="relative overflow-x-hidden px-6 pb-20 pt-[140px] md:px-10 md:pb-24 md:pt-[180px] lg:px-16 lg:pb-28 lg:pt-[210px]">
          <div className="absolute inset-0">
            <Image
              src="/abtract-hero.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-[0.12]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,18,29,0.99)_0%,rgba(10,23,36,0.98)_35%,rgba(13,27,43,0.97)_70%,rgba(16,31,47,0.96)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,130,180,0.10),transparent_22%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(50,84,126,0.08),transparent_24%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-7">
              <p
                className={`mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5B74E]/82 sm:text-[12px] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700`}
              >
                Marknadsföring för företag som vill framåt
              </p>

              <h1
                className={`max-w-[11ch] text-[34px] font-semibold leading-[1.14] tracking-[-0.05em] text-white sm:max-w-[12ch] sm:text-[44px] md:max-w-[13ch] md:text-[56px] lg:max-w-none lg:text-[68px] lg:leading-[1.08] xl:text-[76px] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700`}
              >
                <span className="block">
                  Marknadsföring som drivs framåt
                </span>
                <span className="block bg-gradient-to-r from-white via-[#dce8f6] to-[#8fb3da] bg-clip-text pb-[0.08em] text-transparent">
                  inte bara planeras
                </span>
              </h1>

              <p
                className={`mt-5 max-w-2xl text-[17px] leading-[1.75] text-white/76 sm:text-[18px] md:text-[19px] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700 delay-100`}
              >
                AXA Consult hjälper företag att få struktur i
                marknadsföringen, prioritera rätt och driva arbetet framåt.
                Ni får tillgång till rätt kompetens utan att behöva bygga en
                egen marknadsavdelning.
              </p>

              <div
                className={`mt-8 flex flex-col gap-3 sm:flex-row ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700 delay-150`}
              >
                <a
                  href="/boka-mote"
                  className={`inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#10161f] transition hover:bg-[#f8f3ea] ${focusRing}`}
                >
                  Boka ett första samtal
                </a>

                <a
                  href="#services"
                  className={`inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:border-white/24 hover:bg-white/[0.08] ${focusRing}`}
                >
                  Se hur vi hjälper till
                </a>
              </div>
            </div>

            <div
              className={`lg:col-span-5 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } transition-all duration-700 delay-300`}
            >
              <div className="rounded-[26px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-5 md:p-6">
                <div className="rounded-[22px] bg-[linear-gradient(135deg,rgba(24,39,58,0.92)_0%,rgba(35,56,82,0.90)_100%)] p-5 text-white sm:p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d5e5f7]">
                    Så kan vi hjälpa till
                  </p>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4">
                      <p className="text-[15px] font-medium text-white/92">
                        Rätt prioriteringar
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.7] text-white/70">
                        Vi hjälper er se vad som är viktigast just nu och vad
                        som kan vänta.
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4">
                      <p className="text-[15px] font-medium text-white/92">
                        Stöd i det löpande arbetet
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.7] text-white/70">
                        För företag som vill ha hjälp att hålla ihop arbetet
                        över tid.
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4">
                      <p className="text-[15px] font-medium text-white/92">
                        Från plan till genomförande
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.7] text-white/70">
                        När det inte räcker med idéer, utan också behöver bli
                        något konkret.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WorkStyleCarousel />

        <section
          id="services"
          className="scroll-mt-[120px] border-y border-[#ece2cf] bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                Tjänster
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Det här kan vi hjälpa er med
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Ni får tillgång till flera kompetenser utan att behöva samla
                allt internt. Vi anpassar upplägget efter era mål och hur mycket
                stöd ni behöver.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[2rem] border border-[#e7dcc7] bg-white p-7 shadow-sm transition hover:border-[#F5B74E]/40 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="relative overflow-hidden bg-[linear-gradient(135deg,#13202c_0%,#1b2c3d_55%,#29405c_100%)] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,183,78,0.12),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0d9ad]">
                  Arbetssätt
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ett tydligt sätt att arbeta tillsammans
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Det ska vara enkelt att förstå vad som görs, varför det görs
                  och vad nästa steg är.
                </p>
              </div>

              <div className="grid gap-4">
                {process.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#F5B74E_0%,#d9982f_100%)] text-sm font-semibold text-[#1a2430] shadow-md shadow-[#F5B74E]/20">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-200">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)] px-6 py-24 text-[#1A2430] md:px-10 lg:px-16 lg:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
                FAQ
              </p>
              <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] md:text-[54px]">
                Vanliga frågor
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[22px] border border-black/8 bg-white px-6 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.035)] transition duration-300 open:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                >
                  <summary
                    className={`flex cursor-pointer list-none items-start justify-between gap-6 text-[20px] font-medium leading-[1.35] tracking-[-0.03em] ${focusRing}`}
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-[#8a5a14] transition duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-5 max-w-4xl text-[17px] leading-[1.85] text-[#1A2430]/82">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[linear-gradient(135deg,#13202c_0%,#1b2c3d_55%,#29405c_100%)] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,183,78,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0d9ad]">
                  Kontakt
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Vill ni ta ett första samtal?
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
                  Hör av er så pratar vi om nuläge, behov och vad som kan vara
                  ett rimligt nästa steg. Enkelt, konkret och utan krångel.
                </p>

                <div className="mt-8 space-y-3 text-slate-200">
                  <p>
                    <span className="font-semibold text-white">Telefon:</span>{" "}
                    +46 (0)760 35 35 60
                  </p>
                  <p>
                    <span className="font-semibold text-white">E-post:</span>{" "}
                    info@axaconsult.se
                  </p>
                  <p>
                    <span className="font-semibold text-white">Plats:</span>{" "}
                    Uppsala & Falun
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/15 backdrop-blur-sm">
                <form className="grid gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Namn
                    </label>
                    <input
                      id="name"
                      type="text"
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
                      type="email"
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
                      rows={5}
                      className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#F5B74E]"
                      placeholder="Berätta kort vad ni vill ha hjälp med"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-[#10161f] transition hover:bg-[#f8f3ea]"
                  >
                    Skicka förfrågan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}