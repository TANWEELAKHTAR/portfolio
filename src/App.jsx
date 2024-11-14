import React from 'react'
import Header from './components/Header'
import SloganIntro from './components/SloganIntro'
import Potrait from './components/Potrait'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Social from './components/Social'

const App = () => {
  
  return (
    <main className='grid min-h-screen grid-cols-12 grid-rows-10 gap-4 p-4 bg-[#111] font-[Gilroy]'>
      <Header/>
      <SloganIntro/>
      <Potrait/>
      <Work/>
      <About/>
      <Contact/>  
      <Social/>
    </main>
  )
}

export default App
