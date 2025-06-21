import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Users, Heart, Github, Twitter, MapPin } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import toast from 'react-hot-toast'

const Community = () => {
  const [members, setMembers] = useState([])
  const [filteredMembers, setFilteredMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSkill, setSelectedSkill] = useState('')
  const [follows, setFollows] = useState(new Set())
  
  const { user } = useAuth()

  const skills = [
    'All', 'Penetration Testing', 'Threat Intelligence', 'Malware Analysis', 
    'Digital Forensics', 'Network Security', 'Web Security', 'Mobile Security',
    'Cloud Security', 'AI/ML Security', 'Cryptography', 'Incident Response'
  ]

  useEffect(() => {
    fetchMembers()
    if (user) {
      fetchFollows()
    }
  }, [user])

  useEffect(() => {
    filterMembers()
  }, [members, searchTerm, selectedSkill])

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMembers(data || [])
    } catch (error) {
      toast.error('Failed to load community members')
    } finally {
      setLoading(false)
    }
  }

  const fetchFollows = async () => {
    try {
      const { data, error } = await supabase
        .from('follows')
        .select('following_id')
        .eq('follower_id', user.id)

      if (error) throw error
      setFollows(new Set(data.map(f => f.following_id)))
    } catch (error) {
      console.error('Failed to load follows:', error)
    }
  }

  const filterMembers = () => {
    let filtered = members

    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.bio?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedSkill && selectedSkill !== 'All') {
      filtered = filtered.filter(member =>
        member.skills?.includes(selectedSkill)
      )
    }

    setFilteredMembers(filtered)
  }

  const handleFollow = async (memberId) => {
    if (!user) {
      toast.error('Please sign in to follow members')
      return
    }

    try {
      const isFollowing = follows.has(memberId)
      
      if (isFollowing) {
        const { error } = await supabase
          .from('follows')
          .delete()
          .eq('follower_id', user.id)
          .eq('following_id', memberId)

        if (error) throw error
        setFollows(prev => {
          const newSet = new Set(prev)
          newSet.delete(memberId)
          return newSet
        })
        toast.success('Unfollowed successfully')
      } else {
        const { error } = await supabase
          .from('follows')
          .insert({
            follower_id: user.id,
            following_id: memberId
          })

        if (error) throw error
        setFollows(prev => new Set([...prev, memberId]))
        toast.success('Following successfully')
      }
    } catch (error) {
      toast.error('Failed to update follow status')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading community members...</p>
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
              CyberNinjas Community
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Connect with elite cybersecurity professionals and researchers from around the world
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{members.length}</div>
            <div className="text-white/60 text-sm">Members</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-2xl font-bold text-cyan-400">50+</div>
            <div className="text-white/60 text-sm">Countries</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-400">200+</div>
            <div className="text-white/60 text-sm">Projects</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-2xl font-bold text-pink-400">24/7</div>
            <div className="text-white/60 text-sm">Active</div>
          </GlassCard>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkill(skill === 'All' ? '' : skill)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      (selectedSkill === skill) || (skill === 'All' && !selectedSkill)
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar 
                      src={member.avatar_url} 
                      fallback={member.full_name?.[0]?.toUpperCase()}
                      size="lg"
                    />
                    <div>
                      <h3 className="font-semibold text-white">
                        {member.full_name || 'Anonymous Ninja'}
                      </h3>
                      {member.location && (
                        <div className="flex items-center text-white/60 text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {member.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {user && user.id !== member.id && (
                    <Button
                      size="sm"
                      variant={follows.has(member.id) ? "secondary" : "primary"}
                      onClick={() => handleFollow(member.id)}
                    >
                      {follows.has(member.id) ? 'Following' : 'Follow'}
                    </Button>
                  )}
                </div>

                {member.bio && (
                  <p className="text-white/60 text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                )}

                {member.skills && member.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="primary">
                        {skill}
                      </Badge>
                    ))}
                    {member.skills.length > 3 && (
                      <Badge variant="default">
                        +{member.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex space-x-3">
                    {member.github_username && (
                      <a
                        href={`https://github.com/${member.github_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter_username && (
                      <a
                        href={`https://twitter.com/${member.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-cyan-400 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="text-white/40 text-xs">
                    Joined {new Date(member.created_at).toLocaleDateString()}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/60 mb-2">
              No members found
            </h3>
            <p className="text-white/40">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community