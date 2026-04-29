export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AXA Consult",
    url: "https://www.axaconsult.se",
    slogan: "Marknadsföring för företag som vill framåt",
    description:
      "AXA Consult hjälper företag att få struktur i marknadsföringen, prioritera rätt och driva arbetet framåt. Ni får samma bredd som från en mediabyrå – men i ett närmare, mer personligt samarbete.",
    telephone: "+46760353560",
    email: "info@axaconsult.se",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Uppsala",
      addressCountry: "SE",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Uppsala",
      },
      {
        "@type": "City",
        name: "Falun",
      },
    ],

    serviceType: [
      "Marknadsstrategi",
      "SEO",
      "Google Ads",
      "Annonsering",
      "Sociala medier",
      "Innehåll",
      "Nyhetsbrev",
      "Kundkommunikation",
      "Webb",
      "Varumärke",
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategi & prioritering",
          description:
            "Vi hjälper er sätta riktning, välja fokus och prioritera det som faktiskt gör skillnad.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & synlighet",
          description:
            "För företag som vill synas bättre i sök och bygga relevant trafik över tid.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads & annonsering",
          description:
            "Vi hjälper er nå rätt målgrupp och få bättre koll på vad som fungerar.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sociala medier & innehåll",
          description:
            "Innehåll och annonser som stärker ert varumärke och driver affär.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nyhetsbrev & kundkommunikation",
          description:
            "För företag som vill hålla kontakt med kunder och skapa fler affärer över tid.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webb & varumärke",
          description:
            "Vi ser till att budskap, struktur och upplevelse hänger ihop.",
        },
      },
    ],

    mainEntity: [
      {
        "@type": "Question",
        name: "Vad gör en marknadskonsult?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En marknadskonsult hjälper företag med strategi, prioritering och genomförande av marknadsföring.",
        },
      },
      {
        "@type": "Question",
        name: "Vilka företag passar AXA Consult för?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AXA Consult passar ofta företag som saknar intern marknadsansvarig, vill få bättre kontroll på marknadsföringen och behöver hjälp att prioritera rätt insatser.",
        },
      },
      {
        "@type": "Question",
        name: "Vilka tjänster kan ni hjälpa till med?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AXA Consult hjälper till med strategi, SEO, Google Ads, annonsering, sociala medier, innehåll, nyhetsbrev, webb och varumärke.",
        },
      },
      {
        "@type": "Question",
        name: "Jobbar ni löpande eller i projekt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AXA Consult kan arbeta både löpande och i projekt beroende på företagets behov.",
        },
      },
      {
        "@type": "Question",
        name: "Hur vet vi vad som ska prioriteras först?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arbetet börjar med nuläge och behov. Därefter sätts riktning, fokus och en rimlig plan för genomförande.",
        },
      },
      {
        "@type": "Question",
        name: "Vad kostar det att anlita AXA Consult?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kostnaden beror på upplägg, omfattning och hur mycket stöd företaget behöver.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}