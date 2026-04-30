"use client";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WorkStyleCarousel from "./components/WorkStyleCarousel";

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

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const successRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
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
          company: "",
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
  throw new Error("Failed to send");
}
trackEvent("generate lead", {
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
      setSubmitError("Något gick fel när formuläret skulle skickas. Försök igen.");
    } finally {
      setIsSubmitting(false);
    }
  }

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

 const services = [
  {
    title: "Strategi & prioritering",
    text: "Vi hjälper er sätta riktning, välja fokus och prioritera det som faktiskt gör störst skillnad.",
  },
  {
    title: "SEO & hemsida",
    text: "För företag som vill synas bättre i sök och bygga relevant trafik över tid.",
  },
  {
    title: "Google Ads",
    text: "Vi hjälper er nå rätt målgrupp via sökannonsering och få bättre koll på resultat och budget.",
  },
  {
    title: "Bing Ads / Microsoft Ads",
    text: "Ett smart komplement till Google Ads för att nå fler relevanta kunder i sök.",
  },
  {
    title: "Social organic",
    text: "Vi hjälper er skapa innehåll som bygger förtroende, synlighet och relation över tid.",
  },
  {
    title: "Social paid",
    text: "Annonsering i sociala medier för varumärke, trafik, leads eller kampanjer med tydligare styrning.",
  },
  {
    title: "Grafisk profil",
    text: "Vi hjälper er få ett visuellt uttryck som känns tydligt, professionellt och lätt att använda.",
  },
  {
    title: "Foto & film",
    text: "Vi arbetar med lokala fotografer och videoproducenter för material som stärker ert varumärke.",
  },
  {
    title: "Rådgivning",
    text: "Stöd när ni behöver bolla idéer, fatta bättre beslut eller få extern riktning framåt.",
  },
  {
    title: "Referenscase & kundrecensioner",
    text: "Vi hjälper er lyfta kundcase och omdömen som skapar förtroende hos nya kunder.",
  },
  {
    title: "Kreativt content",
    text: "Vi tar fram idéer för innehåll, UGC och influencers som kan skapa räckvidd och engagemang.",
  },
  {
    title: "Sponsring & samarbeten",
    text: "Vi hjälper er hitta samarbeten som stärker varumärket och känns relevanta för målgruppen.",
  },
  {
    title: "Display & programmatic",
    text: "Digital annonsering för att bygga synlighet, återaktivera målgrupper och stötta andra kampanjer.",
  },
  {
    title: "Native annonsering",
    text: "Annonser som smälter in i redaktionella miljöer och passar för räckvidd, trafik och förtroende.",
  },
  {
    title: "Tryckt media",
    text: "Vi hjälper er ta fram annonser, material och budskap för print när det passar målgruppen.",
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
                  className={`text-[40px] leading-none text-white/75 transition hover:text-[#F5B74E] ${focusRing}`}
                >
                  <span aria-hidden="true" className="inline-block rotate-45">
                    +
                  </span>
                </button>
              </div>

              <nav aria-label="Mobil navigering" className="mt-8 flex flex-col">
                <a href="#services" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                  Tjänster
                </a>
                <a href="#process" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                  Arbetssätt
                </a>
                <a href="#samarbete" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                  Samarbete
                </a>
                <a href="#faq" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                  FAQ
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
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

        <Header variant="home" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#08121d] px-6 pb-28 pt-[165px] md:px-10 md:pb-32 md:pt-[205px] lg:px-16 lg:pb-36 lg:pt-[235px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111c_0%,#0a1724_38%,#102238_72%,#142b44_100%)]" />
            <div className="hero-particles absolute inset-0" />
            <div className="hero-wave absolute inset-x-0 bottom-0 h-[42%]" />
            <div className="absolute right-[6%] top-[22%] h-[420px] w-[420px] rounded-full bg-[#F5B74E]/20 blur-[140px]" />
            <div className="absolute left-[2%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-[#8fb3da]/18 blur-[130px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p
                className={`mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5B74E] sm:text-[12px] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700`}
              >
                Marknadsföring för företag som vill framåt
              </p>

              <h1
                className={`max-w-4xl text-[42px] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[56px] md:text-[68px] lg:text-[78px] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700`}
              >
                Marknadsföring som drivs framåt
                <span className="block bg-gradient-to-r from-[#8fb3da] via-[#dce8f6] to-[#F5B74E] bg-clip-text pb-[0.08em] text-transparent">
                  inte bara planeras
                </span>
              </h1>

              <p
                className={`mt-6 max-w-2xl text-[17px] leading-[1.8] text-white/75 sm:text-[18px] md:text-[20px] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700 delay-100`}
              >
                AXA Consult hjälper företag att få struktur i marknadsföringen,
                prioritera rätt och driva arbetet framåt. Ni får samma bredd som
                från en mediabyrå – men i ett närmare, mer personligt samarbete.
              </p>

              <div
                className={`mt-8 flex flex-col gap-3 sm:flex-row ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } transition-all duration-700 delay-150`}
              >
                <a
                  href="/boka-mote"
                  className={`inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#101923] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#24364a] ${focusRing}`}
                >
                  Boka ett första samtal
                </a>

                <a
                  href="#services"
                  className={`inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15 ${focusRing}`}
                >
                  Se hur vi hjälper till
                </a>
              </div>
            </div>

            <div
              className={`lg:col-span-5 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } transition-all duration-700 delay-300`}
            >                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F5B74E]">
                  Så kan vi hjälpa till
                </p>

                <div className="mt-5 grid gap-3">
                  {[
                    {
                      title: "Rätt prioriteringar",
                      text: "Vi hjälper er se vad som är viktigast just nu och vad som kan vänta.",
                      icon: "◎",
                    },
                    {
                      title: "Stöd i det löpande arbetet",
                      text: "Vi håller ihop marknadsföringen så att arbetet faktiskt rör sig framåt.",
                      icon: "↗",
                    },
                    {
                      title: "Från plan till genomförande",
                      text: "När det inte räcker med idéer, utan också behöver bli något konkret.",
                      icon: "✦",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[22px] text-[#F5B74E]">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-[15px] font-medium text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[14px] leading-[1.7] text-white/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        

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
                background-position: 0 0, 40px 60px;
              }
              to {
                background-position: 180px 90px, -90px 190px;
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
        </section>

        <section className="bg-white px-6 py-20 md:py-28">
  <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.4fr_0.3fr_0.3fr]">
    <div>
      <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#8a5a14]">
        Varför AXA
      </p>

      <h2 className="mt-4 text-[36px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#0f1724] md:text-[52px]">
        Vi tror på marknadsföring som går att förstå, prioritera och genomföra
      </h2>
    </div>

    <p className="text-[18px] leading-[1.85] text-[#3f4a5a] md:text-[20px]">
      För många företag blir marknadsföring lätt en lista av kanaler, idéer och
      saker som borde göras. Vi tror att det börjar i andra änden: med riktning,
      affären och vad som är viktigast just nu.
    </p>

    <p className="text-[18px] leading-[1.85] text-[#3f4a5a] md:text-[20px]">
      AXA startades för att vara ett närmare stöd i det arbetet. Inte bara någon
      som levererar enstaka insatser, utan en partner som hjälper er välja rätt,
      hålla ihop helheten och få saker gjorda.
    </p>
  </div>
</section>

        <WorkStyleCarousel />
        

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-[120px] border-y border-[#ece2cf] bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                Tjänster
              </p>
              <h2 className="mt-3 text-3xl font-semibold trackinng-tight text-slate-950 sm:text-4xl">
                Det här kan vi hjälpa er med
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Upplägget anpassas efter era mål, resurser och hur mycket stöd
                ni behöver i vardagen.
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
          id="samarbete"
          className="bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)] text-[#1A2430]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a14]">
                  Samarbete
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
          Hör av dig så tar vi ett första samtal om nuläge, behov och
          vad som skulle vara ett rimligt nästa steg för er.
        </p>

        <div className="mt-8 space-y-3 text-slate-200">
          <p>
            <span className="font-semibold text-white">Telefon:</span>{" "}
            <a
              href="tel:+46760353560"
              onClick={() =>
                trackEvent("click_phone", {
                  contact_type: "phone",
                  contact_value: "+46760353560",
                })
              }
              className="underline underline-offset-4 transition hover:text-[#F5B74E]"
            >
              +46 (0)760 35 35 60
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">E-post:</span>{" "}
            <a
              href="mailto:info@axaconsult.se"
              onClick={() =>
                trackEvent("click_email", {
                  contact_type: "email",
                  contact_value: "info@axaconsult.se",
                })
              }
              className="underline underline-offset-4 transition hover:text-[#F5B74E]"
            >
              info@axaconsult.se
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">Plats:</span>{" "}
            Uppsala & Falun
          </p>
        </div>
      </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/15 backdrop-blur-sm">
                <div aria-live="polite" aria-atomic="true">
                  {!isSuccess ? (
                    <form onSubmit={handleSubmit} noValidate className="grid gap-4" >  
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

    <label htmlFor="privacy" className="text-sm leading-6 text-white/75">
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
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}