import { User } from 'lucide-react'

const Avatar = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '',
  fallback 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  return (
    <div className={`
      relative rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5
      ${sizes[size]} ${className}
    `}>
      <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-600">
            {fallback ? (
              <span className="text-white font-semibold text-sm">
                {fallback}
              </span>
            ) : (
              <User className="w-1/2 h-1/2 text-white" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Avatar