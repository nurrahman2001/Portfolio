import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/projects'

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3)
  
  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 3)
  }
  
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-primary text-sm font-bold text-center mb-4">PROJECTS</h2>
        <h3 className="text-2xl font-bold text-center mb-8">Featured Work</h3>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          Take a look at some of my recent projects that showcase my skills and 
          experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <button 
              className="btn btn-outline"
              onClick={showMoreProjects}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="card overflow-hidden group shadow-lg">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.demo} 
            className="btn btn-primary flex items-center gap-1 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo <FaExternalLinkAlt size={12} />
          </a>
          <a 
            href={project.github} 
            className="btn flex items-center gap-1 text-gray-800 border  hover:bg-gray-100 transition-colors dark:text-primary dark:hover:bg-primary dark:hover:text-white dark:border-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub <FaGithub size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects