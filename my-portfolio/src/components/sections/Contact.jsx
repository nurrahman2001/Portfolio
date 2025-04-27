import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_ccuwb0j',   // EmailJS service ID
      'template_8wisg9o',  // EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'EyQ-gWaakUUkpT0Iv'    // EmailJS public key
    )
    .then(
      (result) => {
        console.log('Email sent successfully:', result.text)
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      },
      (error) => {
        console.error('Failed to send email:', error.text)
        alert('Oops! Something went wrong. Please try again.')
      }
    )
  }

  return (
    <section id="contact" className="section-padding bg-secondary dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-sm text-primary font-bold text-center mb-4">CONTACT</h2>
        <h3 className="text-2xl font-bold text-center mb-8">Get In Touch</h3>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="card p-6 h-full flex flex-col">
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className="font-medium">Email</h5>
                    <a href='mailto:contact.nurrahman@gmail.com' className="text-gray-600 dark:text-gray-400 hover:text-primary hover:underline">contact.nurrahman@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h5 className="font-medium">Location</h5>
                    <p className="text-gray-600 dark:text-gray-400">Guwahati, Assam, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h5 className="font-medium">Work Status</h5>
                    <p className="text-gray-600 dark:text-gray-400">Available for Freelance and Full-time</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-medium mb-4">Social Media</h5>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/nurrahman2001" 
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://linkedin.com/in/nur-rahman-418991214" 
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
