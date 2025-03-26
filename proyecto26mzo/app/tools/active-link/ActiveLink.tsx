'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import style from './ActiveLInk.module.css'

export interface Props{
    path:string;
    text:string;
}

function ActiveLink({path,text}:Props) {
    
    const pathname = usePathname()
  return (
    <Link className={`${style.link}  ${style['active-link']} `} href={path} >
      {text}
    </Link>
  )
}

export default ActiveLink
