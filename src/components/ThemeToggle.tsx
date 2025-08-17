'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

const ThemeToggle = ({ className = '', showLabel = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center gap-2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        theme === 'dark' ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
      }`}>
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      
      {/* Moon Icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
      }`}>
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>

      {/* Label */}
      {showLabel && (
        <span className="ml-8 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </span>
      )}
    </motion.button>
  )
}

export default ThemeToggle
