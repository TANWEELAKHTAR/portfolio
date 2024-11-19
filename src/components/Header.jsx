import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Header = () => {
  useGSAP(() => {
    gsap.fromTo(
      "nav h1",
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }
    )

    gsap.fromTo(
      ".links a",
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }
    )
  })

  return (
    <div className='col-span-1 lg:col-span-12 row-span-1 bg-black text-white rounded-lg overflow-hidden'>
      <nav className='w-full h-full flex items-center justify-between p-6'>
        <h1 className='text-2xl'>PORTFOLIO</h1>
        <div className="links md:flex gap-6 hidden">
          <a className='text-xs font-thin uppercase' href="#">Projects</a>
          <a className='text-xs font-thin uppercase' href="#">About</a>
          <a className='text-xs font-thin uppercase' href="#">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Header
