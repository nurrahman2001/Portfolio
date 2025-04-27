import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white dark:bg-gray-900 shadow-inner dark:shadow-gray-800">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl mb-4 md:mb-0">
                        <span>Nur Rahman</span>
                    </Link>

                    <div className="flex gap-6">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link to="/skills" className="hover:text-primary transition-colors">Skills</Link>
                        <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>

                </div>

                <div className=" flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
                    <div>
                        © {currentYear} Nur Rahman. All rights reserved.
                    </div>


                    <div className="mt-2">
                        <button
                            className="btn btn-primary "
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Back to Top ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer