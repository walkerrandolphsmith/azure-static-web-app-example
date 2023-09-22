import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata = {
  title: 'My Mermaid Tales',
  description: 'Enchanting mermaid entertainment for kids parties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const rootStyles = {
    fontFamily: 'Inter, sans-serif',
    'text-rendering': 'optimizeLegibility',
    'font-optical-sizing': 'auto',
    'font-kerning': 'auto',
    margin: '0px',
    'box-sizing': 'border-box',
  }
  return (
    <html lang="en" style={rootStyles}>
      <head>
        <link rel="manifest" href="manifest.json" />
        <meta property="og:title" content="My Mermaid Tales" />
        <meta property="og:image" content="/ogImage.png" />
      </head>
      <body style={rootStyles}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
