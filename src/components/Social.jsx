import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Social = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".social-link",
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }
    )
  })

  return (
    <div className='col-span-1 xl:col-span-4 row-span-1 bg-black text-white rounded-lg'>
      <div className="w-full h-full flex justify-evenly items-center p-4 lg:p-0">
        <a className='text-xs lg:text-sm font-thin uppercase social-link' href="#">instagram</a>
        <a className='text-xs lg:text-sm font-thin uppercase social-link' href="#">linkedin</a>
        <a className='text-xs lg:text-sm font-thin uppercase social-link' href="#">github</a>
      </div>
    </div>
  )
}

export default Social
