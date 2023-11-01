import Link from 'next/link'
import React from 'react'
import { getDictionary } from '@/dictionaries'

export const Navbar = () => {
  const dict = getDictionary('ua')

  return (
    <nav className={`w-full flex justify-between px-[4.375rem] text-white small-text-bold fixed top-0 left-0 h-32 bg-black-500 z-50`}>
      <div className='flex flex-row flex-start gap-[4rem] items-center'>
        <Link href="/prices" className='hover:text-main-500 hover:cursor-pointer'>{dict.navbar.prices}</Link>
        <Link href="/booking" className='hover:text-main-500 hover:cursor-pointer'>{dict.navbar.booking}</Link>
      </div>
      <Link href="/" className='absolute top-[4rem] left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <img src="/logo.png" width="80" height="80" alt=""/>
      </Link>
      <div className='flex flex-row flex-start gap-[4rem] items-center'>
        <Link href="/about" className='hover:text-main-500 hover:cursor-pointer'>{dict.navbar.aboutUs}</Link>
        <Link href="/contacts" className='hover:text-main-500 hover:cursor-pointer'>{dict.navbar.contacts}</Link>
        <div>+380665555555</div>
      </div>
    </nav>
  )
}
