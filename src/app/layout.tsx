import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohamed Aziz MENSI - Portfolio',
  description: 'Software Engineering Student Portfolio - Embedded Systems & Web Development',
  keywords: 'Mohamed Aziz MENSI, Software Engineering, Computer Science, Portfolio, ENSI',
  authors: [{ name: 'Mohamed Aziz MENSI' }],
  icons: {
  icon: process.env.NEXT_PUBLIC_SITE_ICON || '/images/MEE.jpg',
  apple: process.env.NEXT_PUBLIC_SITE_ICON || '/images/MEE.jpg',
  shortcut: process.env.NEXT_PUBLIC_SITE_ICON || '/images/MEE.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
