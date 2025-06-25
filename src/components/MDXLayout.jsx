import { motion } from 'framer-motion'
import Section from './Section'

const MDXLayout = ({ children, title, subtitle, className = "" }) => {
  return (
    <Section className={`pt-[8rem] md:pt-[12rem] -mt-[5.25rem] ${className}`}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base md:text-lg lg:text-xl text-n-3 max-w-2xl mx-auto leading-relaxed px-4">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          <div className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
            <div className="bg-n-8/50 backdrop-blur-sm border border-n-6/30 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default MDXLayout