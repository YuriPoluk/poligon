import React from 'react'

export default function Button({ className, children, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button onClick={onClick} {...props} className={`py-4 rounded-[2.5rem] border-[4px] border-main-500 ` + className}>{children}</button>
  )
}
