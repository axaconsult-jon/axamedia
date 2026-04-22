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

  const services = [
    {
      title: "SEO & synlighet",
      text:
        "För företag som vill synas bättre i sök, bygga relevant trafik och skapa långsiktig närvaro.",
    },
    {
      title: "Google Ads & annonsering",
      text:
        "För er som vill nå rätt målgrupp snabbare och få bättre kontroll på budget, resultat och uppföljning.",
    },
    {
      title: "Strategi & rådgivning",
      text:
        "Vi hjälper er att prioritera rätt, se vad som fungerar och skapa en plan som går att genomföra i vardagen.",
    },
    {
      title: "Sociala medier & innehåll",
      text:
        "Stöd i både organiskt innehåll, annonsering och hur ert varumärke ska kännas i olika kanaler.",
    },
    {
      title: "Nyhetsbrev & kundkommunikation",
      text:
        "För företag som vill hålla kontakten, bygga relationer och skapa fler affärer över tid.",
    },
    {
      title: "Varumärke & webb",
      text:
        "Från budskap och struktur till visuellt uttryck och webbupplevelse som stärker förtroendet.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Nuläge & behov",
      text:
        "Vi tittar på var ni står idag, vad som redan görs och vilka utmaningar som bromsar er marknadsföring.",
    },
    {
      step: "02",
      title: "Strategi & prioritering",
      text:
        "Tillsammans sätter vi riktning, väljer fokus och landar i en plan som är rimlig att genomföra.",
    },
    {
      step: "03",
      title: "Genomförande",
      text:
        "Vi driver arbetet framåt med rätt insatser, rätt tempo och tydlig kommunikation längs vägen.",
    },
    {
      step: "04",
      title: "Uppföljning & förbättring",
      text:
        "Vi följer upp, justerar och ser till att marknadsföringen utvecklas i takt med företagets behov.",
    },
  ];

  const faqs = [
    {
      q: "Varför anlita AXA Consult istället för en traditionell byrå?",
      a:
        "För många företag passar ett närmare och mer personligt samarbete bättre. Ni får en partner som sätter sig in i verksamheten och hjälper er att fatta bättre beslut, inte bara leverera enstaka insatser.",
    },
    {
      q: "Passar det här företag utan egen marknadsansvarig?",
      a:
        "Ja. Det är ofta där upplägget gör störst nytta. Ni får stöd i både strategi, prioritering och genomförande utan att behöva bygga en full intern funktion direkt.",
    },
    {
      q: "Vad kan ni hjälpa till med?",
      a:
        "Det kan handla om SEO, annonsering, innehåll, nyhetsbrev, webb, varumärke och löpande rådgivning. Upplägget formas efter mål, resurser och ambitionsnivå.",
    },
    {
      q: "Hur börjar ett samarbete?",
      a:
        "Vanligtvis med ett första samtal där vi går igenom nuläge, mål och vad ni behöver hjälp med. Därefter föreslår vi ett upplägg som känns tydligt och rimligt.",
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
        className="relative min-h-screen overflow-x-hidden bg-white text-slate-900"
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
                  href="#varfor"
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  Varför AXA
                </a>
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
                  Om samarbetet
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
                  className={`inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-[15px] font-medium text-[#10161f] transition hover:scale-[0.985] hover:bg-[#f8f3ea] ${focusRing}`}
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

        {/* HERO */}
        <section className="relative -mt-[96px] overflow-hidden border-b border-slate-200 px-6 pb-24 pt-[200px] md:px-10 lg:px-16 lg:pt-[128px]">
          <div className="absolute inset-0">
            <Image
              src="/abtract-hero.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,25,35,0.94)_0%,rgba(29,45,67,0.96)_38%,rgba(43,68,102,0.94)_68%,rgba(95,145,205,0.60)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,166,217,0.20),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_22%)]" />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.012)_0%,rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.012)_100%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-1 text-sm font-medium text-white/80 shadow-sm backdrop-blur">
                  Marknadskonsult för företag som vill ha bättre riktning och tydligare effekt
                </span>

                <h1
                  className={`mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white transition-all duration-700 sm:text-5xl lg:text-7xl ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  Er externa
                  <span className="block bg-gradient-to-r from-white via-[#d9e7f8] to-[#7aa6d9] bg-clip-text text-transparent">
                    marknadsavdelning
                  </span>
                </h1>

                <p
                  className={`mt-6 max-w-2xl text-lg leading-8 text-white/78 transition-all duration-700 delay-100 sm:text-xl ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  För företag som behöver mer struktur, bättre prioriteringar och
                  marknadsföring som driver verksamheten framåt.
                </p>

                <div
                  className={`mt-8 flex flex-col gap-3 sm:flex-row transition-all duration-700 delay-150 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-[#10161f] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#f8f3ea] ${focusRing}`}
                  >
                    Boka ett första samtal
                  </a>
                  <a
                    href="#services"
                    className={`inline-flex items-center justify-center rounded-2xl border border-white/16 bg-white/6 px-6 py-3 text-sm font-medium text-white transition hover:border-white/28 hover:bg-white/10 ${focusRing}`}
                  >
                    Se vad vi hjälper till med
                  </a>
                </div>

                <div
                  className={`mt-10 grid max-w-2xl gap-4 sm:grid-cols-3 transition-all duration-700 delay-200 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {[
                    "Personligt samarbete",
                    "Få kunder åt gången",
                    "Fokus på resultat och tydlighet",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-sm backdrop-blur"
                    >
                      <p className="text-sm font-medium text-white/84">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`lg:pl-8 transition-all duration-700 delay-300 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur">
                  <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#182230_0%,#2c4767_58%,#4f729b_100%)] p-6 text-white">
                    <p className="text-sm font-medium text-[#d5e5f7]">
                      När det ofta blir rörigt
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-100">
                      <li>• Ni hinner inte driva marknadsföringen framåt själva</li>
                      <li>• Det är svårt att veta vad som fungerar och inte</li>
                      <li>• Insatser görs, men utan tydlig riktning eller uppföljning</li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-6">
                    <p className="text-sm font-medium text-white/82">
                      Det vi hjälper till att skapa
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-white/74">
                      <li>• En tydligare marknadsplan</li>
                      <li>• Bättre struktur i arbetet</li>
                      <li>• Ett tryggare beslutsunderlag</li>
                      <li>• Marknadsföring som blir lättare att förstå och följa upp</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VARFOR AXA */}
        <section id="varfor" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                Varför AXA Consult
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                För företag som vill ha nära stöd, tydlig riktning och ett mer hållbart marknadsarbete
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#ece2cf] bg-[linear-gradient(180deg,#ffffff_0%,#fcfaf6_100%)] p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F5B74E]/50 hover:shadow-lg"
                >
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-[linear-gradient(90deg,#F5B74E_0%,#2f4b6d_100%)]" />
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TJANSTER */}
        <section
          id="services"
          className="border-y border-[#ece2cf] bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)]"
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
                Upplägget anpassas efter era mål, resurser och hur mycket stöd ni behöver i vardagen.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-[#ede3d0] bg-white p-7 shadow-sm transition hover:border-[#F5B74E]/40 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-full bg-[#fff3da] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                    AXA Consult
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARBETSSATT */}
        <section id="process" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                  Arbetssätt
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Ett enklare sätt att få ordning på marknadsföringen
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Vi tror på ett arbetssätt som är nära, tydligt och lätt att förstå. Det ska vara enkelt att veta vad som händer, varför det görs och vad nästa steg är.
                </p>
              </div>

              <div className="grid gap-4">
                {process.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[2rem] border border-[#ece2cf] bg-[linear-gradient(180deg,#ffffff_0%,#fcfaf6_100%)] p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#F5B74E_0%,#d9982f_100%)] text-sm font-semibold text-[#1a2430] shadow-md shadow-[#F5B74E]/20">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OM SAMARBETET */}
        <section
          id="samarbete"
          className="relative overflow-hidden bg-[linear-gradient(135deg,#15202b_0%,#1f3042_55%,#29405c_100%)] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,183,78,0.20),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_28%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0d9ad]">
                  Om samarbetet
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Vi jobbar nära ett fåtal kunder åt gången
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                  Det gör att vi kan sätta oss in i verksamheten på riktigt, förstå prioriteringarna och bidra med både strategiskt och operativt stöd. Målet är inte att göra mer för sakens skull, utan att hjälpa er framåt på ett sätt som känns relevant och hållbart.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                <p className="text-sm font-medium text-[#f0d9ad]">
                  Passar ofta företag som...
                </p>
                <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-100">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    saknar intern marknadsansvarig
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    vill få bättre kontroll på vad som görs
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    behöver hjälp att prioritera rätt insatser
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    vill ha en mer personlig partner än en traditionell byrå
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="bg-[linear-gradient(180deg,#ffffff_0%,#fcfaf6_100%)]"
        >
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                Vanliga frågor
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Några frågor vi ofta får
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[1.5rem] border border-[#ece2cf] bg-[linear-gradient(180deg,#ffffff_0%,#fcfaf6_100%)] p-6 shadow-sm transition open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-left text-lg font-semibold text-slate-950 marker:hidden">
                    {item.q}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section
          id="contact"
          className="border-t border-[#ece2cf] bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                  Kontakt
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Vill du se om vi är rätt för varandra?
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  Hör av dig så tar vi ett första samtal om nuläge, behov och vad som skulle vara ett rimligt nästa steg för er.
                </p>

                <div className="mt-8 space-y-3 text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-950">Telefon:</span>{" "}
                    +46 (0)760 35 35 60
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">E-post:</span>{" "}
                    info@axaconsult.se
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">Plats:</span>{" "}
                    Uppsala & Falun
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#e8dec9] bg-white p-6 shadow-sm shadow-[#d7c6a2]/10">
                <form className="grid gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Namn
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-2xl border border-[#d9cfbb] px-4 py-3 outline-none transition focus:border-[#F5B74E]"
                      placeholder="Ditt namn"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      E-post
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-2xl border border-[#d9cfbb] px-4 py-3 outline-none transition focus:border-[#F5B74E]"
                      placeholder="din@epost.se"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Meddelande
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-2xl border border-[#d9cfbb] px-4 py-3 outline-none transition focus:border-[#F5B74E]"
                      placeholder="Berätta kort vad du vill ha hjälp med"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1a2430_0%,#2b3f59_100%)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-95"
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