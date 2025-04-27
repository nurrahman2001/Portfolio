import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-primary font-medium mb-2">FULL STACK DEVELOPER</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nur Rahman</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I build exceptional and accessible digital experiences for the web.
              I utilize modern JavaScript frameworks to create performant
              and beautiful user interfaces as well as smooth server
              functionalities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="#contact" className="btn btn-primary">
                Contact Me
              </Link>
              <Link to="/projects" className="btn btn-outline">
                See My Work
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative rotate-[10deg]">
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg  max-w-md mx-auto -rotate-[10deg]">
                <img 
                  src="/assets/images/banner.avif" 
                  alt="Nur Rahman coding on a laptop" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero