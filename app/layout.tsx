import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Display } from 'next/font/google'
import localFont from 'next/font/local'
import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const spaceGrotesk = Noto_Sans_Display({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-spaceGrotesk'
})
  
export const akzidenz = localFont({
    src: [
        {
            path: '../public/Akzidenz-Grotesk Pro Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/akzidenzgroteskpro_boldex.otf',
            weight: '700',
            style: 'normal'
        },
    ],
    variable: '--font-akzidenz'
  })

export const metadata: Metadata = {
  title: 'PLGN',
  description: 'Найбільший сертифікований полігон в Україні'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`px-[4.375rem] pb-8 pt-32 bg-black-500 max-w-[1700px] m-auto relative ${spaceGrotesk.variable} ${akzidenz.variable}`}>
        <Navbar />
        <main className='pt-[0.6rem] pb-[2.8rem]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

