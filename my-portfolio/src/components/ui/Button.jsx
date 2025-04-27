import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  as = 'button', 
  to, 
  href, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'px-6 py-2 rounded-lg font-medium transition-all duration-300'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-blue-600',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
  }
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  if (as === 'link' && to) {
    return (
      <Link to={to} className={allClasses} {...props}>
        {children}
      </Link>
    )
  }
  
  if (as === 'a' && href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  )
}

export default Button