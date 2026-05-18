import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import dynamic from "next/dynamic";
const WorkStyleCarousel = dynamic(() => import("./components/WorkStyleCarousel"), {
  ssr: false,
});
import MobileMenu from "./components/MobileMenu";

const faqItems = [
  {
    question: "Vad gör en marknadskonsult?",
    answer:
      "En marknadskonsult hjälper företag att få tydligare riktning, bättre struktur och mer fart i marknadsföringen – både strategiskt och praktiskt.",
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
  { title: "Strategi & prioritering", text: "Vi hjälper er sätta riktning, välja fokus och prioritera rätt." },
  { title: "SEO & hemsida", text: "För företag som vill synas bättre i sök och bygga relevant trafik över tid." },
  { title: "Google Ads", text: "Vi hjälper er nå rätt målgrupp via sökannonsering och få bättre koll på resultat och budget." },
  { title: "Bing Ads / Microsoft Ads", text: "Ett smart komplement till Google Ads för att nå fler relevanta kunder i sök." },
  { title: "Social organic", text: "Vi hjälper er skapa innehåll som bygger förtroende, synlighet och relation över tid." },
  { title: "Social paid", text: "Annonsering i sociala medier för varumärke, trafik, leads eller kampanjer med tydligare styrning." },
  { title: "Grafisk profil", text: "Vi hjälper er få ett visuellt uttryck som känns tydligt, professionellt och lätt att använda." },
  { title: "Foto & film", text: "Vi arbetar med lokala fotografer och videoproducenter för material som stärker ert varumärke." },
  { title: "Rådgivning", text: "Stöd när ni behöver bolla idéer, fatta bättre beslut eller få extern riktning framåt." },
  { title: "Referenscase & kundrecensioner", text: "Vi hjälper er lyfta kundcase och omdömen som skapar förtroende hos nya kunder." },
  { title: "Kreativt content", text: "Vi tar fram idéer för innehåll, UGC och influencers som når fler och berör." },
  { title: "Sponsring & samarbeten", text: "Vi hjälper er hitta samarbeten som stärker varumärket och känns relevanta för målgruppen." },
  { title: "Display & programmatic", text: "Digital annonsering för att bygga synlighet, återaktivera målgrupper och stötta andra kampanjer." },
  { title: "Native annonsering", text: "Annonser som smälter in i redaktionella miljöer och passar för räckvidd, trafik och förtroende." },
  { title: "Tryckt media", text: "Vi hjälper er ta fram annonser, material och budskap för print när det passar målgruppen." },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]";

export default function HomePage() {
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
        <div className="fixed inset-x-0 top-0 z-[120] h-[10px]">
          <img
            src="/line-axa.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <Header variant="home" />
        <Hero />

        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.4fr_0.3fr_0.3fr]">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#8a5a14]">
                Varför AXA
              </p>
              <h2 className="mt-4 text-[36px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#0f1724] md:text-[52px]">
                Vi är det ni vill att vi ska vara.
              </h2>
            </div>

            <p className="text-[18px] leading-[1.85] text-[#3f4a5a] md:text-[20px]">
              Hos oss är du inte rad 47 i ett CRM-system. Vi jobbar med ett
              begränsat antal kunder åt gången – för att vi ska kunna sätta oss
              in i er verksamhet och bidra med något som gör skillnad.
            </p>

            <p className="text-[18px] leading-[1.85] text-[#3f4a5a] md:text-[20px]">
              Marknadsföring på fler kanaler än bara Google och Meta. Strategi,
              SEO, annonsering, innehåll, grafik – vi hanterar det mesta. Och det
              vi inte gör själva fixar vi genom vårt breda nätverk.
            </p>
          </div>
        </section>

        {<WorkStyleCarousel /> }

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
                Det här kör vi med
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Ni väljer vad ni behöver. Vi kör.
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
                  Ett enklare sätt att få ordning på marknadsföringen
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Nära, tydligt och utan onödiga möten. Ni ska alltid veta vad som
                  händer, varför det görs och vad som är nästa steg.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { number: "01", title: "Nuläge & behov", text: "Vi tittar på var ni står idag, vad som redan görs och vilka utmaningar som bromsar er marknadsföring." },
                  { number: "02", title: "Strategi & prioritering", text: "Tillsammans sätter vi riktning, väljer fokus och landar i en plan som är rimlig att genomföra." },
                  { number: "03", title: "Genomförande", text: "Vi kör med rätt insatser, rätt tempo och tydlig kommunikation längs vägen." },
                  { number: "04", title: "Uppföljning & förbättring", text: "Vi följer upp, justerar och ser till att marknadsföringen utvecklas i takt med företagets behov." },
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
                  Vi arbetar endast med en handfull kunder
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Det gör att vi kan sätta oss in i verksamheten, förstå
                  prioriteringarna och bidra med både strategi och genomförande.
                  Målet är inte att göra mer – utan att göra rätt. Alla våra kunder är viktiga.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#e8dec9] bg-white p-8 shadow-sm shadow-[#d7c6a2]/10">
                <p className="text-sm font-medium text-[#8a5a14]">
                  Passar ofta företag som...
                </p>
                <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                  {[
                    "saknar intern marknadsansvarig",
                    "vill få bättre kontroll på vad som görs",
                    "behöver hjälp att prioritera rätt insatser",
                    "vill ha en mer personlig partner än en traditionell byrå",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#ece2cf] bg-[#fcfaf6] p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
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
                  Låter det här som något för er?
                </h2>

                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
                  Hör av dig så pratar vi. Bara ett samtal om vart ni står och vad ni behöver.
                </p>

                <div className="mt-8 space-y-3 text-slate-200">
                  <p>
                    <span className="font-semibold text-white">Telefon:</span>{" "}
                    <a
                      href="tel:+46760353560"
                      className="underline underline-offset-4 transition hover:text-[#F5B74E]"
                    >
                      +46 (0)760 35 35 60
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold text-white">E-post:</span>{" "}
                    <a
                      href="mailto:info@axaconsult.se"
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

              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}