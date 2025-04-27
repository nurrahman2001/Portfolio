const ProgressBar = ({ progress, color = 'bg-primary' }) => {
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    )
  }
  
  export default ProgressBar