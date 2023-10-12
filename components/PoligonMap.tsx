'use client'
import React, { LegacyRef, useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import MapLabel from './MapLabel'
import SelectedCaponier from './SelectedCaponier'
import { CAPONIERS, MAP_LABELS } from '@/constants'
import { getDictionary } from '@/dictionaries'

export default function Map({className, ref}: {className: string, ref?: LegacyRef<HTMLDivElement>}) {
  const dict = getDictionary('ua')
  const [caponier, setCaponier] = useState<keyof typeof CAPONIERS>(CAPONIERS.kabul)
  return (
    <>
      <div className={`relative ${className}`}>
          <img src="/map.png" alt="map" className='brightness-50 w-full h-[50vh] object-fit'></img>
          {Object.values(CAPONIERS).map(caponier => 
            <MapLabel className='absolute' key={caponier} style={{top: MAP_LABELS[caponier].top + '%', left: MAP_LABELS[caponier].left + '%'}} number={dict.caponiers[caponier].number} handler={() => setCaponier(caponier)}>{dict.caponiers[caponier].name}</MapLabel> 
          )}
      </div>
      <SelectedCaponier caponier={caponier}/>
    </>
  )
}
