import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poligon',
}
 
import { arkidenz, space_grotesk } from './fonts'
import { getDictionary } from '@/dictionaries'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dict = getDictionary('ua')

  return (
    <html lang="en">
      <body className={'px-[4.375em] py-6 bg-black-500 max-w-[1700px] m-auto'}>
        <nav className={`w-full flex justify-between ${arkidenz.className} text-white h-16 uppercase`}>
          <div className='flex flex-row flex-start gap-[1.28rem] text-[0.875rem] font-normal items-center'>
            <Link href="/prices" className='hover:font-bold hover:text-military-green-400 hover:cursor-pointer'>{dict.navbar.prices}</Link>
            <Link href="/" className='hover:font-bold hover:text-military-green-400 hover:cursor-pointer'>{dict.navbar.booking}</Link>
          </div>
          <Link href="/" className='absolute top-[2rem] left-1/2 -translate-x-1/2'>
            <img src="/Logo.png" alt=""/>
          </Link>
          <div className='flex flex-row flex-start gap-[1.28rem] text-[0.875rem] font-normal items-center'>
            <Link href="/about" className='hover:font-bold hover:text-military-green-400 hover:cursor-pointer'>{dict.navbar.aboutUs}</Link>
            <Link href="/contacts" className='hover:font-bold hover:text-military-green-400 hover:cursor-pointer'>{dict.navbar.contacts}</Link>
            <div>+380665555555</div>
          </div>
        </nav>
        <main className='pt-[2rem]'>{children}</main>
      </body>
    </html>
  )
}

