import { motion } from 'framer-motion'

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false,
  ...props 
}) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl
        ${glow ? 'shadow-2xl shadow-cyan-500/20' : 'shadow-xl'}
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/30' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl -z-10" />
      )}
      {children}
    </motion.div>
  )
}

export default GlassCard