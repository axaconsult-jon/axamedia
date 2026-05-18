"use client";

import { useEffect, useRef, useState } from "react";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]";

const mobileLinkClass = `py-3 text-[28px] tracking-[-0.04em] text-white transition hover:text-[#F5B74E] ${focusRing}`;

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <button
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute right-3 top-2 z-[200] flex h-14 w-14 items-center justify-center text-[40px] leading-none text-white transition hover:text-[#F5B74E] focus:outline-none md:hidden"

      >
        <span
          aria-hidden="true"
          className={`inline-block transition-transform duration-300 ${
            menuOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[200] md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Stäng menybakgrund"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/35 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobilmeny"
          className={`absolute inset-y-0 right-0 w-full bg-[#101923] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-6 pb-8 pt-8">
            <div className="flex justify-end">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Stäng meny"
                className={`text-[40px] leading-none text-white/75 transition hover:text-[#F5B74E] ${focusRing}`}
              >
                <span aria-hidden="true" className="inline-block rotate-45">
                  +
                </span>
              </button>
            </div>

            <nav aria-label="Mobil navigering" className="mt-8 flex flex-col">
              <a href="#services" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                Tjänster
              </a>
              <a href="#process" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                Arbetssätt
              </a>
              <a href="#samarbete" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                Samarbete
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                FAQ
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                Kontakt
              </a>
            </nav>

            <div className="mt-auto pt-8">
              <a
                href="/boka-mote"
                onClick={() => setMenuOpen(false)}
                className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-white to-[#f4efe6] px-6 py-4 text-[15px] font-medium text-[#10161f] transition hover:scale-[0.985] hover:from-[#fff7ea] hover:to-white ${focusRing}`}
              >
                Boka ett första samtal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}