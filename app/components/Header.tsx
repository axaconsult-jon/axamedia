"use client";

import Image from "next/image";

type HeaderProps = {
  variant?: "home" | "boka";
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
};

const linkClasses =
  "rounded-2xl px-4 py-2 text-[15px] text-white/90 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]";

export default function Header({
  variant = "home",
  menuOpen = false,
  setMenuOpen,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-[10px] z-[110] border-b border-white/5 bg-[linear-gradient(135deg,rgba(8,18,29,0.98)_0%,rgba(10,23,36,0.97)_60%,rgba(13,27,43,0.96)_100%)] px-5 pt-4 md:px-10 md:pt-8 lg:px-16">
      <nav
        aria-label="Huvudnavigering"
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center py-5 md:grid-cols-[180px_1fr_240px] md:py-6"
      >
        <a
          href="/"
          className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
        >
          <Image
            src="/axa-logo.svg"
            alt="AXA Consult"
            width={124}
            height={33}
            priority
            className="md:w-[132px]"
          />
        </a>

        <div className="hidden items-center justify-center gap-3 md:flex">
          <a href={variant === "home" ? "#services" : "/#services"} className={linkClasses}>
  Tjänster
</a>

<a href={variant === "home" ? "#process" : "/#process"} className={linkClasses}>
  Arbetssätt
</a>

<a href={variant === "home" ? "#samarbete" : "/#samarbete"} className={linkClasses}>
  Samarbete
</a>

<a href={variant === "home" ? "#faq" : "/#faq"} className={linkClasses}>
  FAQ
</a>

<a href={variant === "home" ? "#contact" : "/#contact"} className={linkClasses}>
  Kontakt
</a>
        </div>

        <div className="flex items-center justify-end gap-3">
          {variant === "home" && setMenuOpen && (
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute right-5 top-6 z-[200] text-[40px] leading-none text-white transition hover:text-[#F5B74E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E] md:hidden"
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
          )}

          {variant === "boka" && (
            <a
              href="/"
              className="text-[14px] font-medium text-white/90 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E] md:hidden"
            >
              Tillbaka
            </a>
          )}

          {variant === "home" && (
            <a
              href="/boka-mote"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#10161f] transition hover:scale-[0.97] hover:bg-[#fff7ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
            >
              Boka ett första samtal
            </a>
          )}

          {variant === "boka" && (
            <a
              href="/"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#10161f] transition hover:scale-[0.97] hover:bg-[#fff7ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B74E]"
            >
              Till startsidan
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}