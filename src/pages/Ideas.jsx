import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, ArrowUp, MessageCircle, Search } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth.jsx'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Avatar from '../components/ui/Avatar'
import toast from 'react-hot-toast'

const Ideas = () => {
  const [ideas, setIdeas] = useState([])
  const [filteredIdeas, setFilteredIdeas] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [upvotes, setUpvotes] = useState(new Set())
  const [submitting, setSubmitting] = useState(false)
  const [comments, setComments] = useState({})
  
  const { user } = useAuth()

  const tags = [
    'Security Research', 'AI/ML', 'Web Security', 'Network Security',
    'Mobile Security', 'Cloud Security', 'Cryptography', 'Tools',
    'Education', 'Community', 'Open Source'
  ]

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: []
  })

  useEffect(() => {
    fetchIdeas()
    if (user) {
      fetchUpvotes()
    }
  }, [user])

  useEffect(() => {
    filterIdeas()
  }, [ideas, searchTerm])

  const fetchIdeas = async () => {
    try {
      const { data, error } = await supabase
        .from('ideas')
        .select(`
          *,
          profiles (
            full_name,
            avatar_url
          )
        `)
        .order('upvotes_count', { ascending: false })

      if (error) throw error
      setIdeas(data || [])
      
      // Fetch comments count for each idea
      const commentsCount = {}
      for (const idea of data || []) {
        const { count } = await supabase
          .from('comments')
          .select('*', { count: 'exact', head: true })
          .eq('idea_id', idea.id)
        commentsCount[idea.id] = count || 0
      }
      setComments(commentsCount)
    } catch (error) {
      toast.error('Failed to load ideas')
    } finally {
      setLoading(false)
    }
  }

  const fetchUpvotes = async () => {
    try {
      const { data, error } = await supabase
        .from('upvotes')
        .select('idea_id')
        .eq('user_id', user.id)

      if (error) throw error
      setUpvotes(new Set(data.map(u => u.idea_id)))
    } catch (error) {
      console.error('Failed to load upvotes:', error)
    }
  }

  const filterIdeas = () => {
    let filtered = ideas

    if (searchTerm) {
      filtered = filtered.filter(idea =>
        idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredIdeas(filtered)
  }

  const handleUpvote = async (ideaId) => {
    if (!user) {
      toast.error('Please sign in to upvote ideas')
      return
    }

    try {
      const isUpvoted = upvotes.has(ideaId)
      
      if (isUpvoted) {
        const { error } = await supabase
          .from('upvotes')
          .delete()
          .eq('user_id', user.id)
          .eq('idea_id', ideaId)

        if (error) throw error
        setUpvotes(prev => {
          const newSet = new Set(prev)
          newSet.delete(ideaId)
          return newSet
        })
      } else {
        const { error } = await supabase
          .from('upvotes')
          .insert({
            user_id: user.id,
            idea_id: ideaId
          })

        if (error) throw error
        setUpvotes(prev => new Set([...prev, ideaId]))
      }

      // Update local idea upvotes count
      setIdeas(prev => prev.map(idea => 
        idea.id === ideaId 
          ? { ...idea, upvotes_count: idea.upvotes_count + (isUpvoted ? -1 : 1) }
          : idea
      ))
    } catch (error) {
      toast.error('Failed to update upvote status')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      toast.error('Please sign in to submit ideas')
      return
    }

    setSubmitting(true)
    try {
      const { error } = await supabase
        .from('ideas')
        .insert({
          ...formData,
          user_id: user.id
        })

      if (error) throw error
      
      toast.success('Idea submitted successfully!')
      setShowSubmitForm(false)
      setFormData({
        title: '',
        description: '',
        tags: []
      })
      fetchIdeas()
    } catch (error) {
      toast.error('Failed to submit idea')
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
          <p className="text-white/60">Loading ideas...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ideas Board
              </span>
            </h1>
            <p className="text-xl text-white/60">
              Share and discover innovative cybersecurity ideas
            </p>
          </div>
          {user && (
            <Button
              onClick={() => setShowSubmitForm(true)}
              className="mt-4 md:mt-0"
            >
              <Plus className="w-4 h-4 mr-2" />
              Share Idea
            </Button>
          )}
        </motion.div>

        {/* Search */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6">
            <Input
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </GlassCard>
        </motion.div>

        {/* Ideas List */}
        <div className="space-y-6">
          {filteredIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex space-x-4">
                  {/* Upvote Button */}
                  <div className="flex flex-col items-center space-y-1">
                    <button
                      onClick={() => handleUpvote(idea.id)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        upvotes.has(idea.id)
                          ? 'text-cyan-400 bg-cyan-500/20'
                          : 'text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                    >
                      <ArrowUp className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-medium text-white">
                      {idea.upvotes_count}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar 
                          src={idea.profiles?.avatar_url} 
                          fallback={idea.profiles?.full_name?.[0]?.toUpperCase()}
                        />
                        <div>
                          <div className="font-medium text-white text-sm">
                            {idea.profiles?.full_name || 'Anonymous'}
                          </div>
                          <div className="text-white/40 text-xs">
                            {new Date(idea.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">
                      {idea.title}
                    </h3>

                    {idea.description && (
                      <p className="text-white/60 mb-4 leading-relaxed">
                        {idea.description}
                      </p>
                    )}

                    {idea.tags && idea.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {idea.tags.map((tag) => (
                          <Badge key={tag} variant="primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center space-x-4 text-white/40 text-sm">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{comments[idea.id] || 0} comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-white/60 mb-2">
              No ideas found
            </h3>
            <p className="text-white/40">
              Be the first to share an innovative cybersecurity idea!
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
                  Share Your Idea
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Idea Title"
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
                      rows={6}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your idea in detail..."
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-white/80">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
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
                      Share Idea
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

export default Ideas