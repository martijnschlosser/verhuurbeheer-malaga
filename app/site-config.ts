export const siteConfig = {
  template: {
    version: "1.0.0",
    citySlug: "malaga",
    leadPath: "/woning-aanmelden/",
    thankYouPath: "/bedankt/",
    sourceWebsite: "verhuurbeheermalaga.nl",
  },
  brand: {
    name: "Verhuurbeheer Málaga",
    legalName: "Verhuurbeheer Spanje",
    parentUrl: "https://www.verhuurbeheerspanje.nl/",
  },
  location: {
    city: "Málaga",
    region: "Costa del Sol",
    language: "nl-NL",
    areas: [
      "Málaga Centro",
      "Málaga Este",
      "El Limonar",
      "Pedregalejo",
      "Huelin",
      "Teatinos",
      "Cerrado de Calderón",
    ],
  },
  assets: {
    logo: "/vbs-logo-malaga.webp",
    hero: "/malaga-hero.webp",
    social: "/luxe-woning-malaga-zeezicht.webp",
    signup: "/zonnig-terras-zeezicht-malaga.webp",
  },
  domain: "https://verhuurbeheermalaga.nl",
  contact: {
    email: "contact@verhuurbeheerspanje.nl",
    whatsapp: "31852128105",
  },
  pricing: {
    holidayRental: "Vanaf 18%",
    midterm: "Eenmalig 1 maand huur",
    longterm: "Eenmalig 1 maand huur",
  },
  social: {
    instagram: "https://www.instagram.com/verhuurbeheer_spanje/",
    facebook: "https://www.facebook.com/verhuurbeheerspanje/",
  },
  seo: {
    title: "Verhuurbeheer Málaga | Voor Nederlandse eigenaren",
    description:
      "Fullservice verhuurbeheer in Málaga voor Nederlandse eigenaren. Vakantieverhuur vanaf 18%, midterm, langetermijn en lokaal vastgoedbeheer.",
    primaryKeywords: [
      "verhuurbeheer Málaga",
      "Nederlandse verhuurmakelaar Málaga",
      "sleutelbeheer Málaga",
      "vakantieverhuurbeheer Málaga",
      "vastgoedbeheer Málaga",
      "woningbeheer Málaga",
      "vakantiewoning verhuren Málaga",
      "Airbnb beheer Málaga",
      "verhuurlicentie Málaga",
      "appartement verhuren Málaga",
      "villa verhuren Málaga",
      "appartement verhuren Málaga Este",
      "vastgoedbeheer El Limonar",
    ],
    longTailKeywords: [
      "Nederlandstalig verhuurbeheer voor woningeigenaren in Málaga",
      "Nederlandse verhuurmakelaar voor appartement in Málaga",
      "sleutelbeheer voor tweede woning in Málaga",
      "vakantiewoning professioneel laten verhuren in Málaga",
      "Airbnb en Booking beheer voor appartement in Málaga",
      "fullservice vakantieverhuurbeheer aan de Costa del Sol",
      "lokaal vastgoedbeheer voor tweede woning in Málaga",
      "villa verhuren met beheer in Málaga",
      "Nederlandstalig woningbeheer Málaga Este",
    ],
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const leadHref = siteConfig.template.leadPath;
export const leadSubject = (context = "woningaanmelding") =>
  `Nieuwe ${context} via ${siteConfig.brand.name}`;
export const whatsappHref = (
  message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`,
) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
