import { FaCode, FaServer, FaTools } from 'react-icons/fa'
import ProgressBar from '../ui/ProgressBar'
import { skills } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-sm text-primary font-bold text-center mb-4">SKILLS</h2>
        <h3 className="text-2xl font-bold text-center mb-8">My Technical Expertise</h3>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          I specialize in modern web technologies and frameworks, with a focus on 
          creating responsive, accessible, and performant applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory 
            icon={<FaCode />} 
            title="Frontend Development" 
            skills={skills.frontend}
            color="text-blue-500"
          />
          
          <SkillCategory 
            icon={<FaServer />} 
            title="Backend Development" 
            skills={skills.backend}
            color="text-green-500"
          />
          
          <SkillCategory 
            icon={<FaTools />} 
            title="Tools & Others" 
            skills={skills.tools}
            color="text-purple-500"
          />
        </div>
      </div>
    </section>
  )
}

const SkillCategory = ({ icon, title, skills, color }) => {
  return (
    <div className="card p-6">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${color} bg-opacity-10`}>
        <span className={color}>{icon}</span>
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <ProgressBar progress={skill.level} color={skill.color} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills