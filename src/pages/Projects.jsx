import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Heart, ExternalLink, Github, Filter } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth.jsx'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Avatar from '../components/ui/Avatar'
import toast from 'react-hot-toast'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [likes, setLikes] = useState(new Set())
  const [submitting, setSubmitting] = useState(false)
  
  const { user } = useAuth()

  const tags = [
    'All', 'ML', 'Open Source', 'Security Tools', 'Web Security', 
    'Network Security', 'Malware Analysis', 'Penetration Testing',
    'Threat Intelligence', 'Cryptography', 'AI Security'
  ]

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    repo_url: '',
    demo_url: ''
  })

  useEffect(() => {
    fetchProjects()
    if (user) {
      fetchLikes()
    }
  }, [user])

  useEffect(() => {
    filterProjects()
  }, [projects, searchTerm, selectedTag])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          profiles (
            full_name,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  const fetchLikes = async () => {
    try {
      const { data, error } = await supabase
        .from('likes')
        .select('project_id')
        .eq('user_id', user.id)

      if (error) throw error
      setLikes(new Set(data.map(l => l.project_id)))
    } catch (error) {
      console.error('Failed to load likes:', error)
    }
  }

  const filterProjects = () => {
    let filtered = projects

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedTag && selectedTag !== 'All') {
      filtered = filtered.filter(project =>
        project.tags?.includes(selectedTag)
      )
    }

    setFilteredProjects(filtered)
  }

  const handleLike = async (projectId) => {
    if (!user) {
      toast.error('Please sign in to like projects')
      return
    }

    try {
      const isLiked = likes.has(projectId)
      
      if (isLiked) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('user_id', user.id)
          .eq('project_id', projectId)

        if (error) throw error
        setLikes(prev => {
          const newSet = new Set(prev)
          newSet.delete(projectId)
          return newSet
        })
      } else {
        const { error } = await supabase
          .from('likes')
          .insert({
            user_id: user.id,
            project_id: projectId
          })

        if (error) throw error
        setLikes(prev => new Set([...prev, projectId]))
      }

      // Update local project likes count
      setProjects(prev => prev.map(project => 
        project.id === projectId 
          ? { ...project, likes_count: project.likes_count + (isLiked ? -1 : 1) }
          : project
      ))
    } catch (error) {
      toast.error('Failed to update like status')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      toast.error('Please sign in to submit projects')
      return
    }

    setSubmitting(true)
    try {
      const { error } = await supabase
        .from('projects')
        .insert({
          ...formData,
          user_id: user.id
        })

      if (error) throw error
      
      toast.success('Project submitted successfully!')
      setShowSubmitForm(false)
      setFormData({
        title: '',
        description: '',
        tags: [],
        repo_url: '',
        demo_url: ''
      })
      fetchProjects()
    } catch (error) {
      toast.error('Failed to submit project')
    } finally {
      setSubmitting(false)
    }
  }

  const toggleTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Community Projects
              </span>
            </h1>
            <p className="text-xl text-white/60">
              Discover and share cybersecurity tools and research projects
            </p>
          </div>
          {user && (
            <Button
              onClick={() => setShowSubmitForm(true)}
              className="mt-4 md:mt-0"
            >
              <Plus className="w-4 h-4 mr-2" />
              Submit Project
            </Button>
          )}
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === 'All' ? '' : tag)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      (selectedTag === tag) || (tag === 'All' && !selectedTag)
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar 
                      src={project.profiles?.avatar_url} 
                      fallback={project.profiles?.full_name?.[0]?.toUpperCase()}
                    />
                    <div>
                      <div className="font-medium text-white text-sm">
                        {project.profiles?.full_name || 'Anonymous'}
                      </div>
                      <div className="text-white/40 text-xs">
                        {new Date(project.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLike(project.id)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-all duration-300 ${
                      likes.has(project.id)
                        ? 'text-red-400 bg-red-500/20'
                        : 'text-white/60 hover:text-red-400 hover:bg-red-500/10'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likes.has(project.id) ? 'fill-current' : ''}`} />
                    <span className="text-sm">{project.likes_count}</span>
                  </button>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="text-white/60 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex space-x-2 mt-auto">
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="secondary" size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white/60 mb-2">
              No projects found
            </h3>
            <p className="text-white/40">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Submit Form Modal */}
        {showSubmitForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-2xl"
            >
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Submit Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Project Title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/80">
                      Description
                    </label>
                    <textarea
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 resize-none"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your project..."
                    />
                  </div>

                  <Input
                    label="Repository URL"
                    type="url"
                    value={formData.repo_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, repo_url: e.target.value }))}
                    placeholder="https://github.com/username/repo"
                  />

                  <Input
                    label="Demo URL (Optional)"
                    type="url"
                    value={formData.demo_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, demo_url: e.target.value }))}
                    placeholder="https://your-demo.com"
                  />

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-white/80">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tags.slice(1).map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                            formData.tags.includes(tag)
                              ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                              : 'bg-white/10 text-white/60 hover:bg-white/20'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setShowSubmitForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      loading={submitting}
                      className="flex-1"
                    >
                      Submit Project
                    </Button>
                  </div>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects