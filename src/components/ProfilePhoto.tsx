'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfilePhotoProps {
  src?: string
  alt?: string
  size?: number
}

const ProfilePhoto = ({ 
  src = "/images/MEE.jpg", 
  alt = "Mohamed Aziz MENSI", 
  size = 320 
}: ProfilePhotoProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Photo Container with Gradient Border */}
      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
          
          {/* Loading State */}
          {imageLoading && !imageError && (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          )}

          {/* Actual Photo */}
          {!imageError && (
            <Image
              src={src}
              alt={alt}
              width={size}
              height={size}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              priority
            />
          )}

          {/* Placeholder when no image or error */}
          {imageError && (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-400 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Add Your Photo</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Place image at:<br />
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">
                    /public/images/MEE.jpg
                  </code>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400 rounded-full opacity-40"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 -right-8 w-6 h-6 border-2 border-blue-300 rounded-full"
      />
      <motion.div
        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-16 -left-6 w-4 h-4 bg-yellow-400 rounded-full opacity-50"
      />
    </div>
  )
}

export default ProfilePhoto
