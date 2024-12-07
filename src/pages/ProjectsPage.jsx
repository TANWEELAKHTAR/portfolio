import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/username/ecommerce"
  },
  {
    id: 2, 
    title: "3D Portfolio",
    description: "Interactive 3D portfolio website using Three.js and React",
    tech: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    link: "https://github.com/username/portfolio"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Weather forecasting app with interactive maps and real-time updates",
    tech: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    link: "https://github.com/username/weather-app"
  }
  ,
  {
    id: 4,
    title: "Task Manager",
    description: "Collaborative project management tool with drag-and-drop interface",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://github.com/username/task-manager"
  }
  ,
  {
    id: 5,
    title: "Recipe Finder",
    description: "Recipe search and meal planning application with nutrition tracking",
    tech: ["React", "Spoonacular API", "Firebase", "Material UI"],
    link: "https://github.com/username/recipe-finder"
  }
  ,
  {
    id: 6,
    title: "Movie Database",
    description: "Film and TV show discovery platform with personalized recommendations",
    tech: ["React", "TMDB API", "Styled Components", "Auth0"],
    link: "https://github.com/username/movie-db"
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
      <div className="p-8 max-w-7xl mx-auto max-h-[90vh] overflow-scroll">
        <h1 className="text-5xl font-bold mb-12">My <span className="font-[Sperry]">Projects</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="h-48 mb-4 bg-white/10 rounded-lg"></div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded">
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