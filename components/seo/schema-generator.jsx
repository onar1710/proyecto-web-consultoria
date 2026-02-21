export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LEEXMS SRL",
  "url": "https://leexms.com",
  "logo": "https://leexms.com/favicon.png",
  "description": "Servicios contables y consultoría empresarial en República Dominicana",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DO",
    "addressLocality": "Santo Domingo",
    "addressRegion": "Distrito Nacional"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-809-000-0000",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://www.facebook.com/leexms",
    "https://www.linkedin.com/company/leexms"
  ]
});

export const generateWebPageSchema = (title, description, url) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": `https://leexms.com${url}`,
  "inLanguage": "es",
  "isPartOf": {
    "@type": "WebSite",
    "name": "LEEXMS SRL",
    "url": "https://leexms.com"
  }
});

export const generateServiceSchema = (serviceName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "url": `https://leexms.com${url}`,
  "provider": {
    "@type": "Organization",
    "name": "LEEXMS SRL",
    "url": "https://leexms.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "República Dominicana"
  },
  "availableLanguage": "Spanish"
});

export const generateArticleSchema = (title, description, url, datePublished, author) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": `https://leexms.com${url}`,
  "datePublished": datePublished,
  "dateModified": datePublished,
  "author": {
    "@type": "Organization",
    "name": author || "LEEXMS SRL"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LEEXMS SRL",
    "url": "https://leexms.com"
  },
  "inLanguage": "es"
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://leexms.com${crumb.url}`
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LEEXMS SRL",
  "description": "Servicios contables y consultoría empresarial en República Dominicana",
  "url": "https://leexms.com",
  "telephone": "+1-809-000-0000",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DO",
    "addressLocality": "Santo Domingo",
    "addressRegion": "Distrito Nacional"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.4763",
    "longitude": "-69.8933"
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "availableLanguage": "Spanish"
});
