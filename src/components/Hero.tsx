'use client'

import { motion } from 'framer-motion'
import { Suspense } from 'react'
import VantaBackground from './VantaBackground'
import { useTheme } from './ThemeProvider'

const Hero = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex items-center justify-center relative transition-colors duration-300 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
    }`}>
      {/* Vanta.js NET Background - Only show in dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>}>
            <VantaBackground 
              effectOptions={{
                colors: {
                  primary: 0x3f40ff,
                  secondary: 0x7c3aed,
                  accent: 0x06b6d4,
                }
              }}
            />
          </Suspense>
        </div>
      )}

      {/* Overlay for better text readability in dark mode */}
      {theme === 'dark' && <div className="absolute inset-0 bg-black/40 z-10"></div>}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
            theme === 'dark' 
              ? 'from-blue-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Mohamed Aziz MENSI
          </h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-2xl md:text-3xl font-light mb-8 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Software Engineering Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Passionate about embedded systems and problem-solving. Building innovative solutions 
            with cutting-edge technologies and seeking opportunities to apply my skills in real-world projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className={`px-8 py-3 font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl z-20 relative ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              View My Work
            </a>
            <a
              href="#about"
              className={`px-8 py-3 border font-medium rounded-lg transition-colors duration-200 z-20 relative ${
                theme === 'dark'
                  ? 'border-gray-400 hover:border-gray-300 text-gray-200 hover:text-white'
                  : 'border-gray-400 hover:border-gray-500 text-gray-700 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              Learn More
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`mt-16 flex flex-wrap justify-center gap-6 text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              mohamedaziz.mensi@ensi-uma.tn
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +(216) 90 066 182
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="animate-bounce">
            <svg className={`w-6 h-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
