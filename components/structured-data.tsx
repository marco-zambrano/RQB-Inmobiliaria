export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "RQB-593 Inmobiliaria",
    "description": "Inmobiliaria especializada en propiedades en Manta y Manabí, Ecuador. Encuentra las mejores propiedades para comprar, vender y alquilar.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://rqb-593.vercel.app",
    "telephone": "+593999467091",
    "email": "robinhood-64@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manta",
      "addressRegion": "Manabí",
      "addressCountry": "EC"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Manta"
      },
      {
        "@type": "Place", 
        "name": "Manabí"
      },
      {
        "@type": "Place",
        "name": "Ecuador"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Propiedades disponibles",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstate",
            "name": "Casas en Manta"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "RealEstate",
            "name": "Departamentos en Manta"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstate", 
            "name": "Terrenos en Manta"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100067704142172"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
