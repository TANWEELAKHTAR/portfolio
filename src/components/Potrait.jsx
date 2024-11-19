import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Potrait = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".potrait-img",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }
    )
  })

  return (
    <div className='col-span-1 lg:col-span-3 row-span-3 lg:row-span-3 bg-black rounded-lg'>
      <div className="w-full h-full flex justify-center items-center p-6 xl:p-0">
        <img src="/potrait.jpg" alt="potrait" className='potrait-img w-64 h-64 object-cover rounded-lg' />
      </div>
    </div>
  )
}

export default Potrait
