import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const projects = [
  {
    id: 12,
    title: "Edicruit",
    description: "At EDICRUIT, we provide tailored strategies that unlock growth, optimize operations, and deliver measurable results.",
    tech: ["React", "Tailwind", "GSAP", "web3 Forms"],
    link: "https://edicruit.netlify.app/",
    image: "/images/edicruit.png"
  },
  {
    id: 11,
    title: "Employee Management System",
    description: "Comprehensive HR solution for managing employee data, attendance, and performance tracking",
    tech: ["React", "Tailwind", "Local Storage"],
    link: "https://github.com/TANWEELAKHTAR/employee-management-system",
    image: "/images/EMS.png"
  },
  {
    id: 10, 
    title: "Cyberfiction",
    description: "Futuristic 3D web experience showcasing cyberpunk-themed interactive animations",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "https://cyberfication.netlify.app",
    image: "/images/cyberfiction.png"
  },
  {
    id: 9,
    title: "Zajno",
    description: "Creative agency portfolio with stunning animations and interactive user experience",
    tech: ["HTML", "CSS", "JavaScript", "GSAP", "Three.js" ],
    link: "https://threejs-zajno.netlify.app",
    image: "/images/zajno.png"
  },
  {
    id: 8,
    title: "Two Good GO",
    description: "Social enterprise website with smooth animations and responsive design",
    tech: ["HTML", "CSS", "JavaScript", "GSAP" ],
    link: "https://github.com/TANWEELAKHTAR/",
    image: "/images/two good co.png"
  },
  {
    id: 7,
    title: "Planets",
    description: "Interactive 3D solar system explorer with detailed planet information and animations",
    tech: ["HTML", "Tailwind", "JavaScript", "GSAP", "Three.js" ],
    link: "https://threejs-planets.netlify.app/",
    image: "/images/earth.png"
  },
  {
    id: 6,
    title: "Inovact Talent Search",
    description: "AI-powered talent matching platform connecting companies with skilled professionals",
    tech: ["React", "Tailwind", "GSAP"],
    link: "https://inovacttalentlaunch.netlify.app",
    image: "/images/inovact.png"
  },
  {
    id: 5,
    title: "Friend Request",
    description: "A social networking application allowing users to connect by sending and accepting friend requests.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://letsgetfriends.netlify.app",
    image: "/images/friend request.png"
  },
  {
    id: 4,
    title: "Blobmixer",
    description: "Creative tool for generating and mixing unique blob animations with 3D effects",
    tech: ["HTML", "Tailwind", "javascript", "GSAP", "three.js"],
    link: "https://github.com/TANWEELAKHTAR/the-blobmixer",
    image: "/images/blobmixer.png"
  },
  {
    id: 3,
    title: "Deveb.co",
    description: "Web development agency portfolio with modern design and interactive elements",
    tech: ["HTML", "tailwind", "javascript", "GSAP", "three.js"],
    link: "https://threejs-deweb.netlify.app",
    image: "/images/deveb.co.png"
  },
  {
    id: 2,
    title: "Furni",
    description: "Furniture e-commerce website with clean design and smooth user experience",
    tech: ["HTML", "CSS"],
    link: "https://github.com/TANWEELAKHTAR/FURNI",
    image: "/images/furni.png"
  },
  {
    id: 1,
    title: "FAD",
    description: "Fashion and design portfolio showcasing creative works with elegant animations",
    tech: ["HTML", "CSS", "javascript"],
    link: "https://github.com/TANWEELAKHTAR/FAD",
    image: "/images/fad.png"
  }
]

const ProjectsPage = () => {
  useGSAP(() => {
    gsap.fromTo('.project-card',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      }
    )
  })

  return (
    <div className="col-span-1 lg:col-span-12 row-span-9 bg-black text-white rounded-lg">
    <div className="p-6 max-w-7xl mx-auto h-[calc(150vh-100px)] lg:h-full overflow-y-scroll">
        <h1 className="text-5xl font-bold mb-12">My <span className="font-[Sperry]">Projects</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="h-48 mb-4 bg-white/10 rounded-lg">
              <img src={project.image} alt={project.title} className="w-full h-full object-fit rounded-lg" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded capitalize">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage