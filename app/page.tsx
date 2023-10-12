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
      <p className={`text-[4rem] text-white z-40 relative max-w-[25ch] text-center mx-auto ${arkidenz.className} font-bold leading-[105%] uppercase text-gray-200`}>
        {dict.landingTitle}
      </p>
      <Button onClick={scrollToMap} className={`pt-[2.5rem] z-40 relative bg-military-green-400 hover:bg-military-green-500 hover:text-white px-8 text-xl font-bold uppercase mx-auto mt-10 block ${space_grotesk.className}`}>{dict.buttons.book}</Button>
      <div ref={mapRef} className='mt-[50vh]'></div>
      <PoligonMap className='mt-[50vh]'></PoligonMap>
      <Carousel className='rounded-xl h-[37rem] mt-8' autoplay={false} autoplayDelay={3000} loop>
        <div className='relative w-full h-full'>
          <img
          src="/3.png"
          alt="image 4"
          className="h-full w-full object-cover"
          />
          <div className='flex flex-col items-start m-x-0 m-y-auto absolute left-[10rem] top-1/2 -translate-y-1/2'>
            <p className={`text-white ${arkidenz.className} text-[2.5rem]
             text-left font-bold uppercase leading-[3rem] w-[16ch]`}>{dict.landingSlider.events}</p>
            <Button className={`pt-[2.5rem] z-40 bg-military-green-400 hover:bg-military-green-500 hover:text-white px-6 text-base font-bold uppercase mt-8 block ${space_grotesk.className}`}>{dict.buttons.details}</Button>
          </div>
        </div>
        <div className='relative w-full h-full'>
          <img
          src="/4.png"
          alt="image 4"
          className="h-full w-full object-cover"
          />
          <div className='flex flex-col items-start m-x-0 m-y-auto absolute left-[10rem] top-1/2 -translate-y-1/2'>
            <p className={`text-white ${arkidenz.className} text-[2.5rem]
             text-left font-bold uppercase leading-[3rem] w-[16ch]`}>{dict.landingSlider.gifts}</p>
            <Button className={`pt-[2.5rem] z-40 bg-military-green-400 hover:bg-military-green-500 hover:text-white px-6 text-base font-bold uppercase mt-8 block ${space_grotesk.className}`}>{dict.buttons.details}</Button>
          </div>
        </div>
      </Carousel>
    </div>
      
  )
}
