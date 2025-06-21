import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Tag, Search, Plus } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth.jsx'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Avatar from '../components/ui/Avatar'
import toast from 'react-hot-toast'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  
  const { user } = useAuth()

  const tags = [
    'All', 'Security Research', 'AI/ML Security', 'Web Security', 
    'Network Security', 'Malware Analysis', 'Penetration Testing',
    'Threat Intelligence', 'Cryptography', 'Tutorials', 'News'
  ]

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    filterPosts()
  }, [posts, searchTerm, selectedTag])

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          profiles (
            full_name,
            avatar_url
          )
        `)
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      toast.error('Failed to load blog posts')
    } finally {
      setLoading(false)
    }
  }

  const filterPosts = () => {
    let filtered = posts

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedTag && selectedTag !== 'All') {
      filtered = filtered.filter(post =>
        post.tags?.includes(selectedTag)
      )
    }

    setFilteredPosts(filtered)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CyberNinjas Blog
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Latest insights, research, and tutorials from the cybersecurity community
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search articles..."
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

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="overflow-hidden" glow>
              <div className="md:flex">
                {filteredPosts[0].image_url && (
                  <div className="md:w-1/2">
                    <img
                      src={filteredPosts[0].image_url}
                      alt={filteredPosts[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                )}
                <div className={`p-8 ${filteredPosts[0].image_url ? 'md:w-1/2' : 'w-full'}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar 
                      src={filteredPosts[0].profiles?.avatar_url} 
                      fallback={filteredPosts[0].profiles?.full_name?.[0]?.toUpperCase()}
                    />
                    <div>
                      <div className="font-medium text-white text-sm">
                        {filteredPosts[0].profiles?.full_name || 'Anonymous'}
                      </div>
                      <div className="flex items-center text-white/40 text-xs space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(filteredPosts[0].created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {filteredPosts[0].title}
                  </h2>

                  {filteredPosts[0].excerpt && (
                    <p className="text-white/60 mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                  )}

                  {filteredPosts[0].tags && filteredPosts[0].tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {filteredPosts[0].tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <Button>
                    Read Article
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <GlassCard className="h-full overflow-hidden group cursor-pointer">
                {post.image_url && (
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar 
                      src={post.profiles?.avatar_url} 
                      fallback={post.profiles?.full_name?.[0]?.toUpperCase()}
                      size="sm"
                    />
                    <div>
                      <div className="font-medium text-white text-sm">
                        {post.profiles?.full_name || 'Anonymous'}
                      </div>
                      <div className="flex items-center text-white/40 text-xs space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-white/60 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="primary">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="default">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-white/60 mb-2">
              No articles found
            </h3>
            <p className="text-white/40">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <GlassCard className="p-8 text-center" glow>
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Get the latest cybersecurity insights and research delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog