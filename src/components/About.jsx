import React from 'react'

const About = () => {
  return (
    <div className='col-span-1 lg:col-span-4 row-span-8 lg:row-span-5 bg-black text-white rounded-lg'>
      <div className="w-full h-full flex flex-col justify-between items-start gap-4 p-6">
        <img className='w-6 h-6' src="/CIRCLE ICON.svg" alt="circle" />
        <div className="content w-full flex flex-col">
          <p className='text-xs font-extralight'>Lorem ipsum dolor amet.Lorem ipsum dolor sit amet</p>
          <p className='text-xs font-extralight'>Lorem ipsum dolor amet.Lorem ipsum dolor sit amet</p>
          <p className='text-xs font-extralight'>Lorem ipsum dolor amet.Lorem ipsum dolor sit amet</p>
          <p className='text-xs font-extralight'>Lorem ipsum dolor amet.Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  )
}

export default About
