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

            <div>
              <h2 className="text-[22px] font-semibold">1. Allmänt</h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                AXA Consult AB värnar om din personliga integritet och strävar efter att skydda dina personuppgifter på ett tryggt och transparent sätt.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold">
                2. Vilka personuppgifter vi samlar in
              </h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vi samlar endast in personuppgifter som du själv lämnar till oss via formulär på webbplatsen, exempelvis:
              </p>

              <ul className="mt-4 space-y-2 text-[16px] text-[#1A2430]/80">
                <li>• Namn</li>
                <li>• E-postadress</li>
                <li>• Telefonnummer</li>
                <li>• Information du själv väljer att skriva i meddelandefält</li>
              </ul>

              <p className="mt-4 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vi kan även samla in viss teknisk information automatiskt, såsom IP-adress och information om hur webbplatsen används.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold">
                3. Syfte med behandlingen
              </h2>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vi behandlar dina personuppgifter för att:
              </p>

              <ul className="mt-4 space-y-2 text-[16px] text-[#1A2430]/80">
                <li>• Ta emot och besvara din förfrågan</li>
                <li>• Följa upp kontakt</li>
                <li>• Förbättra vår webbplats och användarupplevelse</li>
              </ul>

              <p className="mt-4 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vi använder inte dina uppgifter för automatiserat beslutsfattande eller profilering.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold">4. Cookies</h2>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vår webbplats använder cookies för att säkerställa funktionalitet och förbättra användarupplevelsen.
              </p>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vi använder endast nödvändiga cookies samt eventuellt statistikcookies. När du besöker webbplatsen får du möjlighet att godkänna eller neka cookies via vår cookie-banner.
              </p>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Du kan när som helst ändra dina cookie-inställningar.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold">
                5. Tredjepartstjänster
              </h2>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vi delar inte dina personuppgifter med tredje part i marknadsföringssyfte.
              </p>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Eventuella tekniska leverantörer kan behandla uppgifter som personuppgiftsbiträden enligt avtal.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold">
                6. Hur länge vi sparar uppgifter
              </h2>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Vi sparar dina uppgifter så länge det är nödvändigt för att hantera din förfrågan och uppföljning, eller så länge vi är skyldiga enligt lag.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold">
                7. Dina rättigheter
              </h2>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                Du har rätt att:
              </p>

              <ul className="mt-4 space-y-2 text-[16px] text-[#1A2430]/80">
                <li>• Begära tillgång till dina personuppgifter</li>
                <li>• Begära rättelse av felaktiga uppgifter</li>
                <li>• Begära radering av dina uppgifter</li>
                <li>• Invända mot behandling</li>
              </ul>

              <p className="mt-4 text-[16px] leading-[1.8] text-[#1A2430]/80">
                För att utöva dina rättigheter, kontakta oss.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold">
                8. Kontaktuppgifter
              </h2>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#1A2430]/80">
                AXA Consult AB
              </p>

              <p className="text-[16px] leading-[1.8] text-[#1A2430]/80">
                E-post: info@axaconsult.se
              </p>

              <p className="text-[16px] leading-[1.8] text-[#1A2430]/80">
                Telefon: 076-035 35 60
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}