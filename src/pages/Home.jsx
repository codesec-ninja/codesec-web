import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Users, Code, Brain, ArrowRight, Github, Twitter, Disc as Discord } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Cybersecurity Focus',
      description: 'Advanced threat detection, penetration testing, and security research'
    },
    {
      icon: Brain,
      title: 'AI-Powered Security',
      description: 'Machine learning models for threat intelligence and automated defense'
    },
    {
      icon: Code,
      title: 'Open Source Tools',
      description: 'Community-driven security tools and frameworks for everyone'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with security professionals and researchers worldwide'
    }
  ]

  const stats = [
    { number: '5,000+', label: 'Active Members' },
    { number: '200+', label: 'Open Source Projects' },
    { number: '50+', label: 'Security Tools' },
    { number: '24/7', label: 'Community Support' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="max-w-4xl mx-auto p-12" glow>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Join the CyberNinjas
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Protect the Digital World
              </p>
              
              <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
                Unite with elite cybersecurity professionals, AI researchers, and ethical hackers. 
                Build cutting-edge security tools, share threat intelligence, and defend the digital frontier together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button size="lg" className="group">
                    Join Community
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="secondary" size="lg">
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 text-cyan-400/20"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Shield className="w-12 h-12" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 text-purple-400/20"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Brain className="w-16 h-16" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-1/3 text-cyan-400/20"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Code className="w-10 h-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Why Join CyberNinjas?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Be part of the most advanced cybersecurity community in the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <GlassCard className="p-8 h-full">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center" glow>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Become a CyberNinja?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Join thousands of security professionals building the future of cybersecurity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/join">
                <Button size="lg">
                  Join Now - It's Free
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="secondary" size="lg">
                  Meet the Community
                </Button>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 border-t border-white/10">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Discord className="w-6 h-6" />
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}

export default Home