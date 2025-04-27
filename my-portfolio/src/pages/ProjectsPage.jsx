import Projects from '../components/sections/Projects'

const ProjectsPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <Projects />
      </div>
    </div>
  )
}

export default ProjectsPage