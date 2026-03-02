import type { Metadata } from 'next'

import './globals.css'

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter'
// })

// const playfair = Playfair_Display({ 
//   subsets: ['latin'],
//   variable: '--font-playfair'
// })

export const metadata: Metadata = {
  title: 'RQB 593 - Bienes Raíces Premium',
  description: 'Las mejores propiedades en las zonas más exclusivas'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
