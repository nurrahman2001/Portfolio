import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="bg-secondary dark:bg-gray-700 rounded-2xl">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt="Nur Rahman" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-sm text-primary font-normal text-primary uppercase mb-2">ABOUT ME</h2>
            <h3 className="text-3xl font-bold mb-6">Passionate About Creating Exceptional Web Experiences</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a full-stack developer with a passion for building beautiful, functional, and 
              user-centered digital experiences. I began my journey as a web developer in 
              college, and since then I've continued to grow and evolve as a developer, taking on 
              new challenges and learning the latest technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My expertise spans across HTML, CSS, JavaScript, and React, allowing me to 
              create responsive and dynamic web applications. I believe in writing clean, 
              maintainable code and producing well-structured and performing web 
              experiences in everything I build.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you'll find me exploring new hiking trails, experimenting 
              with new recipes in the kitchen, or attending local tech meetups. I'm always open to 
              connecting with like-minded individuals!
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Education</h4>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FaGraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <h5 className="font-medium">B.Tech in Computer Science & Engineering</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tech University • 2024</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FaGraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <h5 className="font-medium">Higher Secondary Education</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lakshminath Bezbaruah Academy • 2020</p>
                </div>
              </div>
            </div>
            
            <a href="/assets/resume.pdf" className="btn btn-primary mt-8 inline-block _blank">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About