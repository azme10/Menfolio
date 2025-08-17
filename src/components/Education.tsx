'use client'

import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      degree: "Computer Science Engineering",
      institution: "ENSI - National School of Computer Science",
      period: "2023 - Present",
      description: "Specializing in software engineering with focus on embedded systems and machine learning technologies.",
      color: "blue",
      current: true
    },
    {
      degree: "Mathematics Physics",
      institution: "IPEIT - Preparatory Institute for Engineering Studies in Tunis",
      period: "2021 - 2023",
      description: "Strong mathematical and physics foundation preparing for engineering studies.",
      color: "purple",
      current: false
    },
    {
      degree: "Mathematics Baccalaureate",
      institution: "HAMMEM-LIF High School",
      period: "2017 - 2021",
      description: "Graduated with focus on mathematics, building analytical and problem-solving skills.",
      color: "green",
      current: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-700"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
                edu.current 
                  ? 'bg-blue-500 border-blue-300 shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-600 border-gray-400'
              }`}>
                {edu.current && (
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                )}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 bg-gradient-to-br ${
                    edu.color === 'blue' ? 'from-blue-900/30 to-blue-800/20 border-blue-500/30' :
                    edu.color === 'purple' ? 'from-purple-900/30 to-purple-800/20 border-purple-500/30' :
                    'from-green-900/30 to-green-800/20 border-green-500/30'
                  } rounded-lg border backdrop-blur-sm shadow-xl`}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    edu.color === 'blue' ? 'bg-blue-600 text-white' :
                    edu.color === 'purple' ? 'bg-purple-600 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    {edu.period}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-lg text-gray-300 mb-3">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.current && (
                    <div className="mt-4 flex items-center gap-2 text-blue-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Currently Enrolled</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Academic Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-gray-300">Years in Engineering Track</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">ENSI</div>
              <div className="text-gray-300">Prestigious Engineering School</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">CS</div>
              <div className="text-gray-300">Computer Science Focus</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
