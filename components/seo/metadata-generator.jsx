"use client";

import Head from 'next/head';

const SEOMetadata = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  schema,
  type = 'website',
  locale = 'es_ES'
}) => {
  const defaultTitle = "LEEXMS SRL - Servicios Contables y Consultoría Empresarial";
  const defaultDescription = "LEEXMS SRL - Servicios contables y consultoría empresarial en República Dominicana. Auditoría, asesoría fiscal, gestión de nómina y más.";
  const defaultKeywords = "servicios contables, consultoría empresarial, auditoría, asesoría fiscal, República Dominicana, LEEXMS";
  const siteUrl = "https://leexms.com";
  
  const finalTitle = title ? `${title} - LEEXMS SRL` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const finalOgImage = ogImage || `${siteUrl}/banner-completo.png`;

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="LEEXMS SRL" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={locale} />
      
      <link rel="canonical" href={finalCanonical} />
      
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="LEEXMS SRL" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

export default SEOMetadata;
