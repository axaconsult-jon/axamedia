"use client";

import Header from "./components/Header";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WorkStyleCarousel from "./components/WorkStyleCarousel";

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
      question: "Vad gör en marknadskonsult?",
      answer:
        "En marknadskonsult hjälper företag att få tydligare riktning, bättre struktur och mer framdrift i marknadsföringen – både strategiskt och praktiskt.",
    },
    {
      question: "Vilka företag passar AXA Consult för?",
      answer:
        "AXA Consult passar ofta företag som vill få bättre ordning i marknadsföringen, men som saknar en intern marknadsansvarig eller behöver mer affärsnära stöd.",
    },
    {
      question: "Vilka tjänster kan ni hjälpa till med?",
      answer:
        "Det kan handla om strategi, SEO, Google Ads, webb, innehåll, nyhetsbrev, sociala medier, varumärkesfrågor och löpande marknadsstöd.",
    },
    {
      question: "Jobbar ni löpande eller i projekt?",
      answer:
        "Både och. Ibland är behovet ett tydligt avgränsat projekt, ibland passar ett löpande samarbete bättre. Upplägget anpassas efter vad som är mest rimligt för er.",
    },
    {
      question: "Hur vet vi vad som ska prioriteras först?",
      answer:
        "Det är en viktig del av arbetet. Vi börjar med nuläge, behov och mål – och prioriterar sedan det som sannolikt gör störst skillnad först.",
    },
    {
      question: "Vad kostar det att anlita AXA Consult?",
      answer:
        "Det beror på omfattning, mål och hur mycket stöd ni behöver. Målet är alltid att hitta ett upplägg som känns rimligt och skapar tydligt värde.",
    },
  ];

  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]";

  const mobileLinkClass = `py-3 text-[28px] tracking-[-0.04em] text-white transition hover:text-[#F5B74E] ${focusRing}`;

  const services = [
    {
      title: "SEO & synlighet",
      text: "För företag som vill synas bättre i sök, bygga relevant trafik och skapa långsiktig närvaro.",
    },
    {
      title: "Google Ads & annonsering",
      text: "För er som vill nå rätt målgrupp snabbare och få bättre kontroll på budget, resultat och uppföljning.",
    },
    {
      title: "Strategi & rådgivning",
      text: "Vi hjälper er att prioritera rätt, se vad som fungerar och skapa en plan som går att genomföra i vardagen.",
    },
    {
      title: "Sociala medier & innehåll",
      text: "Stöd i både organiskt innehåll, annonsering och hur ert varumärke ska kännas i olika kanaler.",
    },
    {
      title: "Nyhetsbrev & kundkommunikation",
      text: "För företag som vill hålla kontakten, bygga relationer och skapa fler affärer över tid.",
    },
    {
      title: "Varumärke & webb",
      text: "Från budskap och struktur till visuellt uttryck och webbupplevelse som stärker förtroendet.",
    },
  ];

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
                  Process
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

        {/* HERO */}
        <div className="relative mx-auto max-w-7xl">
  <div className="grid items-start gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
    <div className="min-w-0 max-w-4xl">
      <span
        className={`inline-flex max-w-full rounded-full border border-white/12 bg-white/[0.07] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/72 shadow-sm backdrop-blur sm:text-[11px] ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } transition-all duration-700`}
      >
        Externt marknadsstöd för företag
      </span>

      <h1
        className={`mt-5 max-w-[9ch] text-[38px] font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:max-w-[10ch] sm:text-[52px] md:max-w-none md:text-[68px] lg:text-[76px] xl:text-[84px] ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } transition-all duration-700`}
      >
        Er externa
        <span className="block bg-gradient-to-r from-white via-[#dce8f6] to-[#8fb3da] bg-clip-text text-transparent">
          marknadsavdelning
        </span>
      </h1>

      <p
        className={`mt-5 max-w-[34rem] text-[16px] leading-[1.75] text-white/76 sm:max-w-xl sm:text-[17px] md:text-[18px] lg:text-[19px] ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } transition-all duration-700 delay-100`}
      >
        För företag som behöver mer struktur, bättre prioriteringar och
        marknadsföring som driver verksamheten framåt.
      </p>

      <div
        className={`mt-7 flex flex-col gap-3 sm:flex-row ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } transition-all duration-700 delay-150`}
      >
        <a
          href="/boka-mote"
          className={`inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#10161f] shadow-lg shadow-black/10 transition hover:bg-[#f8f3ea] sm:w-auto ${focusRing}`}
        >
          Boka ett första samtal
        </a>

        <a
          href="#services"
          className={`inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 py-3 text-[15px] font-medium text-white transition hover:border-white/24 hover:bg-white/[0.08] sm:w-auto ${focusRing}`}
        >
          Se vad vi hjälper till med
        </a>
      </div>

      <div
        className={`mt-9 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } transition-all duration-700 delay-200`}
      >
        <div className="flex items-center gap-3">
          <svg
            className="h-5 w-5 shrink-0 text-[#F5B74E]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
            <circle cx="9.5" cy="7" r="4" />
          </svg>
          <p className="text-[15px] leading-[1.45] text-white/78">
            Personligt samarbete
          </p>
        </div>

        <div className="flex items-center gap-3">
          <svg
            className="h-5 w-5 shrink-0 text-[#F5B74E]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          <p className="text-[15px] leading-[1.45] text-white/78">
            Få kunder åt gången
          </p>
        </div>

        <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
          <svg
            className="h-5 w-5 shrink-0 text-[#F5B74E]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M3 17l6-6 4 4 7-7" />
            <path d="M14 8h6v6" />
          </svg>
          <p className="text-[15px] leading-[1.45] text-white/78">
            Fokus på resultat och tydlighet
          </p>
        </div>
      </div>
    </div>

    <div
      className={`min-w-0 transition-all duration-700 delay-300 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="rounded-[26px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-5 md:p-6">
        <div className="rounded-[22px] bg-[linear-gradient(135deg,rgba(24,39,58,0.92)_0%,rgba(35,56,82,0.90)_100%)] p-5 text-white sm:p-6">
          <p className="text-sm font-medium text-[#d5e5f7]">
            När det ofta blir rörigt
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-100">
            <li>• Ni hinner inte driva marknadsföringen framåt själva</li>
            <li>• Det är svårt att veta vad som fungerar och inte</li>
            <li>• Insatser görs, men utan tydlig riktning eller uppföljning</li>
          </ul>
        </div>

        <div className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.06] p-5 sm:p-6">
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
        <WorkStyleCarousel />

        {/* SERVICES */}
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
                Upplägget anpassas efter era mål, resurser och hur mycket stöd ni
                behöver i vardagen.
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
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
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
                  Ett enklare sätt att få ordning på marknadsföringen
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Vi tror på ett arbetssätt som är nära, tydligt och lätt att
                  förstå. Det ska vara enkelt att veta vad som händer, varför det
                  görs och vad nästa steg är.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    number: "01",
                    title: "Nuläge & behov",
                    text: "Vi tittar på var ni står idag, vad som redan görs och vilka utmaningar som bromsar er marknadsföring.",
                  },
                  {
                    number: "02",
                    title: "Strategi & prioritering",
                    text: "Tillsammans sätter vi riktning, väljer fokus och landar i en plan som är rimlig att genomföra.",
                  },
                  {
                    number: "03",
                    title: "Genomförande",
                    text: "Vi driver arbetet framåt med rätt insatser, rätt tempo och tydlig kommunikation längs vägen.",
                  },
                  {
                    number: "04",
                    title: "Uppföljning & förbättring",
                    text: "Vi följer upp, justerar och ser till att marknadsföringen utvecklas i takt med företagets behov.",
                  },
                ].map((step) => (
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

        {/* OM SAMARBETET */}
        <section
          id="om-axa"
          className="bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)] text-[#1A2430]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                  Om samarbetet
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Vi jobbar nära ett fåtal kunder åt gången
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Det gör att vi kan sätta oss in i verksamheten på riktigt,
                  förstå prioriteringarna och bidra med både strategiskt och
                  operativt stöd. Målet är inte att göra mer för sakens skull,
                  utan att hjälpa er framåt på ett sätt som känns relevant och
                  hållbart.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#e8dec9] bg-white p-8 shadow-sm shadow-[#d7c6a2]/10">
                <p className="text-sm font-medium text-[#8a5a14]">
                  Passar ofta företag som...
                </p>
                <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                  <div className="rounded-2xl border border-[#ece2cf] bg-[#fcfaf6] p-4">
                    saknar intern marknadsansvarig
                  </div>
                  <div className="rounded-2xl border border-[#ece2cf] bg-[#fcfaf6] p-4">
                    vill få bättre kontroll på vad som görs
                  </div>
                  <div className="rounded-2xl border border-[#ece2cf] bg-[#fcfaf6] p-4">
                    behöver hjälp att prioritera rätt insatser
                  </div>
                  <div className="rounded-2xl border border-[#ece2cf] bg-[#fcfaf6] p-4">
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
          className="bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)] px-6 py-24 text-[#1A2430] md:px-10 lg:px-16 lg:py-28"
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

        {/* CONTACT */}
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
                  Vill du se om vi är rätt för varandra?
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
                  Hör av dig så tar vi ett första samtal om nuläge, behov och vad
                  som skulle vara ett rimligt nästa steg för er.
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
                      placeholder="Berätta kort vad du vill ha hjälp med"
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

        {/* FOOTER */}
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
              <a href="#services" className={`transition hover:text-white ${focusRing}`}>
                Tjänster
              </a>
              <a href="#process" className={`transition hover:text-white ${focusRing}`}>
                Process
              </a>
              <a href="#samarbete" className={`transition hover:text-white ${focusRing}`}>
                Om samarbetet
              </a>
              <a href="#faq" className={`transition hover:text-white ${focusRing}`}>
                FAQ
              </a>
              <a href="#contact" className={`transition hover:text-white ${focusRing}`}>
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