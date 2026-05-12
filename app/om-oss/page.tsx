"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function OmOss() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Hoppa till innehåll
      </a>

      <main id="main-content" className="relative min-h-screen bg-white text-[#1A2430]">

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

        <Header variant="home" />

        {/* HERO */}
        <section className="border-b border-[#eee] px-6 pb-16 pt-[160px] md:px-10 md:pt-[200px] lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
              Om oss
            </p>
            <h1 className="max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#0f1724] sm:text-[52px] md:text-[64px]">
              Vi sitter på er sida av bordet.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.85] text-[#5b6678] md:text-[20px]">
              Vi arbetar med en handfull kunder åt gången – för att kunna ge
              varje kund den tid de behöver. Inte bara skicka över en rapport
              och försvinna.
            </p>
          </div>
        </section>

        {/* FOTO */}
        <section className="border-b border-[#eee] px-6 py-12 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px] md:aspect-[21/9]">
              <Image
                src="/jon-.png"
                alt="Jon Santesson, grundare av AXA Consult"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <p className="mt-4 text-[13px] text-[#aaa]">
              Jon Santesson – grundare, AXA Consult
            </p>
          </div>
        </section>

        {/* OM JON */}
        <section className="border-b border-[#eee] px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
                Bakgrund
              </p>
              <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#0f1724] md:text-[32px]">
                Varför AXA startades
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-[1.85] text-[#5b6678]">
              <p>
                Jon Santesson grundade AXA Consult efter att ha sett samma
                mönster upprepas gång på gång – företag som anlitar byråer,
                betalar fakturor och aldrig riktigt vet vad de får tillbaka.
                Rapporterna kommer. Möten hålls. Men ingen äger
                marknadsföringen.
              </p>
              <p>
                AXA är svaret på det. En marknadskonsult som jobbar nära, tar
                ansvar och kör – oavsett om det gäller SEO, Google Ads, sociala
                medier, annonsering eller något annat. Det vi inte gör själva
                fixar vi genom vårt breda nätverk.
              </p>
              <p>
                Vi är baserade i Uppsala och Falun och arbetar med bolag som
                behöver en som tar i – inte en som levererar en presentation
                och försvinner.
              </p>
            </div>
          </div>
        </section>

        {/* HUR VI JOBBAR */}
        <section className="border-b border-[#eee] px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
              Hur vi jobbar
            </p>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Få kunder",
                  text: "Vi tar ett begränsat antal uppdrag åt gången. Det gör att varje kund får ordentlig uppmärksamhet – inte en rad i ett CRM-system.",
                },
                {
                  num: "02",
                  title: "Ordentlig hjälp",
                  text: "Vi sätter oss in i verksamheten, förstår prioriteringarna och kör – med både strategi och genomförande.",
                },
                {
                  num: "03",
                  title: "Inga konstigheter",
                  text: "Ni ska alltid veta vad som händer, varför det görs och vad nästa steg är. Utan onödiga möten.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="border-t border-[#eee] pt-6"
                >
                  <p className="mb-3 text-[11px] text-[#8a5a14] tracking-[0.15em]">
                    {item.num}
                  </p>
                  <h3 className="mb-3 text-[18px] font-semibold text-[#0f1724]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-[#5b6678]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="bg-[#08121d] px-6 py-20 text-white md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <h2 className="mb-4 text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[44px]">
                  Låter det här som något för er?
                </h2>
                <p className="mb-8 text-[17px] leading-[1.8] text-white/60">
                  Hör av dig så pratar vi. Bara ett samtal om vart ni står och
                  vad ni behöver.
                </p>
                <a
                  href="/boka-mote"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[14px] font-medium text-[#0f1724] transition hover:bg-[#fff7ea]"
                >
                  Boka ett första samtal
                </a>
              </div>
              <div className="text-[15px] leading-[2] text-white/50 lg:text-right">
                <p>
                  <span className="text-white/80">E-post</span>{" "}
                  <a
                    href="mailto:info@axaconsult.se"
                    className="text-white/60 transition hover:text-white"
                  >
                    info@axaconsult.se
                  </a>
                </p>
                <p>
                  <span className="text-white/80">Telefon</span>{" "}
                  <a
                    href="tel:+46760353560"
                    className="text-white/60 transition hover:text-white"
                  >
                    +46 760 35 35 60
                  </a>
                </p>
                <p>
                  <span className="text-white/80">Plats</span>{" "}
                  Uppsala & Falun
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
