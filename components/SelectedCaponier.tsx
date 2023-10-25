'use client'

import React from 'react'
import Image from 'next/image'
import { space_grotesk, arkidenz } from '@/app/fonts'
import { Button } from '.'
import caponier1 from '../public/1.jpg'
import caponier2 from '../public/2.jpg'
import { CAPONIERS } from '@/constants'
import { getDictionary } from '@/dictionaries'

const IMAGE_MAP = {
    baghdad: caponier1,
    kabul: caponier2,
    rio: caponier1,
    acropolis: caponier2,
    jerusalem: caponier1,
    kansas: caponier2
}

export default function SelectedCaponier({caponier}: {caponier: keyof typeof CAPONIERS}) {
    const dict = getDictionary('ua')
    return (
        <div className='text-white z-10'>
            <div className='flex justify-between gap-6'>
                {Object.values(CAPONIERS).map(c => 
                    <div key={c} className={`relative m-auto ${caponier === c ? 'brightness-100' : 'brightness-[.4]'}`}>
                        <Image src={IMAGE_MAP[c]} alt="map" width={240} height={240} className={`rounded-3xl mx-auto`}/>
                        <span className={`text-[3.5rem] leading-none absolute top-4 left-4 font-bold ${arkidenz.className}`}>{dict.caponiers[c].number}</span>
                        <p className={`text-[1.3rem] font-normal ${arkidenz.className} ${caponier === c ? 'visible' : 'invsible'} text-center uppercase mt-4`}>{dict.caponiers[c].name}</p>
                        <p className={`text-[1.3rem] font-normal ${arkidenz.className} ${caponier === c ? 'visible' : 'invsible'} text-center uppercase opacity-40`}>{dict.caponiers[c].length}</p>
                    </div>)}
            </div>
            <Button className={`z-40 relative mx-auto mt-6 block ${space_grotesk.className} px-6 button-text-small bg-white text-black-900 hover:text-main-500`}>
                {dict.buttons.chooseThis}
            </Button>
        </div>
  )
}
