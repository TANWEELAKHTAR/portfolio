import React, { useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      ".desktop-links a",
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
  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
    
    if (!isOpen) {
      gsap.fromTo(
        ".mobile-menu",
        {
          x: "100%",
          opacity: 0
        },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      )
      
      gsap.fromTo(
        ".mobile-menu a",
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out"
        }
      )
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      })
    }
  }
  const handleClosing = () => {
    setIsOpen(false)
    gsap.to(".mobile-menu", {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.inout"
    })
  }  
  
  return (
    <div className='col-span-1 lg:col-span-12 row-span-1 bg-black text-white rounded-lg overflow-hidden'>
      <nav className='w-full h-full flex items-center justify-between p-6'>
        <h1 className='text-2xl md:text-3xl'>PORTFOLIO</h1>
        
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50"
          onClick={handleMenuToggle}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        <div className="desktop-links hidden md:flex gap-6">
          <Link to="/" className='text-sm font-thin uppercase hover:text-gray-300 transition-colors'>Home</Link>
          <Link to="/projects" className='text-sm font-thin uppercase hover:text-gray-300 transition-colors'>Projects</Link>
          <Link to="/about" className='text-sm font-thin uppercase hover:text-gray-300 transition-colors'>About</Link>
          <Link to="/contact" className='text-sm font-thin uppercase hover:text-gray-300 transition-colors'>Contact</Link>
        </div>

        <div className={`mobile-menu fixed top-0 right-0 z-10 h-screen w-full bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <Link onClick={handleClosing} to="/" className='text-xl font-thin uppercase'>Home</Link>
          <Link onClick={handleClosing} to="/projects" className='text-xl font-thin uppercase'>Projects</Link>
          <Link onClick={handleClosing} to="/about" className='text-xl font-thin uppercase'>About</Link>
          <Link onClick={handleClosing} to="/contact" className='text-xl font-thin uppercase'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
