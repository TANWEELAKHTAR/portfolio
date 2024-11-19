import React from 'react'

const Header = () => {
  return (
    <nav className='col-span-1 xl:col-span-12 row-span-1 bg-black text-white rounded-lg'>
      <div className='w-full h-full flex items-center justify-between p-6'>
        <h1 className='text-2xl'>PORTFOLIO</h1>
        <div className="links md:flex gap-6 hidden">
          <a className='text-xs font-thin uppercase' href="#">Projects</a>
          <a className='text-xs font-thin uppercase' href="#">About</a>
          <a className='text-xs font-thin uppercase' href="#">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
