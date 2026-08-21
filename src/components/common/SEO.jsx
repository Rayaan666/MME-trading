import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Wood & Plywood Supplier in Dubai & UAE | MME Trading",
  description = "MME Trading supplies marine plywood, commercial plywood, MDF boards and timber for construction, interiors and commercial projects across Dubai and the UAE.",
  canonical = "https://www.mmetrading.com/",
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1596700683696-65123d45ef42?auto=format&fit=crop&q=80",
  schema = null,
  noindex = false,
}) => {
  const siteUrl = "https://www.mmetrading.com";
  const fullCanonical = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;

  // Default Organization JSON-LD Schema
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MME Trading FZE LLC",
    "url": siteUrl,
    "logo": `${siteUrl}/assets/logo.png`,
    "description": "Supplier of wood, plywood, MDF boards and timber products in the UAE.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ajman",
      "addressCountry": "AE"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971557354031",
      "contactType": "sales",
      "email": "info@mmetrading.com"
    }
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content="MME Trading FZE LLC" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultOrgSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
