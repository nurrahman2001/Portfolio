import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { MdLightMode } from "react-icons/md";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <span>Nur Rahman</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <MdLightMode className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
          
          <a href="#contact" className="hidden md:block btn btn-primary">
            Hire Me
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink 
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `font-medium py-2 transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header