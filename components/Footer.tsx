import React from 'react'
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import phoneIcon from '@/public/icons/icon-phone.svg'
import markerIcon from '@/public/icons/icon-map-pin.svg'
import calendarIcon from '@/public/icons/icon-calendar.svg'
import telegramIcon from '@/public/icons/icon-telegram.svg'
import instagramIcon from '@/public/icons/icon-instagram.svg'
import { getDictionary } from '@/dictionaries';
import Link from 'next/link'

export const Footer = () => {
    
    const dict = getDictionary('ua')

    return (
        <>
            <div className='flex flex-col items-center gap-8 mt-8'>
                <Image src="/logo.png" width={70} height={70} alt="logo"/>
                <div className='flex flex-row gap-8 text-grey-200 small-text-regular justify-between'>
                    <Link href="/prices" className='hover:cursor-pointer'>{dict.prices}</Link>
                    <Link href="/booking" className='hover:cursor-pointer'>{dict.bookCaponier}</Link>
                    <Link href="/about" className='hover:cursor-pointer'>{dict.aboutPoligon}</Link>
                    <Link href="/about" className='hover:cursor-pointer'>{dict.safetyRules}</Link>
                    <Link href={{
                        pathname: '/prices',
                        query: {
                            giftCertificates: true
                        }
                    }} className='hover:cursor-pointer'>{dict.giftCertificate}</Link>
                </div>
                <div className='flex flex-row gap-8'>
                    <div className='flex flex-center'>
                        <Image src={phoneIcon} alt="icon phone" className='inline-block mr-[0.5rem]'></Image>
                        <span className={`text-body text-grey-200`}>{dict.contacts.phone}</span>
                     </div>
                    <div className='flex flex-center'>
                        <Image src={markerIcon} alt="icon marker" className='inline-block mr-[0.5rem]'></Image>
                        <span className={`text-body text-grey-200`}>{dict.contacts.address}</span>
                    </div>
                    <div className='flex flex-center'>
                        <Image src={calendarIcon} alt="icon calendar" className='inline-block mr-[0.5rem]'></Image>
                        <span className={`text-body text-grey-200`}>{dict.contacts.openHours}</span>
                    </div>
                </div>
                <div className='flex flex-row gap-8'>
                    <Image src={instagramIcon} width={32} height={32} alt="icon instagram" className='inline-block'></Image>
                    <Image src={telegramIcon} width={32} height={32} alt="icon telegram" className='inline-block'></Image>
                </div>
                <span className='extra-small-text-regular text-grey-200'>{dict.footerDisclaimer}</span>
            </div>
        </>
        
    )
}
