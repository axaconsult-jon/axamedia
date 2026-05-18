"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";

type Slide = {
  title: string;
  text: string;
  videoSrc: string;
  poster: string;
};

const slides: Slide[] = [
  {
    title: "Vi sitter på er sida av bordet",
    text: "Vi lär känna er verksamhet, era mål och er vardag – så att marknadsföringen blir genomförbar och närmare affären.",
    videoSrc: "/video/partner-webb.mp4",
    poster: "/partner-webb.webp",
  },
  {
    title: "Fokus på det som gör skillnad",
    text: "Istället för att göra allt på en gång hjälper vi er prioritera rätt utifrån läge, potential och vad som kan ge effekt.",
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

const AUTOPLAY_MS = 6000;

export default function WorkStyleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cardWidths = useMemo(
    () => ({ mobile: 292, tablet: 460, desktop: 930 }),
    []
  );
  const [cardWidth, setCardWidth] = useState(cardWidths.desktop);

  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 768) {
        setCardWidth(cardWidths.mobile);
      } else if (window.innerWidth < 1024) {
        setCardWidth(cardWidths.tablet);
      } else {
        setCardWidth(cardWidths.desktop);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [cardWidths]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  // Autoplay — pausas när användaren interagerar
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, isPaused]);

  const goPrev = useCallback(() => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setIsPaused(true);
    setActiveIndex(index);
  }, []);

  return (
    <section
      id="sa-jobbar-vi"
      className="overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#ffffff_100%)] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1540px] px-6 md:px-10 lg:px-16">
        <div
          className="relative w-full"
          role="region"
          aria-roledescription="carousel"
          aria-label="Så arbetar AXA Consult"
        >
          <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#8a5a14]">
                Så jobbar vi
              </p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#0f1724] md:text-[44px] lg:text-[52px]">
                Ett närmare sätt att arbeta med marknadsföring
              </h2>
              <p className="mt-5 max-w-3xl text-[17px] leading-[1.8] text-[#5b6678] md:text-[19px]">
                Nära, brett och utan onödiga möten. Ni ska alltid veta vad som
                händer och varför.
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={goPrev}
                aria-label="Previous slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/80"
              >
                ←
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={goNext}
                aria-label="Next slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/80"
              >
                →
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-6"
              style={{
                transform: `translate3d(-${activeIndex * (cardWidth + 24)}px, 0, 0)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} av ${slides.length}`}
                  className="shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="grid min-h-[320px] grid-cols-1 gap-5 rounded-[24px] bg-white p-4 text-black shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-5 lg:min-h-[390px] lg:rounded-[32px] lg:p-6 xl:grid-cols-[0.82fr_1.18fr] xl:items-stretch">
                    <div className="order-2 flex flex-col xl:order-1">
                      <h3 className="mb-4 max-w-[14ch] text-[22px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#111827] md:text-[26px] lg:text-[32px]">
                        {slide.title}
                      </h3>
                      <p className="mb-4 max-w-md text-[15px] leading-[1.75] text-[#5f6b7b] md:text-[16px]">
                        {slide.text}
                      </p>

                      <div className="mt-auto flex gap-2">
                        {slides.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => goTo(dotIndex)}
                            aria-label={`Gå till slide ${dotIndex + 1}`}
                            aria-pressed={activeIndex === dotIndex}
                            className="flex h-11 w-11 items-center justify-center rounded-full"
                          >
                            <span
                              className={`h-2.5 rounded-full transition-all duration-300 ${
                                activeIndex === dotIndex
                                  ? "w-8 bg-[#F5B74E]"
                                  : "w-2.5 bg-[#d7cdb8]"
                              }`}
                            />
                          </button>
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
                      key={slide.videoSrc}
                      ref={(el) => { videoRefs.current[index] = el; }}
                      className="order-1 aspect-[16/10] w-full rounded-[20px] object-cover xl:order-2 lg:rounded-[24px]"
                      src={slide.videoSrc}
                      poster={slide.poster}
                      muted
                      playsInline
                      loop={false}
                      preload="none"
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