import React from 'react'

const About = () => {
  return (
    <div className='col-span-2 md:col-span-4 lg:col-span-4 row-span-5 bg-black text-white rounded-lg'>
      <div className="w-full h-full flex flex-col justify-between items-start p-6">
        <img className='w-6 h-6' src="/CIRCLE ICON.svg" alt="circle" />
        <div className="content w-full flex flex-col">
          <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</p>
          <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</p>
          <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</p>
          <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  )
}

export default About
