import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const AboutPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-heading",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }
    )

    gsap.fromTo(
      ".about-content",
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out"
      }
    )

    gsap.fromTo(
      ".skill-item",
      {
        opacity: 0,
        scale: 0.9
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: "back.out(1.7)"
      }
    )
  })

  return (
    <div className="col-span-1 lg:col-span-12 row-span-9 bg-black text-white rounded-lg overflow-hidden p-8">
      <div className="max-w-5xl mx-auto h-full overflow-scroll">
        <h1 className="about-heading text-5xl lg:text-5xl font-bold mb-6">
          About <span className="font-[Sperry]">Me</span>
        </h1>
        
        <div className="about-content space-y-6 text-lg font-light">
          <p>
            Hi! I'm Tanweel Akhtar, a passionate front-end developer with a keen eye for creating beautiful and functional web experiences. I specialize in building responsive, user-friendly websites and applications using modern web technologies.
          </p>
          
          <p>
            My journey in web development started with a curiosity for creating things that live on the internet. Since then, I've developed a strong foundation in HTML, CSS, and JavaScript, and I'm constantly learning new technologies to stay current with industry trends.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 uppercase">Technical <span className='font-[Sperry] tracking-wide'>Skills</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">HTML5</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">CSS3</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">JavaScript</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">React</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">GSAP</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">Node.js</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">Express</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">MongoDB</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">Git</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">Tailwind CSS</div>
            <div className="skill-item p-4 text-xs bg-white/5 rounded-lg text-center">Three.js</div>
          </div>

          <p className="mt-8">
            When I'm not coding, I enjoy exploring new web technologies, contributing to open-source projects, and staying updated with the latest developments in the tech world. I'm always open to new opportunities and collaborations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage