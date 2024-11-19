import React from 'react'

const Potrait = () => {
  return (
    <div className='col-span-1 xl:col-span-3 row-span-5 bg-black rounded-lg'>
      <div className="w-full h-full flex justify-center items-center p-6 xl:p-0">
        <img src="/potrait.jpg" alt="potrait" className='w-64 h-64 object-cover rounded-lg' />
      </div>
    </div>
  )
}

export default Potrait
