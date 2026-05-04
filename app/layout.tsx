import "./globals.css";
import { Inter } from "next/font/google";
import SchemaMarkup from "./components/SchemaMarkup";
import Script from "next/script";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AXA Consult | Marknadskonsult i Uppsala och Falun",
  description:
    "AXA Consult hjälper företag att få struktur i marknadsföringen, prioritera rätt och driva arbetet framåt.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "hr3m7KAt_mw2MCCe9wWM0hAuxFyGyArLSOmAuyKLDgo",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${inter.className} antialiased`}>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWK4BHP');
          `}
        </Script>

        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWK4BHP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <SchemaMarkup />

        {children}
      </body>
    </html>
  );
}