import { space_grotesk } from '@/app/fonts'
import React, { ReactNode } from 'react'

export default function Button({ className, children, onClick }: { className?: string, children?: ReactNode | string, onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`py-4 rounded-[2.5rem] border-[1px] border-military-green-500 uppercase leading-none` + className}>{children}</button>
  )
}