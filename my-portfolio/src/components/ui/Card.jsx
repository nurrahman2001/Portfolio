const Card = ({ children, className = '', ...props }) => {
    return (
      <div 
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${className}`} 
        {...props}
      >
        {children}
      </div>
    )
  }
  
  export default Card