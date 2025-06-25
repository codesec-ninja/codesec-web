import { motion } from 'framer-motion'
import Section from './Section'

const MDXLayout = ({ children, title, subtitle, className = "" }) => {
  return (
    <Section className={`pt-[12rem] -mt-[5.25rem] ${className}`}>
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <div className="text-center mb-12">
              <h1 className="h1 mb-6 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {title}
              </h1>
              {subtitle && (
                <p className="body-1 text-n-3 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-n-8/50 backdrop-blur-sm border border-n-6/30 rounded-2xl p-8 lg:p-12">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default MDXLayout