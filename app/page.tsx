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
    "Ni gör en del marknadsföring, men det är oklart vad som ger effekt.",
    "Det finns ambition och idéer, men inget driver arbetet framåt.",
    "Ingen håller ihop helheten.",
    "Ni vet att ni borde göra mer, men inte vad som ska prioriteras först.",
  ];

  const offer = [
    {
      title: "Strategi & prioritering",
      text:
        "För företag som behöver tydlighet i vad som ska göras, vad som kan vänta och hur marknadsföringen bäst ska stötta affären.",
    },
    {
      title: "Synlighet & efterfrågan",
      text:
        "För er som vill bli lättare att hitta, nå rätt målgrupp och skapa fler relevanta förfrågningar.",
    },
    {
      title: "Webb & konvertering",
      text:
        "För företag som vill göra det enklare för rätt kunder att förstå erbjudandet och ta nästa steg.",
    },
    {
      title: "Löpande marknadsstöd",
      text:
        "För företag som behöver någon som driver arbetet framåt och skapar kontinuitet över tid.",
    },
  ];

  const practicalServices = [
    "SEO & synlighet",
    "Google Ads & annonsering",
    "Strategi & rådgivning",
    "Sociala medier & innehåll",
    "Nyhetsbrev & kundkommunikation",
    "Varumärke & webb",
    "CRO & förbättring",
    "Innehåll & copy",
  ];

  const reasons = [
    {
      title: "Ni får en extern marknadsavdelning",
      text:
        "Ett nära samarbete för företag som behöver marknadsföringskompetens, men inte vill eller kan bygga upp allt internt.",
    },
    {
      title: "Tydligt, personligt och flexibelt",
      text:
        "Vi arbetar nära få kunder åt gången. Det ger bättre förståelse, snabbare beslut och en lösning som passar er.",
    },
    {
      title: "Fokus på effekt, inte bara aktivitet",
      text:
        "Vi hjälper er att prioritera rätt insatser, följa upp resultat och förstå vad marknadsföringen bidrar med.",
    },
  ];

  const outcomes = [
    {
      title: "Fler rätt förfrågningar",
      text:
        "Tydligare erbjudande och bättre struktur gör det enklare för rätt kunder att höra av sig.",
    },
    {
      title: "Bättre konvertering",
      text:
        "Små förändringar i budskap, struktur och användarresa kan ge stor effekt.",
    },
    {
      title: "Mindre slöseri",
      text:
        "Ni slipper lägga tid och pengar på fel saker och får bättre kontroll på prioriteringarna.",
    },
    {
      title: "Mer kontroll",
      text:
        "Ni får bättre förståelse för vad som fungerar, varför det fungerar och vad nästa steg bör vara.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Nuläge & behov",
      text:
        "Vi tittar på var ni står idag, vad som redan görs och vad som bromsar marknadsföringen.",
    },
    {
      number: "02",
      title: "Strategi & prioritering",
      text:
        "Tillsammans sätter vi riktning, väljer fokus och landar i en plan som är rimlig att genomföra.",
    },
    {
      number: "03",
      title: "Genomförande",
      text:
        "Vi driver arbetet framåt med rätt insatser, rätt tempo och tydlig kommunikation längs vägen.",
    },
    {
      number: "04",
      title: "Uppföljning & förbättring",
      text:
        "Vi följer upp, justerar och ser till att marknadsföringen utvecklas i takt med företagets behov.",
    },
  ];

  const faqItems = [
    {
      question:
        "Varför ska jag anlita AXA Consult istället för en traditionell byrå?",
      answer:
        "För många företag passar ett närmare och mer personligt samarbete bättre. Ni får en partner som sätter sig in i verksamheten, hjälper er att prioritera rätt och håller ihop helheten.",
    },
    {
      question: "Passar det här företag utan egen marknadsansvarig?",
      answer:
        "Ja, ofta är det där upplägget gör störst nytta. Ni får stöd i både strategi, prioritering och genomförande utan att behöva bygga en full intern funktion direkt.",
    },
    {
      question: "Vad kan ni hjälpa till med?",
      answer:
        "Det kan handla om strategi, SEO, annonsering, innehåll, webb, nyhetsbrev och löpande marknadsstöd. Upplägget formas efter mål, resurser och ambitionsnivå.",
    },
    {
      question: "Hur börjar ett samarbete?",
      answer:
        "Vanligtvis med ett första samtal där vi går igenom nuläge, mål och vad ni behöver hjälp med. Därefter föreslår vi ett upplägg som känns tydligt och rimligt.",
    },
    {
      question: "Hur kan AXA Consult hjälpa mitt företag?",
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
                  href="#varfor"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Varför AXA
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
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(29,45,67,0.92)_0%,rgba(43,68,102,0.92)_45%,rgba(95,145,205,0.70)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,166,217,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_24%)]" />
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
                      Marknadskonsult för företag som vill ha bättre riktning och tydligare effekt
                    </p>

                    <h1 className="max-w-4xl text-[44px] font-semibold leading-[0.92] tracking-[-0.065em] text-white sm:text-[60px] md:text-[78px] lg:text-[92px]">
                      Er externa
                      <br />
                      marknadsavdelning
                    </h1>
                  </div>

                  <div
                    className={`transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="mt-8 max-w-2xl text-[18px] leading-[1.8] text-white/82 md:text-[20px]">
                      För företag som behöver mer struktur, bättre prioriteringar
                      och marknadsföring som driver verksamheten framåt.
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
                        Se vad vi hjälper till med
                      </a>
                    </div>

                    <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                      {[
                        "Personligt samarbete",
                        "Få kunder åt gången",
                        "Fokus på resultat och tydlighet",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_10px_26px_rgba(0,0,0,0.10)]"
                        >
                          <p className="text-sm font-medium text-white/88">
                            {item}
                          </p>
                        </div>
                      ))}
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
                  <div className="rounded-[24px] border border-white/12 bg-white/[0.04] p-6 shadow-[0_36px_90px_rgba(0,0,0,0.30)] backdrop-blur-xl">
                    <div className="rounded-[20px] bg-[#142031] p-6 text-white">
                      <p className="text-sm font-medium text-[#F5B74E]/85">
                        När det ofta blir rörigt
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-white/88">
                        <li>• Ni hinner inte driva marknadsföringen framåt själva</li>
                        <li>• Det är svårt att veta vad som fungerar och inte</li>
                        <li>• Insatser görs, men utan tydlig riktning eller uppföljning</li>
                      </ul>
                    </div>

                    <div className="mt-4 rounded-[20px] border border-white/10 bg-white/[0.06] p-6">
                      <p className="text-sm font-medium text-[#F5B74E]/80">
                        Det vi hjälper till att skapa
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-white/82">
                        <li>• En tydligare marknadsplan</li>
                        <li>• Bättre struktur i arbetet</li>
                        <li>• Ett tryggare beslutsunderlag</li>
                        <li>• Marknadsföring som blir lättare att förstå och följa upp</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="utmaningar" className="mt-24 md:mt-32">
                <div className="grid gap-10 rounded-[24px] border border-[#e8dec9] bg-[linear-gradient(180deg,#fffdf8_0%,#f7f3eb_100%)] p-6 text-[#1A2430] shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
                      Känner du igen det här?
                    </p>
                    <h2 className="mt-3 text-[34px] font-semibold leading-[0.98] tracking-[-0.05em] md:text-[48px]">
                      Marknadsföring blir ofta något
                      <br />
                      som bara rullar på
                    </h2>
                    <p className="mt-5 max-w-xl text-[17px] leading-[1.85] text-[#1A2430]/78">
                      När mycket görs men helheten saknas blir det lätt otydligt
                      vad som fungerar, vad som ska prioriteras och vad nästa steg
                      borde vara.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {challenges.map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] border border-black/8 bg-white/80 px-5 py-4 text-[16px] leading-[1.75] text-[#1A2430]/88 shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="tjanster" className="mt-28 md:mt-36">
                <div className="mb-14 max-w-3xl">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                    Så hjälper vi företag
                  </p>
                  <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[54px]">
                    Få struktur, tydlighet och
                    <br />
                    marknadsföring som ger effekt
                  </h2>
                  <p className="mt-5 max-w-2xl text-[17px] leading-[1.9] text-white/80">
                    Istället för att göra lite av allt hjälper vi er att prioritera
                    rätt och fokusera på det som driver affären framåt.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {offer.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 ease-out hover:-translate-y-1 hover:bg-white/[0.06] motion-reduce:transition-none"
                    >
                      <h3 className="text-[22px] font-medium leading-[1.1] tracking-[-0.035em] text-white/95">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.9] text-white/82">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-16 rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,#fffdf8_0%,#f7f3eb_100%)] p-6 text-[#1A2430] shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-8">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
                    Det här kan vi hjälpa er med i praktiken
                  </p>

                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#1A2430]/72">
                    Vanliga områden där vi stöttar företag beroende på mål, resurser och behov.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {practicalServices.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-black/8 bg-white px-4 py-2 text-[14px] text-[#1A2430]/85"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="/boka-mote"
                      className={`inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#1a2430_0%,#2b3f59_100%)] px-6 py-3 text-[15px] font-medium text-white transition hover:scale-[0.97] ${focusRing}`}
                    >
                      Boka ett första samtal
                    </a>
                  </div>
                </div>
              </div>

              <div id="varfor" className="mt-28 md:mt-36">
                <div className="mb-12 max-w-3xl">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                    Varför AXA Consult
                  </p>
                  <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[54px]">
                    För företag som vill ha nära stöd,
                    <br />
                    tydlig riktning och ett hållbart marknadsarbete
                  </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  {reasons.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
                    >
                      <h3 className="text-[22px] font-medium tracking-[-0.03em] text-white/95">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.9] text-white/82">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="resultat" className="mt-28 md:mt-36">
                <section className="rounded-[24px] border border-[#e8dec9] bg-[linear-gradient(180deg,#fffdf8_0%,#f7f3eb_100%)] px-6 py-8 text-[#1A2430] shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:px-8 md:py-10 lg:px-10 lg:py-12">
                  <div className="mb-12 max-w-3xl">
                    <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
                      Resultat
                    </p>
                    <h2 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] md:text-[54px]">
                      Det här är vad det leder till
                    </h2>
                    <p className="mt-5 max-w-2xl text-[17px] leading-[1.9] text-[#1A2430]/78">
                      När marknadsföringen får tydligare riktning och bättre
                      struktur blir det lättare att skapa effekt över tid.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {outcomes.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[22px] border border-black/8 bg-white/90 p-5 transition duration-500 hover:bg-white"
                      >
                        <h3 className="text-[22px] font-medium tracking-[-0.03em] text-[#1A2430]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.9] text-[#1A2430]/78">
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
                      Ett enklare sätt att få
                      <br />
                      ordning på marknadsföringen
                    </h2>
                    <p className="mt-5 max-w-2xl text-[17px] leading-[1.9] text-white/80">
                      Vi tror på ett arbetssätt som är nära, tydligt och lätt att förstå.
                      Det ska vara enkelt att veta vad som händer, varför det görs och vad nästa steg är.
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
                Ett nära samarbete för företag
                <br />
                som vill framåt
              </h2>

              <div className="mt-8 space-y-6 text-[18px] leading-[1.9] text-[#1A2430]/86">
                <p>
                  AXA Consult hjälper företag som vill få bättre riktning,
                  tydligare prioriteringar och ett mer hållbart marknadsarbete.
                </p>
                <p>
                  Det kan handla om att skapa struktur, hålla ihop helheten eller
                  se till att rätt insatser blir genomförda i rätt ordning.
                </p>
                <p>
                  Målet är att göra marknadsföringen lättare att förstå, lättare
                  att följa upp och mer värdefull för verksamheten.
                </p>
              </div>

              <div className="mt-10 rounded-[22px] border border-black/8 bg-white/70 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.04)]">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#8a5a14]">
                  Passar ofta företag som
                </p>
                <div className="mt-4 grid gap-3 text-[16px] leading-[1.75] text-[#1A2430]/86">
                  <p>– Behöver bättre struktur i marknadsarbetet</p>
                  <p>– Vill få bättre kontroll på vad som görs</p>
                  <p>– Behöver hjälp att prioritera rätt</p>
                  <p>– Söker en närmare partner än en traditionell byrå</p>
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
                en marknadskonsult
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
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(19,32,44,0.90)_0%,rgba(43,68,102,0.88)_50%,rgba(95,145,205,0.60)_100%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.04] px-8 py-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.14)] backdrop-blur-sm md:px-12 md:py-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
              Kontakt
            </p>
            <h2 className="mt-3 text-[38px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[58px]">
              Vill du se om vi är rätt
              <br />
              för varandra?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-[1.85] text-white/82">
              Hör av dig så tar vi ett första samtal om nuläge, behov och vad
              som skulle vara ett rimligt nästa steg för er.
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
              <a href="#varfor" className={`transition hover:text-white ${focusRing}`}>
                Varför AXA
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