import Image from "next/image";

export default function Footer() {
  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]";

  return (
    <footer className="relative bg-[#0f1a24] px-6 py-16 md:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {/* LOGO + TEXT */}
        <div className="max-w-sm">
          <Image
            src="/axa-logo.svg"
            alt="AXA Consult"
            width={130}
            height={32}
            className="opacity-90"
          />
          <p className="mt-6 text-[14px] leading-[1.7] text-white/68">
          Marknadsföring, strategi och genomförande
          <br />
          för företag som vill få tydligare riktning
          <br />
          och bättre fart i rätt saker.
          </p>
        </div>

        {/* NAV */}
        {[
  ["Startsida", "/"],
  ["Så jobbar vi", "/#sa-jobbar-vi"],
  ["Tjänster", "/#services"],
  ["Process", "/#process"],
  ["Samarbete", "/#samarbete"],
  ["FAQ", "/#faq"],
  ["Kontakt", "/#contact"],
].map(([label, href]) => (
  <a
    key={href}
    href={href}
    className={`transition hover:text-white ${focusRing}`}
  >
    {label}
  </a>
))}

        {/* CONTACT */}
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

          {/* ADRESS (fixad med postnummer) */}
          <div className="mt-6 space-y-3 text-[14px] text-white/72">
            <div>
              <p className="text-white/90">Uppsala</p>
              <p>Bergsbrunnagatan 5</p>
              <p>753 23 Uppsala</p>
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
  );
}