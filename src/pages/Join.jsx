import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Shield, Mail, Lock, User, Upload, Tag } from 'lucide-react'
import { useAuth } from '../hooks/useAuth.jsx'
import { supabase } from '../lib/supabase'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import toast from 'react-hot-toast'

const Join = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState(null)
  const [selectedSkills, setSelectedSkills] = useState([])
  
  const { signUp, signIn, user } = useAuth()
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const skills = [
    'Penetration Testing', 'Threat Intelligence', 'Malware Analysis', 'Digital Forensics',
    'Network Security', 'Web Security', 'Mobile Security', 'Cloud Security',
    'AI/ML Security', 'Cryptography', 'Incident Response', 'Red Team',
    'Blue Team', 'DevSecOps', 'OSINT', 'Reverse Engineering'
  ]

  const handleAuth = async (data) => {
    setLoading(true)
    try {
      if (isSignUp) {
        const { error } = await signUp(data.email, data.password)
        if (error) throw error
        setStep(2)
        toast.success('Account created! Please complete your profile.')
      } else {
        const { error } = await signIn(data.email, data.password)
        if (error) throw error
        toast.success('Welcome back!')
        navigate('/community')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleProfile = async (data) => {
    setLoading(true)
    try {
      let avatarUrl = null
      
      // Upload avatar if provided
      if (avatar) {
        const fileExt = avatar.name.split('.').pop()
        const fileName = `${user.id}.${fileExt}`
        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(fileName, avatar, { upsert: true })
        
        if (!uploadError) {
          const { data: { publicUrl } } = supabase.storage
            .from('avatars')
            .getPublicUrl(fileName)
          avatarUrl = publicUrl
        }
      }

      // Create profile
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: data.fullName,
          bio: data.bio,
          skills: selectedSkills,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString()
        })

      if (error) throw error
      
      toast.success('Profile created successfully!')
      navigate('/community')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setAvatar(file)
    }
  }

  if (user && step === 1) {
    setStep(2)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8" glow>
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">
                {step === 1 ? (isSignUp ? 'Join CyberNinjas' : 'Welcome Back') : 'Complete Your Profile'}
              </h1>
              <p className="text-white/60">
                {step === 1 
                  ? (isSignUp ? 'Become part of the elite cybersecurity community' : 'Sign in to your account')
                  : 'Tell us about yourself and your skills'
                }
              </p>
            </div>

            {step === 1 ? (
              <form onSubmit={handleSubmit(handleAuth)} className="space-y-6">
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  error={errors.email?.message}
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  error={errors.password?.message}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  loading={loading}
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    {isSignUp 
                      ? 'Already have an account? Sign in' 
                      : "Don't have an account? Sign up"
                    }
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit(handleProfile)} className="space-y-6">
                {/* Avatar Upload */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <Avatar 
                      src={avatar ? URL.createObjectURL(avatar) : null}
                      size="xl"
                      fallback={watch('fullName')?.[0]?.toUpperCase()}
                    />
                    <label className="absolute bottom-0 right-0 bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 cursor-pointer transition-colors">
                      <Upload className="w-4 h-4 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <Input
                  label="Full Name"
                  placeholder="Your full name"
                  {...register('fullName', { required: 'Full name is required' })}
                  error={errors.fullName?.message}
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white/80">
                    Bio
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 resize-none"
                    rows={3}
                    placeholder="Tell us about yourself..."
                    {...register('bio')}
                  />
                </div>

                {/* Skills Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white/80">
                    Skills & Expertise
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          selectedSkills.includes(skill)
                            ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                            : 'bg-white/10 text-white/60 hover:bg-white/20'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  loading={loading}
                >
                  Complete Profile
                </Button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}

export default Join