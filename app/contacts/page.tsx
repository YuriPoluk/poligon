'use client'
import { getDictionary } from '@/dictionaries';
import { Map } from '../../components'
import Image from 'next/image';
import phoneIcon from '@/public/icons/icon-phone.svg'
import markerIcon from '@/public/icons/icon-map-pin.svg'
import calendarIcon from '@/public/icons/icon-calendar.svg'
import telegramIcon from '@/public/icons/icon-telegram.svg'
import instagramIcon from '@/public/icons/icon-instagram-color.svg'
import { arkidenz } from '../fonts';

export default async function Page() {

  const dict = getDictionary('ua')

  return (
    <>
      <Map></Map>
      <div className='flex flex-row justify-around mt-[1.5rem]'>
        <div className='flex flex-col gap-[1rem] mr-6'>
          <h2 className={`${arkidenz.className} h4-bold text-grey-200`}>{dict.contacts.title}</h2>
          <div className='flex align-center'>
            <Image src={phoneIcon} alt="icon phone" className='inline-block mr-[0.5rem]'></Image>
            <span className={`${arkidenz.className} text-body text-grey-200`}>{dict.contacts.phone}</span>
          </div>
          <div className='flex align-center'>
            <Image src={markerIcon} alt="icon marker" className='inline-block mr-[0.5rem]'></Image>
            <span className={`${arkidenz.className} text-body text-grey-200`}>{dict.contacts.address}</span>
          </div>
          <div className='flex align-center'>
            <Image src={calendarIcon} alt="icon calendar" className='inline-block mr-[0.5rem]'></Image>
            <span className={`${arkidenz.className} text-body text-grey-200`}>{dict.contacts.openHours}</span>
          </div>
        </div>
        <div className='flex flex-col gap-[1rem]'>
          <h2 className={`${arkidenz.className} h4-bold text-grey-200`}>{dict.contacts.socials}</h2>
          <div className='flex flex-row align-center'>
            <Image src={telegramIcon} alt="icon telegram" width={32} height={32}></Image>
            <Image src={instagramIcon} alt="icon instagram" width={32} height={32} className='ml-4'></Image>
          </div>
        </div>
      </div>
    </>
  )
}
