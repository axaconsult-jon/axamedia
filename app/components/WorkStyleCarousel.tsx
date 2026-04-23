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
      className="overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#ffffff_100%)] py-20 lg:py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#10161f] shadow-sm transition hover:bg-[#f7efe1]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Nästa slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#10161f] shadow-sm transition hover:bg-[#f7efe1]"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-10 lg:px-16"
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
            className="min-w-0 shrink-0 snap-start basis-[92%] md:basis-[78%] xl:basis-[70%] 2xl:basis-[64%]"
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
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ee] text-[#10161f] transition hover:bg-[#efe6d6]"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Nästa slide"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ee] text-[#10161f] transition hover:bg-[#efe6d6]"
                      >
                        →
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

      <div className="mx-auto mt-4 max-w-7xl px-6 text-sm text-[#7b8798] md:px-10 lg:px-16">
        {activeIndex + 1} / {slides.length}
      </div>
    </section>
  );
}