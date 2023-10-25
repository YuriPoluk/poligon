'use client'
import Image from 'next/image'
import {Button, PoligonMap} from '../components'
import { arkidenz, space_grotesk } from './fonts'
import { getDictionary } from '../dictionaries'
import { Carousel } from '@material-tailwind/react'
import { useRef } from 'react';

export default async function Page() {
  const dict = getDictionary('ua')
  const mapRef = useRef<HTMLDivElement>(null);

  function scrollToMap() {
    mapRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className='w-full relative'>
      <img src='/image_5.png' alt='img' className='rounded-3xl absolute top-[7.8rem] z-0 w-full h-[75vh] object-cover brightness-[0.65]'></img>
      <p className={`h1-bold text-gray-200 z-40 relative max-w-[25ch] text-center mx-auto ${arkidenz.className} `}>
        {dict.landingTitle}
      </p>
      <Button onClick={scrollToMap} className={`z-40 relative bg-main-400 hover:bg-main-500 hover:text-white px-8 mx-auto mt-10 block button-text ${space_grotesk.className}`}>{dict.buttons.book}</Button>
      <div ref={mapRef} className='mt-[50vh]'></div>
      <PoligonMap className='mt-[50vh]'></PoligonMap>
      <Carousel className='rounded-xl h-[37rem] mt-10' autoplay={false} autoplayDelay={3000} loop>
        <div className='relative w-full h-full'>
          <img
          src="/3.png"
          alt="image 4"
          className="h-full w-full object-cover"
          />
          <div className='flex flex-col items-start m-x-0 m-y-auto absolute left-[10rem] top-1/2 -translate-y-1/2'>
            <p className={`text-grey-200 ${arkidenz.className} h3-bold text-left w-[16ch]`}>{dict.landingSlider.events}</p>
            <Button className={`z-40 bg-main-400 hover:bg-main-500 hover:text-white px-6 button-text-small mt-8 block ${space_grotesk.className}`}>{dict.buttons.details}</Button>
          </div>
        </div>
        <div className='relative w-full h-full'>
          <img
          src="/4.png"
          alt="image 4"
          className="h-full w-full object-cover"
          />
          <div className='flex flex-col items-start m-x-0 m-y-auto absolute left-[10rem] top-1/2 -translate-y-1/2'>
            <p className={`text-grey-200 ${arkidenz.className} h3-bold text-left w-[16ch]`}>{dict.landingSlider.gifts}</p>
            <Button className={`z-40 bg-main-400 hover:bg-main-500 hover:text-white px-6 button-text-small mt-8 block ${space_grotesk.className}`}>{dict.buttons.details}</Button>
          </div>
        </div>
      </Carousel>
    </div>
      
  )
}
