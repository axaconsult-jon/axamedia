"use client";

import { useEffect, useState } from "react";

type Slide = {
  title: string;
  text: string;
  videoSrc: string;
  poster: string;
};

const slides: Slide[] = [
  {
    title: "En partner, inte bara en leverantör",
    text: "Vi sätter oss in i er verksamhet, era mål och er vardag. Det gör att marknadsföringen blir mer relevant, mer genomförbar och närmare affären.",
    videoSrc: "/video/partner-webb.mp4",
    poster: "/partner-webb.webp",
  },
  {
    title: "Fokus på det som faktiskt gör skillnad",
    text: "Istället för att göra allt samtidigt hjälper vi er att prioritera rätt insatser utifrån läge, potential och vad som faktiskt kan ge effekt.",
    videoSrc: "/video/fokus-webb.mp4",
    poster: "/fokus-webb.webp",
  },
  {
    title: "Flexibelt stöd efter ert behov",
    text: "Ni kan få hjälp med strategi, genomförande eller båda delarna. Upplägget anpassas efter hur mycket stöd ni behöver just nu.",
    videoSrc: "/video/fleibelt-stod-webb.mp4",
    poster: "/fleibelt-stod-webb.webp",
  },
];

const AUTOPLAY_MS = 7000;
const STEP_PX = 750;

export default function WorkStyleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function goPrev() {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function goNext() {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="samarbete"
      className="overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#ffffff_100%)] py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div
          className="relative w-full"
          role="region"
          aria-roledescription="carousel"
          aria-label="Så arbetar AXA Consult"
        >
          <div className="mb-6 flex w-full justify-between gap-4 pt-1">
            <div className="max-w-3xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#8a5a14]">
                Samarbete
              </p>
              <h2 className="mt-3 text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0f1724] md:text-[52px]">
                Ett närmare sätt att arbeta med marknadsföring
              </h2>
              <p className="mt-6 max-w-3xl text-[18px] leading-[1.85] text-[#5b6678] md:text-[20px]">
                Ni får ett stöd som kombinerar affärsförståelse,
                marknadsstrategi och genomförande. Tanken är enkel: mindre
                fluff, mer riktning och bättre fart i rätt saker.
              </p>
            </div>

            <div className="mb-4 ml-auto hidden gap-2 md:flex">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={goPrev}
                aria-label="Previous slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/80"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={goNext}
                aria-label="Next slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/80"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(-${activeIndex * STEP_PX}px, 0, 0)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={`${slide.title}-${index}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} av ${slides.length}`}
                  className="shrink-0"
                  style={{ width: `${STEP_PX}px` }}
                >
                  <div className="grid min-h-[390px] grid-cols-1 justify-between gap-6 rounded-[28px] bg-white p-4 text-black shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-5 lg:rounded-[32px] lg:p-6 xl:grid-cols-[0.78fr_1.22fr] xl:items-stretch">
                    <div className="flex flex-col xl:px-2 xl:py-2">
                      <h3 className="mb-4 max-w-[13ch] text-[24px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#111827] md:text-[30px] lg:text-[34px]">
                        {slide.title}
                      </h3>

                      <p className="mb-4 max-w-md text-[15px] leading-[1.8] text-[#5f6b7b] md:text-[16px]">
                        {slide.text}
                      </p>

                      <div className="mt-auto flex gap-2">
                        {slides.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setActiveIndex(dotIndex)}
                            aria-label={`Gå till slide ${dotIndex + 1}`}
                            aria-pressed={activeIndex === dotIndex}
                            className={`h-2.5 rounded-full transition-all ${
                              activeIndex === dotIndex
                                ? "w-8 bg-[#F5B74E]"
                                : "w-2.5 bg-[#d7cdb8]"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="mt-6 flex gap-2 md:hidden">
                        <button
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={goPrev}
                          aria-label="Previous slide"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f4ee] text-black transition hover:bg-[#efe6d6]"
                        >
                          ←
                        </button>

                        <button
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={goNext}
                          aria-label="Next slide"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f4ee] text-black transition hover:bg-[#efe6d6]"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    <video
                      key={`${slide.videoSrc}-${activeIndex === index ? "active" : "inactive"}`}
                      className="aspect-[16/10] w-full rounded-[22px] object-cover lg:rounded-[26px]"
                      src={slide.videoSrc}
                      poster={slide.poster}
                      muted
                      loop
                      playsInline
                      autoPlay={activeIndex === index}
                      preload="auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-[#7b8798]">
            {activeIndex + 1} / {slides.length}
          </p>
        </div>
      </div>
    </section>
  );
}