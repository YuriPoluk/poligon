import React, { ReactNode } from 'react'
import { arkidenz } from '@/app/fonts'


export default function MapLabel({...params}: { number: string, children: ReactNode, className?: string, handler: () => void, style: any}) {
  return (
    <button style={params.style} className={`px-4 py-2 rounded-3xl bg-white/[0.2] small-text-regular ${arkidenz.className} backdrop-blur-lg text-white text-[0.875rem] hover:bg-white hover:border-2 hover:border-main-400 hover:text-black-900 hover:font-bold -translate-x-1/2 -translate-y-1/2 ${params.className}
    before:absolute before:bg-white/[0.4] before:backdrop-blur-lg before:w-[2px] before:h-10 before:top-[47px] before:left-[50%] before:translate-x-[-50%]` } onClick={params.handler} >
        <span className='font-bold'>{params.number}</span>
        <span className='pl-1'>{params.children}</span>
    </button>
  )
}