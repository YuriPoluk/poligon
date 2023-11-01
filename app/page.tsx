'use client'
import PoligonMap from '@/components/PoligonMap'
import Button from '@/components/Button'
import { getDictionary } from '../dictionaries'
import { Carousel } from '@material-tailwind/react'
import React, { useRef } from 'react';
import Link from 'next/link'


export default function Page() {
  const dict = getDictionary('ua')
  const mapRef = useRef<HTMLDivElement>(null);

  function scrollToMap() {
    mapRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className='w-full'>
      <div className='flex flex-center min-h-[calc(100vh-10rem)] max-h-[calc(100vh-10rem)] relative'>
        <img src='/image_5.png' alt='img' className='rounded-3xl absolute h-[calc(100vh-10rem)] z-0 top-0 w-[93%] object-cover brightness-[0.55]'></img>
        <div>
          <p className={`h1-bold text-gray-200 z-40 relative max-w-[25ch] text-center mx-auto w-[93%]`}>
            {dict.landingTitle}
          </p>
          <Button onClick={scrollToMap} className={`z-40 relative bg-main-400 hover:bg-main-500 hover:text-white px-8 mx-auto mt-10 block button-text`}>{dict.buttons.book}</Button>
        </div>
      </div>
      
      <div ref={mapRef} className='mt-24'></div>
      <PoligonMap className='mt-24'></PoligonMap>
      <Carousel className='rounded-xl h-[37rem] mt-10 w-[93%] mx-auto' autoplay={false} autoplayDelay={3000} loop>
        <div className='relative w-full h-full'>
          <img
          src="/3.png"
          alt="image 4"
          className="h-full w-full object-cover rounded-3xl brightness-[0.6]"
          />
          <div className='flex flex-col items-start m-x-0 m-y-auto absolute left-[10rem] top-1/2 -translate-y-1/2'>
            <p className={`text-grey-200 h3-bold text-left w-[16ch]`}>{dict.landingSlider.events}</p>
            <Link
              href={{
                pathname: '/prices',
                query: {
                  corporateEvents: true
                }
              }}
            >
              <Button className={`z-40 bg-main-400 hover:bg-main-500 hover:text-white px-6 button-text-small mt-8 block`}>{dict.buttons.details}</Button>
            </Link>
          </div>
        </div>
        <div className='relative w-full h-full'>
          <img
          src="/4.png"
          alt="image 4"
          className="h-full w-full object-cover rounded-3xl brightness-[0.6]"
          />
          <div className='flex flex-col items-start m-x-0 m-y-auto absolute left-[10rem] top-1/2 -translate-y-1/2'>
            <p className={`text-grey-200 h3-bold text-left w-[16ch]`}>{dict.landingSlider.gifts}</p>
            <Link
              href={{
                pathname: '/prices',
                query: {
                  giftCertificates: true
                }
              }}
            >
              <Button className={`z-40 bg-main-400 hover:bg-main-500 hover:text-white px-6 button-text-small mt-8 block`}>{dict.buttons.details}</Button>
            </Link>          </div>
        </div>
        <div className='relative w-full h-full'>
          <img
          src="/4.png"
          alt="image 4"
          className="h-full w-full object-cover rounded-3xl brightness-[0.6]"
          />
          <div className='flex flex-col items-start m-x-0 m-y-auto absolute left-[10rem] top-1/2 -translate-y-1/2'>
            <p className={`text-grey-200 h3-bold text-left w-[16ch]`}>{dict.landingSlider.discount}</p>
            <span className={`text-grey-200 body-text text-left`}>{dict.landingSlider.discountDisclaimer}</span>
            {/* <Button className={`z-40 bg-main-400 hover:bg-main-500 hover:text-white px-6 button-text-small mt-8 block`}>{dict.buttons.details}</Button> */}
          </div>
        </div>
      </Carousel>
    </div>
      
  )
}
