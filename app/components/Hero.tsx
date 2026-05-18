const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]";

const heroItems = [
  {
    title: "Rätt prioriteringar",
    text: "Vi hjälper er se vad som är viktigast just nu och vad som kan vänta.",
    icon: "◎",
  },
  {
    title: "Stöd i det löpande arbetet",
    text: "Vi håller ihop marknadsföringen och ser till att det rör sig.",
    icon: "↗",
  },
  {
    title: "Från plan till genomförande",
    text: "När det inte räcker med idéer, utan också behöver bli något konkret.",
    icon: "✦",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08121d] px-6 pb-24 pt-[40px] md:px-10 md:pb-32 md:pt-[205px] lg:px-16 lg:pb-36 lg:pt-[235px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111c_0%,#0a1724_38%,#102238_72%,#142b44_100%)]" />

        <div className="hero-wave absolute inset-x-0 bottom-0 hidden h-[42%] md:block" />

        <div className="absolute right-[6%] top-[22%] hidden h-[420px] w-[420px] rounded-full bg-[#F5B74E]/20 blur-[90px] md:block" />
        <div className="absolute left-[2%] bottom-[8%] hidden h-[360px] w-[360px] rounded-full bg-[#8fb3da]/18 blur-[80px] md:block" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5B74E] sm:text-[12px]">
            Marknadskonsult i Uppsala och Falun
          </p>

          <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[56px] md:text-[68px] lg:text-[78px]">
            <span className="block">Vi är en byrå.</span>
            <span className="block bg-gradient-to-r from-[#8fb3da] via-[#dce8f6] to-[#F5B74E] bg-clip-text pb-[0.08em] text-transparent">
              Men ändå inte en byrå.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-white/75 sm:text-[18px] md:text-[20px]">
            Vi arbetar med en handfull kunder, för att kunna ge varje kund
            den tid de behöver och sitta på deras sida av bordet. Inte bara
            skicka över en rapport och försvinna. Oavsett om det gäller SEO,
            Google Ads, sociala medier, annonsering eller något annat. Det vi
            inte gör själva fixar vi genom vårt breda nätverk.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

        <div className="lg:col-span-5">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F5B74E]">
            Så kan vi hjälpa till
          </p>

          <div className="mt-5 grid gap-3">
            {heroItems.map((item) => (
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
    </section>
  );
}