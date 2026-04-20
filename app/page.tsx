"use client";

import Header from "./components/Header";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

  const challenges = [
    "Ni gör en del marknadsföring, men det är oklart vad som faktiskt fungerar.",
    "Det finns idéer och ambition, men inget riktigt driver arbetet framåt.",
    "Ingen äger helheten fullt ut.",
    "Ni vet att ni borde göra mer, men inte vad som ska prioriteras först.",
  ];

  const services = [
    {
      title: "Tydlig riktning",
      text: "Ni får en konkret plan för vad som ska göras, vad som kan vänta och vad som faktiskt kommer göra skillnad.",
    },
    {
      title: "Bättre prioriteringar",
      text: "Fokus på det som driver affären framåt först — inte det som bara känns bra att ha gjort.",
    },
    {
      title: "Genomförande",
      text: "Vi hjälper till att få saker gjorda i praktiken, inte bara tänka strategiskt på håll.",
    },
    {
      title: "Löpande förbättring",
      text: "Vi följer upp, justerar och utvecklar marknadsföringen över tid så att den blir bättre steg för steg.",
    },
  ];

  const outcomes = [
    {
      title: "Fler förfrågningar",
      text: "Tydligare erbjudande och bättre struktur gör det enklare för rätt kunder att höra av sig.",
    },
    {
      title: "Bättre konvertering",
      text: "Små förändringar i budskap, struktur och användarresa kan ge stor effekt.",
    },
    {
      title: "Mindre slöseri",
      text: "Ni slipper lägga tid och pengar på fel saker och får bättre kontroll på prioriteringarna.",
    },
    {
      title: "Mer kontroll",
      text: "Ni vet bättre vad som fungerar, varför det fungerar och vad nästa steg bör vara.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Förstå nuläget",
      text: "Vi tittar på vad ni gör idag, vad som fungerar och var det skaver.",
    },
    {
      number: "02",
      title: "Prioritera rätt",
      text: "Ni får en tydlig riktning med fokus på det som skapar mest effekt först.",
    },
    {
      number: "03",
      title: "Genomföra smart",
      text: "Vi tar nästa steg utan att göra arbetet onödigt tungt eller komplext.",
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
        "Om du vill ha en närmare samarbetspartner som förstår affären, prioriterar tillsammans med er och håller ihop helheten kan en marknadskonsult vara rätt. Du får ofta ett mer personligt, flexibelt och affärsnära upplägg än i en större byråmodell.",
    },
    {
      question: "Vilka tjänster erbjuder du som marknadskonsult?",
      answer:
        "Arbetet kan omfatta strategi, webb, innehåll, SEO, annonsering, CRO, nyhetsbrev, varumärkesutveckling och löpande marknadsstöd. Upplägget formas efter vad som är mest värdefullt för företaget.",
    },
    {
      question: "Vad gör en marknadskonsult?",
      answer:
        "En marknadskonsult hjälper företag att få struktur, tydlighet och framdrift i marknadsföringen — både strategiskt och praktiskt.",
    },
    {
      question: "Hur anpassas arbetet till olika företags behov?",
      answer:
        "Upplägget anpassas efter nuläge, mål, resurser och ambition. För vissa handlar det om att få en tydlig riktning. För andra om att någon driver arbetet löpande.",
    },
    {
      question: "Hur kan en marknadskonsult hjälpa mitt företag?",
      answer:
        "Ni kan få tydligare budskap, bättre prioriteringar, mer kontroll och marknadsföring som i högre grad bidrar till affären.",
    },
    {
      question: "Vad kostar det att anlita en marknadskonsult?",
      answer:
        "Det beror på behov och omfattning. Det kan handla om ett avgränsat projekt, löpande stöd eller en kombination. Målet är alltid att hitta ett rimligt upplägg som skapar tydligt värde.",
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
        className="relative min-h-screen overflow-x-hidden text-white"
      >
        <div
          className={`fixed inset-x-0 top-0 z-[120] h-[10px] transition-all duration-700 ease-out motion-reduce:transition-none ${
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
            className={`absolute inset-0 bg-black/35 transition-opacity duration-500 motion-reduce:transition-none ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobilmeny"
            className={`absolute inset-y-0 right-0 w-full bg-[#101923] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
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
                  href="#utmaningar"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Utmaningar
                </a>
                <a
                  href="#tjanster"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Så hjälper vi
                </a>
                <a
                  href="#resultat"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Resultat
                </a>
                <a
                  href="#process"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Process
                </a>
                <a
                  href="#om"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Om
                </a>
                <a
                  href="#faq"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  FAQ
                </a>
                <a
                  href="#kontakt"
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

        <section className="relative -mt-[96px] px-6 pb-20 pt-[200px] md:px-10 md:pb-28 lg:px-16 lg:pt-[128px]">
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

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.012)_0%,rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.012)_100%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="relative pt-16 md:pt-24 lg:pt-28">
              <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="relative z-10 max-w-4xl">
                  <div
                    className={`transition-all duration-700 delay-150 ease-out motion-reduce:transition-none ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/85">
                      Externt marknadsstöd för företag
                    </p>

                    <h1 className="max-w-4xl text-[44px] font-semibold leading-[0.92] tracking-[-0.065em] text-white sm:text-[60px] md:text-[78px] lg:text-[92px]">
                      Marknadsföring
                      <br />
                      som faktiskt
                      <br />
                      driver affären
                      <br />
                      framåt.
                    </h1>
                  </div>

                  <div
                    className={`transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="mt-8 max-w-2xl text-[18px] leading-[1.8] text-white/80 md:text-[20px]">
                      AXA Consult hjälper företag att få struktur, tydligare
                      budskap och rätt prioriteringar — så att marknadsföringen
                      inte bara görs, utan också ger effekt.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                      <a
                        href="/boka-mote"
                        className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-[#f4efe6] px-6 py-3.5 text-[15px] font-medium text-[#10161f] transition duration-300 hover:scale-[0.97] hover:from-[#fff7ea] hover:to-white active:scale-[0.95] ${focusRing}`}
                      >
                        Boka ett första samtal
                      </a>
                      <a
                        href="#tjanster"
                        className={`inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.03] px-6 py-3.5 text-[15px] font-medium text-white transition duration-300 hover:scale-[0.97] hover:bg-white/[0.07] active:scale-[0.95] ${focusRing}`}
                      >
                        Se hur vi hjälper till
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative z-10 transition-all duration-700 delay-450 ease-out motion-reduce:transition-none ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/12 shadow-[0_36px_90px_rgba(0,0,0,0.30)]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="absolute inset-0 h-full w-full object-cover"
                    >
                      <source src="/video/webb.mp4" type="video/mp4" />
                    </video>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-[12px] uppercase tracking-[0.2em] text-[#F5B74E]/80">
                        Så arbetar vi
                      </p>
                      <p className="mt-2 text-[18px] leading-[1.6]">
                        Struktur, tydlighet och rätt prioriteringar i praktiken.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="utmaningar" className="mt-24 md:mt-32">
                <div className="grid gap-10 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                      Känner du igen det här?
                    </p>
                    <h2 className="mt-3 text-[34px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[48px]">
                      Många företag gör marknadsföring
                      <br />
                      utan att få riktig effekt.
                    </h2>
                    <p className="mt-5 max-w-xl text-[17px] leading-[1.85] text-white/80">
                      När mycket görs men helheten saknas blir det lätt otydligt
                      vad som fungerar, vad som ska prioriteras och vad nästa steg
                      borde vara.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {challenges.map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] border border-white/8 bg-black/10 px-5 py-4 text-[16px] leading-[1.75] text-white/90"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="tjanster" className="mt-28 md:mt-36">
                <div className="mb-12 max-w-3xl">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                    Så hjälper vi företag
                  </p>
                  <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[54px]">
                    Ett externt marknadsstöd
                    <br />
                    som skapar framdrift.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[17px] leading-[1.9] text-white/80">
                    Istället för att sprida insatserna brett hjälper vi er att
                    prioritera rätt, få struktur och fokusera på det som faktiskt
                    gör skillnad.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {services.map((service) => (
                    <article
                      key={service.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 ease-out hover:-translate-y-1 hover:bg-white/[0.06] motion-reduce:transition-none"
                    >
                      <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.035em] text-white/95">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.9] text-white/82">
                        {service.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div id="resultat" className="mt-28 md:mt-36">
                <section className="rounded-[24px] border border-white/10 bg-black/10 px-6 py-8 backdrop-blur-sm md:px-8 md:py-10 lg:px-10 lg:py-12">
                  <div className="mb-12 max-w-3xl">
                    <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                      Resultat
                    </p>
                    <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[54px]">
                      Det här är vad det leder till.
                    </h2>
                    <p className="mt-5 max-w-2xl text-[17px] leading-[1.9] text-white/80">
                      När marknadsföringen får tydligare riktning och bättre
                      struktur blir det lättare att skapa verklig effekt över tid.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {outcomes.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5 transition duration-500 hover:bg-white/[0.06]"
                      >
                        <h3 className="text-[22px] font-medium tracking-[-0.03em] text-white/95">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.9] text-white/82">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div id="process" className="mt-28 md:mt-36">
                <section className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-sm md:px-8 md:py-10 lg:px-10 lg:py-12">
                  <div className="mb-12 max-w-3xl">
                    <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                      Process
                    </p>
                    <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[54px]">
                      En enkel process som
                      <br />
                      skapar framdrift.
                    </h2>
                    <p className="mt-5 max-w-2xl text-[17px] leading-[1.9] text-white/80">
                      Du behöver inte ha allt klart från början — vi börjar där
                      ni är och tar nästa steg utifrån det.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {process.map((step) => (
                      <div
                        key={step.number}
                        className="rounded-[22px] border border-white/8 bg-black/10 p-5 transition duration-500 hover:bg-white/[0.04] md:p-6"
                      >
                        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5B74E]/80">
                          {step.number}
                        </p>
                        <h3 className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-white/95">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.9] text-white/82">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section
          id="om"
          className="bg-[#f4f1eb] px-6 py-24 text-[#1A2430] md:px-10 lg:px-16 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
                Om AXA Consult
              </p>
              <h2 className="mt-3 max-w-xl text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] md:text-[54px]">
                För företag som vill få
                <br />
                sin marknadsföring att fungera.
              </h2>

              <div className="mt-8 space-y-6 text-[18px] leading-[1.9] text-[#1A2430]/86">
                <p>
                  AXA Consult passar företag som behöver någon som hjälper dem
                  att tänka rätt, prioritera klokt och få marknadsföringen att
                  hänga ihop.
                </p>
                <p>
                  I många fall görs det redan en del — men utan tydlig riktning,
                  struktur eller någon som håller ihop helheten.
                </p>
                <p>
                  Då handlar det inte om att göra mer. Det handlar om att göra
                  rätt saker.
                </p>
                <p>
                  Målet är att skapa tydlighet, lugn och framdrift i
                  marknadsföringen.
                </p>
              </div>

              <div className="mt-10 rounded-[22px] border border-black/8 bg-white/70 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.04)]">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#8a5a14]">
                  Passar oftast företag som
                </p>
                <div className="mt-4 grid gap-3 text-[16px] leading-[1.75] text-[#1A2430]/86">
                  <p>– Har 5–50 anställda</p>
                  <p>– Saknar en intern marknadsansvarig</p>
                  <p>– Vill få bättre struktur och kontroll</p>
                  <p>– Vill att marknadsföringen faktiskt ska bidra till affären</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-black/6 shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
              <Image
                src="/marknadsforingskonsult.webp"
                alt="Arbete med laptop och mobil"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1A2430]/30" />
            </div>
          </div>
        </section>

        <section className="bg-[#f4f1eb] px-6 pb-8 pt-0 text-[#1A2430] md:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[24px] border border-black/8 bg-white/90 px-6 py-7 shadow-[0_8px_24px_rgba(0,0,0,0.035)] md:px-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#8a5a14]">
                Ett vanligt resultat
              </p>
              <blockquote className="mt-4 text-[24px] font-medium leading-[1.4] tracking-[-0.03em] text-[#1A2430] md:text-[30px]">
                “Vi fick äntligen bättre struktur i vår marknadsföring och
                började se vad som faktiskt gav resultat.”
              </blockquote>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="bg-[#f4f1eb] px-6 pb-24 pt-10 text-[#1A2430] md:px-10 lg:px-16 lg:pb-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
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
          id="kontakt"
          className="relative overflow-hidden px-6 pb-24 pt-24 md:px-10 lg:px-16 lg:pb-28 lg:pt-28"
        >
          <div className="absolute inset-0">
            <Image
              src="/abtract-hero.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.10]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(19,32,44,0.90)_0%,rgba(28,44,60,0.86)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.04] px-8 py-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.14)] backdrop-blur-sm md:px-12 md:py-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
              Kontakt
            </p>
            <h2 className="mt-3 text-[38px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[58px]">
              Vill du få tydlighet i
              <br />
              din marknadsföring?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-[1.85] text-white/82">
              Ett första samtal är ett enkelt sätt att se vad som skulle göra
              störst skillnad för er just nu.
            </p>
            <p className="mt-6 text-[15px] text-white/74">
              Vi finns i Uppsala och Falun och arbetar med företag i hela
              Sverige — både lokalt och nationellt.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/boka-mote"
                className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-[#f4efe6] px-6 py-3.5 text-[15px] font-medium text-[#10161f] transition duration-300 hover:scale-[0.97] hover:from-[#fff7ea] hover:to-white active:scale-[0.95] ${focusRing}`}
              >
                Boka ett första samtal
              </a>
              <a
                href="mailto:info@axaconsult.se"
                className={`inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 py-3.5 text-[15px] font-medium text-white transition duration-300 hover:scale-[0.97] hover:bg-white/[0.08] active:scale-[0.95] ${focusRing}`}
              >
                info@axaconsult.se
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

              <p className="mt-6 text-[14px] leading-[1.7] text-white/68">
                Strategi, webb och marknadsföring
                <br />
                för företag som vill skapa tydlighet
                <br />
                och bättre struktur.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-white/78 md:items-center">
              <a href="#utmaningar" className={`transition hover:text-white ${focusRing}`}>
                Utmaningar
              </a>
              <a href="#tjanster" className={`transition hover:text-white ${focusRing}`}>
                Så hjälper vi
              </a>
              <a href="#resultat" className={`transition hover:text-white ${focusRing}`}>
                Resultat
              </a>
              <a href="#process" className={`transition hover:text-white ${focusRing}`}>
                Process
              </a>
              <a href="#kontakt" className={`transition hover:text-white ${focusRing}`}>
                Kontakt
              </a>
            </div>

            <div className="md:text-right">
              <p className="text-[14px] text-white/60">Kontakt</p>

              <div className="mt-3 space-y-2 text-[15px] text-white/90">
                <p>
                  <a
                    href="mailto:info@axaconsult.se"
                    className={`transition hover:text-white ${focusRing}`}
                  >
                    info@axaconsult.se
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+46760353560"
                    className={`transition hover:text-white ${focusRing}`}
                  >
                    +46 760 35 35 60
                  </a>
                </p>
              </div>

              <div className="mt-6 space-y-3 text-[14px] text-white/72">
                <div>
                  <p className="text-white/90">Uppsala</p>
                  <p>Bergsbrunnagatan 5</p>
                </div>

                <div>
                  <p className="text-white/90">Falun</p>
                  <p>Linslagarvägen 2</p>
                  <p>791 61 Falun</p>
                </div>
              </div>

              <a
                href="/boka-mote"
                className={`mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#10161f] transition hover:scale-[0.97] hover:bg-[#fff7ea] ${focusRing}`}
              >
                Boka ett första samtal
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6 text-center text-[13px] text-white/50">
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
    </>
  );
}