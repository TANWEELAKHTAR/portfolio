import React from 'react'

const Social = () => {
  return (
    <div className='col-span-1 xl:col-span-4 row-span-1 bg-black text-white rounded-lg'>
      <div className="w-full h-full flex justify-evenly items-center p-4 xl:p-0">
        <a className='text-xs font-thin uppercase' href="#">instagram</a>
        <a className='text-xs font-thin uppercase' href="#">linkedin</a>
        <a className='text-xs font-thin uppercase' href="#">github</a>
      </div>
    </div>
  )
}

export default Social
