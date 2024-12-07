import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SloganIntro from './components/SloganIntro'
import Potrait from './components/Potrait'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Social from './components/Social'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'


const App = () => {
  return (
    <Router>
      <main className='grid min-h-screen lg:max-h-screen  grid-cols-1 lg:grid-cols-12 grid-rows-10 lg:grid-rows-6 gap-4 p-4 bg-[#111] font-[Gilroy]'>
        <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <SloganIntro/>
              <Potrait/>
              <Work/>
              <About/>
              <Contact/>
              <Social/>
            </>
          } />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
