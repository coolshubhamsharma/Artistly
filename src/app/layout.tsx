// app/layout.tsx
import '../styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ArtistProvider } from '@/context/ArtistContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artistly.com | Book Performing Artists',
  description: 'A platform to connect Event Planners and Performing Artists',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ArtistProvider>
        <body className={inter.className}>
          <Navbar />
          <main className="px-4 sm:px-6 md:px-8 py-6">{children}</main>
        </body>
      </ArtistProvider>
    </html>
  )
}
