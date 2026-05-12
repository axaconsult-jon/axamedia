"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Integritetspolicy() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#faf7f1_0%,#ffffff_100%)] text-[#1A2430]">
        <div className="fixed inset-x-0 top-0 z-[160] h-[10px]">
          <Image
            src="/line-axa.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Header variant="boka" />

        <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 md:px-10 md:pt-[205px] lg:px-16">
          <div className="max-w-3xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#8a5a14]">
              Integritet
            </p>

            <h1 className="mt-3 text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] md:text-[54px]">
              Integritetspolicy
            </h1>

            <p className="mt-6 text-[17px] leading-[1.8] text-[#1A2430]/80">
              AXA Consult AB värnar om din personliga integritet och strävar efter att skydda dina personuppgifter på ett tryggt och transparent sätt. Denna integritetspolicy förklarar hur vi samlar in och använder information via vår webbplats.
            </p>
          </div>

          <div className="mt-16 max-w-3xl space-y-12">
            {/* resten av innehållet kan ligga kvar som du har det */}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}