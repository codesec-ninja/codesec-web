import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  loading = false,
  ...props 
}) => {
  const variants = {
    primary: 'bg-n-7 hover:bg-n-6 border border-n-6 hover:border-n-5 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white backdrop-blur-md',
    ghost: 'hover:bg-white/10 text-white/80 hover:text-white',
    danger: 'bg-red-600 hover:bg-red-700 border border-red-600 hover:border-red-700 text-white'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      className={`
        relative font-semibold rounded-xl transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </motion.button>
  )
}

export default Button