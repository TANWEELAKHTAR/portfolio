import React from 'react'

const About = () => {
  return (
    <div className='col-span-1 lg:col-span-4 row-span-8 lg:row-span-2 bg-black text-white rounded-lg'>
      <div className="w-full h-full flex flex-col justify-between items-start gap-4 p-6">
        <img className='w-6 h-6' src="/CIRCLE ICON.svg" alt="circle" />
        <div className="content w-full flex flex-col">
          <p className='text-xs lg:text-sm font-extralight'>I specialize in designing sleek, intuitive websites that</p>
          <p className='text-xs lg:text-sm font-extralight'>prioritize user experience and modern aesthetics. My</p>
          <p className='text-xs lg:text-sm font-extralight'>focus is on crafting responsive, visually appealing</p>
          <p className='text-xs lg:text-sm font-extralight'></p>
        </div>
      </div>
    </div>
  )
}

export default About
