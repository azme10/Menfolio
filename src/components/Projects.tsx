'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projectsData = [
    {
      title: "BrandOrbAI — AI Branding Platform",
      period: "2025",
      description:
        "An end-to-end AI-powered platform to discover, define, and orchestrate brand identity. Integrates modular AI agents for brand discovery, identity creation, market and competitor analysis, financial assessment, investor insights, social media strategy (LinkedIn, TikTok), and legal opportunities.",
      technologies: [
        // Backend (Python)
        "FastAPI",
        "Pydantic",
        "Uvicorn",
        "Requests",
        "HTTPX",
        "LangGraph",
        "LangChain (Groq)",
        "OpenAI",
        "Google Generative AI",
        "Groq",
        "Tavily",
        "Apify Client",
        "python-dotenv",
        "python-jose",
        "passlib",
        "python-multipart",
        "python-magic",
        "Pillow",
        "WebSockets",
        "Streamlit",
        "ONNX Runtime",
        "OpenCV",
        "scikit-image",
        "scikit-learn",
        "SciPy",
        "NumPy",
        // Frontend (JS/TS)
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "PostCSS",
        "Radix UI",
        "Lucide",
        "Geist",
        "Tabler Icons",
        "Sonner",
        "Vaul",
        "Framer Motion",
        "Lottie",
        "Recharts",
        "React Leaflet",
        "Leaflet",
        "Firebase",
        "Zod",
        "ESLint",
        "date-fns",
        "clsx",
        "class-variance-authority",
        // Other
        "Git",
        "JSON",
        "Social Media APIs"
      ],
      category: "AI Platform",
      color: "purple",
      highlights: [
        "Modular agent architecture for branding, market analysis, finance, and social media",
        "Brand discovery and identity creation with automated logo/asset generation",
        "Market & competitor analysis with investor-grade insights",
        "Automated social media strategy and content for LinkedIn & TikTok",
        "JSON-backed data layer with external API integrations",
        "Secure auth, file handling, and real-time updates via WebSockets"
      ],
      featured: true
      // Optional links:
      // github: "https://github.com/username/brandorbai",
      // live: "https://brandorb.ai"
    },
    {
      title: "Menfolio - Personal Portfolio",
      period: "Aug 2025 - Present",
      description: "A modern, responsive personal portfolio website built with Next.js 15 and React 19, featuring dark/light themes, 3D animations, and interactive components. Showcases professional experience, education, and projects with cutting-edge web technologies.",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Framer Motion"],
      category: "Web Development",
      color: "cyan",
      highlights: [
        "Modern Next.js 15 with app directory structure",
        "Interactive 3D profile card with tilt effects",
        "Animated navigation with GSAP morphing",
        "Responsive dark/light theme system",
        "Professional contact form integration",
        "Smooth animations and micro-interactions"
      ],
      featured: true,
      github: "https://github.com/azme10/menfolio",
      live: "http://localhost:3000"
    },
    {
      title: "R2C-SLAM",
      period: "Jan 2025 - May 2025",
  description: "Designed and implemented a real-time collaborative SLAM system using ROS 2, enabling two low-cost mobile robots to map and navigate environments jointly through robust inter-robot communication and sensor fusion.",
  technologies: ["ROS 2", "SLAM", "C++", "Python", "Sensor Fusion"],
  category: "Robotics",
      color: "blue",
      highlights: [
        "Real-time collaborative mapping between multiple robots",
        "Advanced sensor fusion algorithms",
        "Inter-robot communication protocols",
        "Low-cost hardware implementation"
      ]
    },
    {
      title: "Secure Entry",
      period: "Feb 2024 - May 2024",
      description: "Developed an integrated facial recognition access system for ENSI Robotics Association using C/C++, Python, and ESP32, enabling secure entry, equipment control, and real-time resource synchronization.",
      technologies: ["C/C++", "Python", "ESP32", "Facial Recognition", "Computer Vision", "IoT"],
      category: "Embedded Systems",
      color: "purple",
      highlights: [
        "Facial recognition access control system",
        "ESP32-based hardware integration",
        "Real-time resource synchronization",
        "Secure equipment control mechanisms"
      ]
    },
    {
      title: "AUTOFY",
      period: "Jan 2024 - May 2024",
      description: "A web-based application developed using HTML, CSS, JavaScript, and PHP, designed to sell and rent cars online with a comprehensive management system.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Web Development"],
      category: "Web Development",
      color: "green",
      highlights: [
        "Full-stack web application",
        "Car sales and rental platform",
        "Database management system",
        "User-friendly interface design"
      ]
    },
    {
      title: "Bank Simulation",
      period: "Oct 2023 - Dec 2023",
      description: "A C++ application designed to mimic the operations and interactions within a real bank environment, implementing complex financial algorithms and data structures.",
      technologies: ["C++", "Object-oriented Programming", "Data Structures", "Algorithms"],
      category: "Software Development",
      color: "orange",
      highlights: [
        "Complex banking operations simulation",
        "Advanced C++ programming techniques",
        "Financial algorithms implementation",
        "Real-world system modeling"
      ]
    },
    {
      title: "Line Follower Robot",
      period: "Dec 2023 - May 2024",
      description: "Designed a competitive line-following robot with PID control and encoders for precise and stable navigation on complex tracks.",
      technologies: ["Arduino", "C/C++", "PID Control", "Sensors", "Robotics"],
      category: "Robotics",
      color: "red",
      highlights: [
        "PID control implementation",
        "Encoder-based navigation",
        "Competitive robot design",
        "Complex track navigation"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        gradient: 'from-cyan-900/30 to-cyan-800/20',
        border: 'border-cyan-500/30',
        tag: 'bg-cyan-600',
        dot: 'bg-cyan-400'
      },
      blue: {
        gradient: 'from-blue-900/30 to-blue-800/20',
        border: 'border-blue-500/30',
        tag: 'bg-blue-600',
        dot: 'bg-blue-400'
      },
      purple: {
        gradient: 'from-purple-900/30 to-purple-800/20',
        border: 'border-purple-500/30',
        tag: 'bg-purple-600',
        dot: 'bg-purple-400'
      },
      green: {
        gradient: 'from-green-900/30 to-green-800/20',
        border: 'border-green-500/30',
        tag: 'bg-green-600',
        dot: 'bg-green-400'
      },
      orange: {
        gradient: 'from-orange-900/30 to-orange-800/20',
        border: 'border-orange-500/30',
        tag: 'bg-orange-600',
        dot: 'bg-orange-400'
      },
      red: {
        gradient: 'from-red-900/30 to-red-800/20',
        border: 'border-red-500/30',
        tag: 'bg-red-600',
        dot: 'bg-red-400'
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my technical projects spanning robotics, embedded systems, web development, and machine learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => {
            const colorClasses = getColorClasses(project.color)
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-gradient-to-br ${colorClasses.gradient} rounded-lg border ${colorClasses.border} backdrop-blur-sm shadow-xl overflow-hidden cursor-pointer`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-block px-3 py-1 ${colorClasses.tag} text-white text-xs font-medium rounded-full`}>
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.period}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedProject === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedProject === index ? 'auto' : 0,
                      opacity: selectedProject === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-600">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2 mb-4">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 ${colorClasses.dot} rounded-full mt-2`}></div>
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Project Links */}
                      {(project.github || project.live) && (
                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.tag} hover:opacity-80 text-white text-sm rounded-lg transition-opacity duration-300`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
            <div className="text-gray-300">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Technologies Used</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-green-400 mb-2">3</div>
            <div className="text-gray-300">Active Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-gray-300">Completion Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
