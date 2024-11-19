import React from 'react'

const Header = () => {
  return (
    <div className='col-span-1 lg:col-span-12 row-span-1 bg-black text-white rounded-lg'>
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
