const Badge = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  const variants = {
    default: 'bg-white/10 text-white/80 border-white/20',
    primary: 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
    success: 'bg-green-500/20 text-green-300 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    danger: 'bg-red-500/20 text-red-300 border-red-500/30'
  }

  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
      border backdrop-blur-md
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  )
}

export default Badge