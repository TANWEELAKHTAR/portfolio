import React from 'react'

const Contact = () => {
  return (
    <div className='col-span-1 xl:col-span-4 row-span-8 xl:row-span-5 bg-black text-white rounded-lg'>
      <div className="w-full h-full flex flex-col justify-between items-start p-6 cursor-pointer gap-4">
        <div className="top w-full flex items-center justify-between">
          <div className="flex flex-col">
            <p className='text-xs font-thin capitalize'>Have some</p>
            <p className='text-xs font-thin capitalize'>questions?</p>
          </div>
          <img className='w-6 h-6' src="/ARROW.svg" alt="arrow" />
        </div>
        <div className="bottom">
          <h1 className='text-4xl'>Contact me</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
