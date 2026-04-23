"use client";

import { useEffect, useRef, useState } from "react";

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
    videoSrc: "/videos/partner-webb.mp4",
    poster: "/partner-webb.webp",
  },
  {
    title: "Fokus på det som faktiskt gör skillnad",
    text: "Istället för att göra allt samtidigt hjälper vi er att prioritera rätt insatser utifrån läge, potential och vad som faktiskt kan ge effekt.",
    videoSrc: "/videos/fokus-webb.mp4",
    poster: "/fokus-webb.webp",
  },
  {
    title: "Flexibelt stöd efter ert behov",
    text: "Ni kan få hjälp med strategi, genomförande eller båda delarna. Upplägget anpassas efter hur mycket stöd ni behöver just nu.",
    videoSrc: "/videos/fleibelt-stod-webb.mp4",
    poster: "/fleibelt-stod-webb.webp",
  },
];

const AUTOPLAY_MS = 5000;

export default function WorkStyleCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function scrollToSlide(index: number) {
    const el = slideRefs.current[index];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  function goPrev() {
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    scrollToSlide(nextIndex);
  }

  function goNext() {
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    scrollToSlide(nextIndex);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const indexAttr = visible[0].target.getAttribute("data-index");
        if (indexAttr == null) return;

        setActiveIndex(Number(indexAttr));
      },
      {
        root: track,
        threshold: [0.45, 0.6, 0.75],
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
      scrollToSlide(nextIndex);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  return (
    <section
      id="samarbete"
      className="bg-[linear-gradient(180deg,#f7f4ee_0%,#ffffff_100%)] px-6 py-20 md:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="relative w-full"
          role="region"
          aria-roledescription="carousel"
          aria-label="Så arbetar AXA Consult"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="mb-8 flex items-end justify-between gap-4">
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

            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Föregående slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#10161f] shadow-sm transition hover:bg-[#f7efe1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B74E]"
              >
                <svg viewBox="0 0 15 15" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Nästa slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#10161f] shadow-sm transition hover:bg-[#f7efe1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B74E]"
              >
                <svg viewBox="0 0 15 15" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                data-index={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} av ${slides.length}`}
                className="min-w-0 shrink-0 snap-start basis-[86%] md:basis-[72%] xl:basis-[68%]"
              >
                <div className="flex h-full min-h-[500px] flex-col rounded-[30px] border border-[#e7dcc7] bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-6 lg:rounded-[38px] lg:p-8">
                  <div className="grid h-full grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch">
                    <div className="flex h-full flex-col xl:px-2 xl:py-2">
                      <h3 className="max-w-[14ch] text-[28px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111827] md:text-[40px] lg:text-[46px]">
                        {slide.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-[17px] leading-[1.9] text-[#5f6b7b] md:text-[18px]">
                        {slide.text}
                      </p>

                      <div className="mt-auto pt-8">
                        <div className="flex items-center gap-2 md:hidden">
                          <button
                            type="button"
                            onClick={goPrev}
                            aria-label="Föregående slide"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ee] text-[#10161f] transition hover:bg-[#efe6d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B74E]"
                          >
                            <svg viewBox="0 0 15 15" className="h-5 w-5" fill="none" aria-hidden="true">
                              <path
                                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>

                          <button
                            type="button"
                            onClick={goNext}
                            aria-label="Nästa slide"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ee] text-[#10161f] transition hover:bg-[#efe6d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B74E]"
                          >
                            <svg viewBox="0 0 15 15" className="h-5 w-5" fill="none" aria-hidden="true">
                              <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="mt-6 flex gap-2">
                          {slides.map((_, dotIndex) => (
                            <button
                              key={dotIndex}
                              type="button"
                              onClick={() => scrollToSlide(dotIndex)}
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
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-[24px] xl:rounded-[30px]">
                      <video
                        className="aspect-video h-full min-h-[280px] w-full object-cover"
                        src={slide.videoSrc}
                        poster={slide.poster}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-[#7b8798]">
            {activeIndex + 1} / {slides.length}
          </p>
        </div>
      </div>
    </section>
  );
}