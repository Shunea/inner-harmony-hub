import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: object;
}

const defaultImage = "https://nataliasargu.md/og-image.jpg";

const SEO = ({
  title = "Natalia Șargu | Psiholog și Psihoterapeut Integrativ în Chișinău",
  description = "Psiholog clinician și psihoterapeut integrativ în Chișinău. Oferim terapie pentru anxietate, depresie, stres și dezvoltare personală. Ședințe față în față și online.",
  keywords = "psiholog Chișinău, psihoterapeut, terapie anxietate, terapie online, psiholog Moldova, terapie depresie, dezvoltare personală",
  ogImage = defaultImage,
  ogType = "website",
  canonical,
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://nataliasargu.md";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Natalia Șargu" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Natalia Șargu - Psiholog" />
      <meta property="og:locale" content="ro_RO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
