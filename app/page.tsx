"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Strategisk marknadsföring",
      text: "För företag som vill få tydligare riktning, bättre prioriteringar och en marknadsföring som faktiskt stöttar affären.",
    },
    {
      title: "Webb & innehåll",
      text: "Webbplatser, landningssidor och innehåll som känns tydliga, relevanta och lätta att agera på.",
    },
    {
      title: "CRO & förbättring",
      text: "Små och genomtänkta förändringar i struktur, budskap och användarresa som gör verklig skillnad.",
    },
    {
      title: "Löpande marknadsstöd",
      text: "Ett externt marknadsstöd för företag som saknar en intern marknadsansvarig men vill hålla tempot uppe.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Förstå nuläget",
      text: "Vi börjar med att titta på vad ni gör idag, vad som fungerar och vad som behöver bli tydligare.",
    },
    {
      number: "02",
      title: "Prioritera rätt",
      text: "Ni får en tydlig riktning med fokus på det som skapar mest effekt först.",
    },
    {
      number: "03",
      title: "Genomföra smart",
      text: "Vi tar nästa steg utan att göra det onödigt komplicerat eller tungrott.",
    },
    {
      number: "04",
      title: "Förbättra löpande",
      text: "Arbetet följs upp, justeras och fortsätter framåt med lugn och struktur.",
    },
  ];

  const faqItems = [
    {
      question:
        "Varför ska jag anlita en marknadskonsult och inte en byrå eller mediebyrå?",
      answer:
        "Att anlita en marknadskonsult kan vara rätt om du vill ha en mer personlig och skräddarsydd lösning. Du får en närmare samarbetspartner som kan anpassa strategi, prioriteringar och genomförande efter företagets behov, resurser och mål. Det kan också vara mer kostnadseffektivt än en större byrålösning.",
    },
    {
      question: "Vilka tjänster erbjuder du som marknadskonsult?",
      answer:
        "Tjänsterna anpassas efter behov och kan omfatta strategi, webb, innehåll, SEO, annonsering, CRO, nyhetsbrev, varumärkesutveckling och löpande marknadsstöd. Målet är att skapa tydlighet och framdrift i företagets marknadsföring.",
    },
    {
      question: "Vad gör en marknadskonsult?",
      answer:
        "En marknadskonsult hjälper företag att förbättra sin marknadsföring genom rådgivning, analys, struktur, prioritering och genomförande. Det handlar både om att tänka rätt strategiskt och att få rätt saker gjorda i praktiken.",
    },
    {
      question: "Hur anpassas strategin till olika företags behov?",
      answer:
        "Varje upplägg anpassas efter företagets nuläge, mål, resurser, budget och ambition. Arbetet börjar ofta med att förstå vad som fungerar idag, vad som saknas och vilka insatser som sannolikt ger bäst effekt först.",
    },
    {
      question: "Hur kan en marknadskonsult hjälpa mitt företag?",
      answer:
        "En marknadskonsult kan hjälpa er att få bättre struktur, tydligare budskap och bättre kontroll på vad marknadsföringen faktiskt leder till. Det sparar ofta tid och gör det enklare att prioritera rätt.",
    },
    {
      question: "Vad kostar det att anlita en marknadskonsult?",
      answer:
        "Kostnaden beror på behov, omfattning, mål och hur upplägget ser ut. Det kan handla om ett avgränsat projekt, löpande stöd eller en kombination. Upplägget anpassas efter vad som är mest rimligt och värdefullt för företaget.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#13202c] text-white">
      <div
        className={`fixed inset-x-0 top-0 z-[70] h-[10px] transition-all duration-700 ease-out ${
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
        className={`fixed inset-0 z-[80] md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/35 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-y-0 right-0 w-full bg-[#101923] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-6 pb-8 pt-8">
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Stäng meny"
                className="text-[40px] leading-none text-white/92 transition hover:text-[#F5B74E]"
              >
                <span className="inline-block rotate-45">+</span>
              </button>
            </div>

            <nav className="mt-10 flex flex-col border-t border-white/10">
              <a
                href="#tjanster"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-6 text-[30px] font-normal tracking-[-0.04em] text-white/92 transition hover:text-[#F5B74E]"
              >
                Tjänster
              </a>
              <a
                href="#process"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-6 text-[30px] font-normal tracking-[-0.04em] text-white/92 transition hover:text-[#F5B74E]"
              >
                Process
              </a>
              <a
                href="#om"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-6 text-[30px] font-normal tracking-[-0.04em] text-white/92 transition hover:text-[#F5B74E]"
              >
                Om
              </a>
              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-6 text-[30px] font-normal tracking-[-0.04em] text-white/92 transition hover:text-[#F5B74E]"
              >
                FAQ
              </a>
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-6 text-[30px] font-normal tracking-[-0.04em] text-white/92 transition hover:text-[#F5B74E]"
              >
                Kontakt
              </a>
            </nav>

            <div className="mt-auto pt-8">
              <a
                href="/boka-mote"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-white to-[#f4efe6] px-6 py-4 text-[15px] font-medium text-[#10161f] transition hover:scale-[0.985] hover:from-[#fff7ea] hover:to-white"
              >
                Boka möte
              </a>
            </div>
          </div>
        </div>
      </div>

    <header className="sticky inset-x-0 top-0 z-50 px-5 md:px-10 lg:px-16">
  <nav className="mx-auto flex max-w-7xl items-center justify-between py-5 md:py-6">
    <a href="#top" className="flex items-center">
      <Image
        src="/axa-logo.svg"
        alt="AXA Consult"
        width={124}
        height={33}
        priority
        className="md:w-[132px]"
      />
    </a>

    <div className="hidden md:flex items-center gap-2 rounded-2xl">
      <a
        href="#tjanster"
        className="rounded-2xl px-4 py-2 text-[15px] text-white/70 transition hover:bg-white/8 hover:text-white"
      >
        Tjänster
      </a>
      <a
        href="#process"
        className="rounded-2xl px-4 py-2 text-[15px] text-white/70 transition hover:bg-white/8 hover:text-white"
      >
        Process
      </a>
      <a
        href="#om"
        className="rounded-2xl px-4 py-2 text-[15px] text-white/70 transition hover:bg-white/8 hover:text-white"
      >
        Om
      </a>
      <a
        href="#faq"
        className="rounded-2xl px-4 py-2 text-[15px] text-white/70 transition hover:bg-white/8 hover:text-white"
      >
        FAQ
      </a>
      <a
        href="#kontakt"
        className="rounded-2xl px-4 py-2 text-[15px] text-white/70 transition hover:bg-white/8 hover:text-white"
      >
        Kontakt
      </a>
    </div>

    <div className="flex items-center gap-3">
      <a
        href="/boka-mote"
        className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#10161f] transition hover:scale-[0.97] hover:bg-[#fff7ea]"
      >
        Boka möte
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Öppna meny"
        className="text-[34px] leading-none text-white/92 transition hover:text-[#F5B74E] md:hidden"
      >
        <span
          className={`inline-block transition-transform duration-300 ${
            menuOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
    </div>
  </nav>
</header>

      <section className="relative px-6 pb-20 pt-8 md:px-10 md:pb-28 lg:px-16 lg:pt-10">
        <div className="absolute inset-0">
          <Image
            src="/abtract-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,127,196,0.18),transparent_26%),linear-gradient(135deg,rgba(17,25,35,0.88)_0%,rgba(26,36,48,0.92)_46%,rgba(34,52,71,0.92)_100%)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015)_0%,rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.015)_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="relative pt-16 md:pt-24 lg:pt-28">
            <div className="grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div className="relative z-10 max-w-4xl">
                <div
                  className={`transition-all duration-700 delay-150 ease-out ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                    Strategi, webb och marknadsföring
                  </p>

                  <h1 className="max-w-4xl text-[44px] font-semibold leading-[0.92] tracking-[-0.065em] text-white sm:text-[60px] md:text-[78px] lg:text-[92px]">
                    Marknadsföring
                    <br />
                    som skapar
                    <br />
                    tydlighet och
                    <br />
                    driver affären
                    <br />
                    framåt.
                  </h1>
                </div>

                <div
                  className={`transition-all duration-700 delay-300 ease-out ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <p className="mt-8 max-w-2xl text-[18px] leading-[1.8] text-white/64 md:text-[20px]">
                    AXA Consult hjälper företag att få bättre struktur, tydligare budskap och rätt prioriteringar — från strategi och webb till innehåll, CRO och löpande marknadsstöd.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#kontakt"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-[#f4efe6] px-6 py-3.5 text-[15px] font-medium text-[#10161f] transition duration-300 hover:scale-[0.97] hover:from-[#fff7ea] hover:to-white active:scale-[0.95]"
                    >
                      Boka ett möte
                    </a>
                    <a
                      href="#tjanster"
                      className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-6 py-3.5 text-[15px] font-medium text-white/88 transition duration-300 hover:scale-[0.97] hover:bg-white/[0.09] active:scale-[0.95]"
                    >
                      Se vad jag hjälper till med
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`relative z-10 transition-all duration-700 delay-450 ease-out ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="rounded-[30px] border border-white/15 bg-white/[0.08] p-5 shadow-[0_40px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 transition duration-500 hover:bg-white/[0.08]">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                        Fokus
                      </p>
                      <p className="mt-3 text-[22px] leading-[1.32] text-white/92">
                        Tydlighet i erbjudande och kommunikation
                      </p>
                    </div>

                    <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 transition duration-500 hover:bg-white/[0.08]">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                        Mål
                      </p>
                      <p className="mt-3 text-[22px] leading-[1.32] text-white/92">
                        Bättre struktur, bättre effekt
                      </p>
                    </div>

                    <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 transition duration-500 hover:bg-white/[0.08] sm:col-span-2 lg:col-span-1 xl:col-span-2">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                        Arbetssätt
                      </p>
                      <p className="mt-3 text-[19px] leading-[1.7] text-white/78">
                        Praktiskt, affärsnära och anpassat efter hur mycket stöd företaget faktiskt behöver.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="tjanster" className="mt-28 md:mt-36">
            <div className="mb-12 max-w-2xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/70">
                Tjänster
              </p>
              <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[54px]">
                Ett externt marknadsstöd
                <br />
                som skapar framdrift.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:bg-white/[0.1]"
                >
                  <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.035em] text-white/95">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.9] text-white/66">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div id="process" className="mt-28 md:mt-36">
            <section className="rounded-[36px] border border-white/10 bg-black/10 px-6 py-8 backdrop-blur-sm md:px-8 md:py-10 lg:px-10 lg:py-12">
              <div className="mb-12 max-w-2xl">
                <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/70">
                  Process
                </p>
                <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[54px]">
                  En lugn process som gör det
                  <br />
                  enklare att komma vidare.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {process.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5 transition duration-500 hover:bg-white/[0.07] md:p-6"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5B74E]/65">
                      {step.number}
                    </p>
                    <h3 className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-white/95">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.9] text-white/66">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section
        id="om"
        className="bg-[#f4f1eb] px-6 py-24 text-[#1A2430] md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#c8903a]">
              Om AXA Consult
            </p>
            <h2 className="mt-3 max-w-xl text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] md:text-[54px]">
              För företag som vill ha
              <br />
              bättre struktur i sin
              <br />
              marknadsföring.
            </h2>

            <div className="mt-8 space-y-6 text-[18px] leading-[1.9] text-[#1A2430]/76">
              <p>
                AXA Consult passar företag som behöver någon som hjälper dem att tänka rätt, prioritera klokt och få marknadsföringen att hänga ihop.
              </p>
              <p>
                Ibland handlar det om en webbplats. Ibland om innehåll, annonsering eller att få tydlighet i erbjudandet. Ofta handlar det om att någon behöver hålla ihop helheten.
              </p>
              <p>
                Målet är inte att göra marknadsföringen krångligare — utan tydligare, lugnare och mer affärsnära.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-black/6 shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
            <Image
              src="/marknadsforingskonsult.webp"
              alt="Arbete med laptop och mobil"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1A2430]/35" />
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="bg-[#f4f1eb] px-6 pb-24 pt-0 text-[#1A2430] md:px-10 lg:px-16 lg:pb-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#c8903a]">
              FAQ
            </p>
            <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] md:text-[54px]">
              Vanliga frågor om att anlita
              <br />
              en marknadskonsult.
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[22px] border border-black/8 bg-white/90 px-6 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.035)] transition duration-300 open:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[20px] font-medium leading-[1.35] tracking-[-0.03em]">
                  <span>{item.question}</span>
                  <span className="mt-1 text-[#c8903a] transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-4xl text-[17px] leading-[1.85] text-[#1A2430]/76">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="relative overflow-hidden bg-[#13202c] px-6 pb-24 pt-24 md:px-10 lg:px-16 lg:pb-28 lg:pt-28"
      >
        <div className="absolute inset-0">
          <Image
            src="/abtract-hero.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.10]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(19,32,44,0.92)_0%,rgba(28,44,60,0.88)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.05] px-8 py-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.14)] backdrop-blur-sm md:px-12 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/70">
            Kontakt
          </p>
          <h2 className="mt-3 text-[38px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[58px]">
            Vill du se hur det här kan se
            <br />
            ut för ditt företag?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-[1.85] text-white/74">
            Hör av dig så tar vi ett första samtal om nuläge, behov och vad som vore mest värdefullt att börja med.
          </p>
          <p className="mt-6 text-[15px] text-white/60">
            Vi finns i Uppsala och Falun och arbetar med företag i hela Sverige – både lokalt och nationellt.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@axaconsult.se"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-[#f4efe6] px-6 py-3.5 text-[15px] font-medium text-[#10161f] transition duration-300 hover:scale-[0.97] hover:from-[#fff7ea] hover:to-white active:scale-[0.95]"
            >
              info@axaconsult.se
            </a>
            <a
              href="tel:+46760353560"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-6 py-3.5 text-[15px] font-medium text-white/92 transition duration-300 hover:scale-[0.97] hover:bg-white/[0.08] active:scale-[0.95]"
            >
              +46(0) 760 35 35 60
            </a>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#0f1a24] px-6 py-16 md:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div className="max-w-sm">
            <Image
              src="/axa-logo.svg"
              alt="AXA Consult"
              width={130}
              height={32}
              className="opacity-90"
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
            <a href="#tjanster" className="transition hover:text-white">
              Tjänster
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#om" className="transition hover:text-white">
              Om
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#kontakt" className="transition hover:text-white">
              Kontakt
            </a>
          </div>

          <div className="md:text-right">
            <p className="text-[14px] text-white/50">Kontakt</p>

            <div className="mt-3 space-y-2 text-[15px] text-white/80">
              <p>info@axaconsult.se</p>
              <p>+46 760 35 35 60</p>
            </div>

            <div className="mt-6 space-y-3 text-[14px] text-white/60">
              <div>
                <p className="text-white/80">Uppsala</p>
                <p>Bergsbrunnagatan 5</p>
              </div>

              <div>
                <p className="text-white/80">Falun</p>
                <p>Linslagarvägen 2</p>
                <p>791 61 Falun</p>
              </div>
            </div>

            <a
              href="/boka-mote"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#10161f] transition hover:scale-[0.97] hover:bg-[#fff7ea]"
            >
              Boka möte
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-[13px] text-white/40">
          © 2026 AXA Consult
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}