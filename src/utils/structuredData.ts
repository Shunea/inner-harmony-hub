import { getSocialLinksArray } from "@/config/socialLinks";

// Structured Data pentru LocalBusiness și ProfessionalService
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "ProfessionalService"],
  "name": "Natalia Șargu - Psiholog și Psihoterapeut",
  "image": "https://nataliasargu.md/og-image.jpg",
  "description": "Cabinet de psihoterapie în Chișinău. Oferim servicii de psihoterapie pentru anxietate, depresie, traumă și dezvoltare personală.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chișinău",
    "addressCountry": "MD"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.0105",
    "longitude": "28.8638"
  },
  "url": "https://nataliasargu.md",
  "telephone": "+37369234250",
  "email": "contact@nataliasargu.md",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": getSocialLinksArray()
});

// Structured Data pentru Person (Natalia Șargu)
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Natalia Șargu",
  "jobTitle": "Psiholog Clinician și Psihoterapeut Integrativ",
  "description": "Psiholog clinician cu dublă specializare și psihoterapeut integrativ în supervizare, cu experiență în lucrul cu anxietate, depresie, traumă și dezvoltare personală.",
  "url": "https://nataliasargu.md/despre-natalia-sargu",
  "image": "https://nataliasargu.md/og-image.jpg",
  "telephone": "+37369234250",
  "email": "contact@nataliasargu.md",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chișinău",
    "addressCountry": "MD"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Master în Psihologie Clinică"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Master în Psihologie Organizațională"
    }
  ],
  "knowsAbout": [
    "Psihoterapie",
    "Anxietate",
    "Depresie",
    "Traumă",
    "Dezvoltare Personală",
    "Mindfulness",
    "Terapie Cognitivă Comportamentală"
  ],
  "sameAs": getSocialLinksArray()
});

// Structured Data pentru Service
export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Servicii de Psihoterapie",
  "provider": {
    "@type": "Person",
    "name": "Natalia Șargu"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Moldova"
  },
  "availableChannel": [
    {
      "@type": "ServiceChannel",
      "serviceType": "Ședințe la cabinet",
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chișinău",
          "addressCountry": "MD"
        }
      }
    },
    {
      "@type": "ServiceChannel",
      "serviceType": "Ședințe online",
      "availableLanguage": "Romanian"
    }
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Terapie pentru Anxietate",
      "description": "Gestionarea anxietății, atacurilor de panică și a stresului cronic"
    },
    {
      "@type": "Offer",
      "name": "Terapie pentru Depresie",
      "description": "Sprijin în procesul de recuperare și reconstrucția motivației"
    },
    {
      "@type": "Offer",
      "name": "Lucrul cu Trauma",
      "description": "Procesarea experiențelor traumatice într-un ritm sigur"
    }
  ]
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://nataliasargu.md${item.url}`
  }))
});
