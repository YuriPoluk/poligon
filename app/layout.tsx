import './globals.css'
import type { Metadata } from 'next'
import { getDictionary } from '@/dictionaries'
import Link from 'next/link'
import { Noto_Sans_Display } from 'next/font/google'
import localFont from 'next/font/local'

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
  const dict = getDictionary('ua')

  return (
    <html lang="en">
      <body className={`px-[4.375em] py-6 bg-black-500 max-w-[1700px] m-auto ${spaceGrotesk.variable} ${akzidenz.variable}`}>
        <nav className={`w-full flex justify-between ${akzidenz.className} text-white h-16 small-text-regular`}>
          <div className='flex flex-row flex-start gap-[1.28rem] items-center'>
            <Link href="/prices" className='hover:font-bold hover:text-main-400 hover:cursor-pointer'>{dict.navbar.prices}</Link>
            <Link href="/" className='hover:font-bold hover:text-main-400 hover:cursor-pointer'>{dict.navbar.booking}</Link>
          </div>
          <Link href="/" className='absolute top-[2rem] left-1/2 -translate-x-1/2'>
            <img src="/Logo.png" alt=""/>
          </Link>
          <div className='flex flex-row flex-start gap-[1.28rem] items-center'>
            <Link href="/about" className='hover:font-bold hover:text-main-400 hover:cursor-pointer'>{dict.navbar.aboutUs}</Link>
            <Link href="/contacts" className='hover:font-bold hover:text-main-400 hover:cursor-pointer'>{dict.navbar.contacts}</Link>
            <div>+380665555555</div>
          </div>
        </nav>
        <main className='pt-[2rem]'>{children}</main>
      </body>
    </html>
  )
}

