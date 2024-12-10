import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from 'react-router-dom'


const Contact = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".top",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    gsap.fromTo(
      ".bottom h1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
    )

    gsap.fromTo(
      ".arrow",
      { rotation: 45 },
      { rotation: 0, duration: 0.8, ease: "power2.inOut", yoyo: true }
    )
  })

  return (
    <div className='col-span-1 xl:col-span-4 row-span-8 lg:row-span-2 bg-black text-white rounded-lg'>
      <div className="w-full h-full flex flex-col justify-between items-start p-6 gap-4">
        <div className="top w-full flex items-center justify-between">
          <div className="flex flex-col">
            <p className='text-xs font-thin capitalize'>Have some</p>
            <p className='text-xs font-thin capitalize'>questions?</p>
          </div>
          <Link to="/contact" className="cursor-pointer"><img className='w-6 h-6 arrow' src="/images/ARROW.svg" alt="arrow" /></Link>
        </div>
        <div className="bottom">
          <h1 className='text-5xl md:text-7xl capitalize font-light font-[Sperry] tracking-wide'>Contact me</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
