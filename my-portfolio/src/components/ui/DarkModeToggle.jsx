import {FaMoon } from 'react-icons/fa'
import { MdLightMode } from "react-icons/md";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <MdLightMode className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-600" />
      )}
    </button>
  )
}

export default DarkModeToggle