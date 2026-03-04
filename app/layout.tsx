import type { Metadata } from 'next'

import './globals.css'
import StructuredData from '@/components/structured-data'

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter'
// })

// const playfair = Playfair_Display({ 
//   subsets: ['latin'],
//   variable: '--font-playfair'
// })

export const metadata: Metadata = {
  title: {
    default: 'RQB-593 Inmobiliaria | Propiedades en Manta y Manabí',
    template: '%s | RQB-593 Inmobiliaria'
  },
  description: 'Encuentra las mejores propiedades para comprar en Manabí y Ecuador. RQB-593 te ofrece casas, departamentos y terrenos en las mejores ubicaciones. Inmobiliaria de confianza.',
  keywords: [
    'rqb',
    'rqb-593',
    'rqb-inmobiliaria',
    'inmobiliaria manta',
    'propiedades para comprar manta',
    'propiedades para comprar manabi',
    'bienes raíces manta',
    'bienes raíces manabí',
    'casas en manta',
    'departamentos manta',
    'terrenos manta',
    'inmobiliaria ecuador',
    'propiedades ecuador',
    'comprar casa manta',
    'comprar departamento manta',
    'inversion inmobiliaria manta'
  ],
  authors: [{ name: 'RQB-593' }],
  creator: 'RQB-593',
  publisher: 'RQB-593',
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rqb-593.vercel.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: '/',
    title: 'RQB-593 Inmobiliaria | Propiedades en Manta y Manabí',
    description: 'Encuentra las mejores propiedades para comprar en Manta, Manabí y Ecuador. RQB-593 te ofrece casas, departamentos y terrenos en las mejores ubicaciones.',
    siteName: 'RQB-593 Inmobiliaria',
    images: [
      {
        url: process.env.NEXT_PUBLIC_HERO_IMAGE_URL || 'https://xpznugqofelwvteosjny.supabase.co/storage/v1/object/sign/rqb-bucket/hero-property.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNGFlM2ZmNy1jMDJkLTRmNzUtYWVhYS0wNTY3NzI3YTAxYzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJycWItYnVja2V0L2hlcm8tcHJvcGVydHkucG5nIiwiaWF0IjoxNzcyMjIzMjQxLCJleHAiOjIwODc1ODMyNDF9.piYIT_d2iMMw5TJzaEf9hDmwEMkBGxYiPX4FQBNgGH8',
        width: 1200,
        height: 630,
        alt: 'RQB-593 Inmobiliaria - Propiedades en Manta'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RQB-593 Inmobiliaria | Propiedades en Manta y Manabí',
    description: 'Encuentra las mejores propiedades para comprar en Manta, Manabí y Ecuador.',
    images: [process.env.NEXT_PUBLIC_HERO_IMAGE_URL || 'https://xpznugqofelwvteosjny.supabase.co/storage/v1/object/sign/rqb-bucket/hero-property.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNGFlM2ZmNy1jMDJkLTRmNzUtYWVhYS0wNTY3NzI3YTAxYzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJycWItYnVja2V0L2hlcm8tcHJvcGVydHkucG5nIiwiaWF0IjoxNzcyMjIzMjQxLCJleHAiOjIwODc1ODMyNDF9.piYIT_d2iMMw5TJzaEf9hDmwEMkBGxYiPX4FQBNgGH8']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
