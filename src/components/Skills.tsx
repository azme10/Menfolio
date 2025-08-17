'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FiCode, FiCpu, FiTool, FiUsers, FiLayers } from 'react-icons/fi'
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiPytorch,
  SiFastapi,
  SiStreamlit,
  SiHuggingface,
  SiOpenai,
  SiArduino,
  SiEspressif,
  SiRaspberrypi,
  SiLinux
} from 'react-icons/si'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'cloud'>('grid')

  const skillsData = {
    "Programming Languages": [
      { name: "C/C++", level: 90, color: "blue" },
      { name: "Python", level: 85, color: "green" },
      { name: "Java", level: 80, color: "orange" },
      { name: "JavaScript", level: 75, color: "yellow" },
      { name: "Assembly", level: 70, color: "red" },
      { name: "VHDL", level: 65, color: "purple" }
    ],
    "Machine Learning": [
      { name: "Deep Learning", level: 85, color: "blue" },
      { name: "Machine Learning", level: 80, color: "green" },
      { name: "NLP", level: 75, color: "purple" },
      { name: "LLMs", level: 70, color: "orange" },
      { name: "RAG", level: 75, color: "red" }
    ],
    "Technologies & Libraries": [
      { name: "PyTorch", level: 80, color: "orange" },
      { name: "FastAPI", level: 85, color: "green" },
      { name: "Streamlit", level: 75, color: "red" },
      { name: "Hugging Face", level: 70, color: "yellow" },
      { name: "OpenAI API", level: 75, color: "blue" },
      { name: "Pydantic", level: 70, color: "purple" }
    ],
    "Hardware & Platforms": [
      { name: "Arduino", level: 90, color: "blue" },
      { name: "ESP32", level: 85, color: "green" },
      { name: "Raspberry Pi", level: 80, color: "red" },
      { name: "ROS 2", level: 75, color: "purple" },
      { name: "Linux", level: 85, color: "orange" },
      { name: "Windows", level: 90, color: "blue" }
    ],
    "Soft Skills": [
      { name: "Leadership", level: 85, color: "blue" },
      { name: "Team-working", level: 90, color: "green" },
      { name: "Public Speaking", level: 80, color: "purple" },
      { name: "Problem Solving", level: 95, color: "orange" },
      { name: "Critical Thinking", level: 90, color: "red" }
    ]
  }

  const categories = ['all', ...Object.keys(skillsData)]

  const allSkills = useMemo(() => {
    return Object.entries(skillsData).flatMap(([category, skills]) =>
      skills.map((s) => ({ ...s, category }))
    )
  }, [])

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      )
    }
    return skillsData[activeCategory as keyof typeof skillsData]?.map(skill => ({ ...skill, category: activeCategory })) || []
  }

  const getColorClasses = (color: string) => {
    const fills = {
      blue: 'from-blue-500 to-cyan-400',
      green: 'from-emerald-500 to-green-400',
      purple: 'from-purple-500 to-fuchsia-400',
      orange: 'from-orange-500 to-amber-400',
      red: 'from-rose-500 to-red-400',
      yellow: 'from-yellow-500 to-lime-400'
    }
    const rings = {
      blue: 'ring-blue-500/40',
      green: 'ring-emerald-500/40',
      purple: 'ring-purple-500/40',
      orange: 'ring-orange-500/40',
      red: 'ring-rose-500/40',
      yellow: 'ring-yellow-500/40'
    }
    return {
      fill: fills[color as keyof typeof fills] || fills.blue,
      ring: rings[color as keyof typeof rings] || rings.blue
    }
  }

  const getCategoryIcon = (category: string) => {
    if (category.includes('Programming')) return <FiCode className="w-5 h-5" />
    if (category.includes('Machine Learning')) return <FiCpu className="w-5 h-5" />
    if (category.includes('Technologies')) return <FiLayers className="w-5 h-5" />
    if (category.includes('Hardware')) return <FiTool className="w-5 h-5" />
    if (category.includes('Soft')) return <FiUsers className="w-5 h-5" />
    return <FiLayers className="w-5 h-5" />
  }

  const getSkillIcon = (name: string) => {
    const n = name.toLowerCase()
    if (n.includes('python')) return <SiPython className="w-6 h-6" />
    if (n.includes('c/c++') || n.includes('c++')) return <SiCplusplus className="w-6 h-6" />
    if (n === 'c') return <FiCode className="w-6 h-6" />
  if (n.includes('java ') || n === 'java') return <FiCode className="w-6 h-6" />
    if (n.includes('javascript')) return <SiJavascript className="w-6 h-6" />
    if (n.includes('pytorch')) return <SiPytorch className="w-6 h-6" />
    if (n.includes('fastapi')) return <SiFastapi className="w-6 h-6" />
    if (n.includes('streamlit')) return <SiStreamlit className="w-6 h-6" />
    if (n.includes('hugging')) return <SiHuggingface className="w-6 h-6" />
    if (n.includes('openai')) return <SiOpenai className="w-6 h-6" />
    if (n.includes('arduino')) return <SiArduino className="w-6 h-6" />
    if (n.includes('esp32')) return <SiEspressif className="w-6 h-6" />
    if (n.includes('raspberry')) return <SiRaspberrypi className="w-6 h-6" />
    if (n.includes('linux')) return <SiLinux className="w-6 h-6" />
  if (n.includes('windows')) return <FiLayers className="w-6 h-6" />
    if (n.includes('opencv')) return <FiCpu className="w-6 h-6" />
    if (n.includes('scikit') || n.includes('rag') || n.includes('nlp') || n.includes('llm')) return <FiCpu className="w-6 h-6" />
    return <FiLayers className="w-6 h-6" />
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies across various domains.
          </p>
        </motion.div>

        {/* Category & View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg border-blue-500'
                      : 'bg-gray-700/70 text-gray-300 hover:bg-gray-600/80 hover:text-white border-gray-600'
                  }`}
                >
                  {category === 'all' ? 'All Skills' : category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-lg text-sm border transition ${
                  viewMode === 'grid' ? 'bg-gray-200 text-gray-900 border-gray-300' : 'bg-gray-700 text-gray-300 border-gray-600'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('cloud')}
                className={`px-3 py-2 rounded-lg text-sm border transition ${
                  viewMode === 'cloud' ? 'bg-gray-200 text-gray-900 border-gray-300' : 'bg-gray-700 text-gray-300 border-gray-600'
                }`}
              >
                Cloud
              </button>
            </div>
          </div>
        </motion.div>

        {/* Skills Content */}
  {viewMode === 'grid' ? (
          // Grid view: category cards with progress bars
          <div className="space-y-10">
            {(activeCategory === 'all' ? Object.keys(skillsData) : [activeCategory]).map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-gray-700/60 p-6 shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-700/60 text-white border border-gray-600">
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {skillsData[category as keyof typeof skillsData]?.map((skill, index) => {
                    const c = getColorClasses(skill.color)
                    return (
                      <motion.div
                        key={`${category}-${skill.name}-${index}`}
                        variants={itemVariants}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className={`relative overflow-hidden rounded-xl border ${c.ring} bg-gray-900/70 p-5`}
                      >
                        <div className="relative z-10 flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.fill} flex items-center justify-center text-white/90 shadow-inner`}> 
                            {getSkillIcon(skill.name)}
                          </div>
                          <div className="min-w-0">
                            <div className="text-white font-semibold truncate">{skill.name}</div>
                            {activeCategory === 'all' && (
                              <div className="text-xs text-gray-400 mt-0.5 truncate">{category}</div>
                            )}
                          </div>
                        </div>

                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${c.fill} opacity-10`} />
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Cloud view: tag cloud of all skills
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {(activeCategory === 'all' ? allSkills : allSkills.filter(s => s.category === activeCategory)).map((s, i) => {
              const c = getColorClasses(s.color)
              return (
                <motion.span
                  key={`${s.name}-${i}`}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.06 }}
                  className={`inline-flex items-center gap-2 rounded-full border ${c.ring} bg-gray-800/70 text-white px-3.5 py-1.5 font-semibold shadow-md`}
                >
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br ${c.fill}`}>
                    {getSkillIcon(s.name)}
                  </span>
                  {s.name}
                </motion.span>
              )
            })}
          </motion.div>
        )}

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
            <div className="text-gray-300">Programming Languages</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-300">Hardware Platforms</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-gray-300">Learning Mindset</div>
          </div>
        </motion.div>

        {/* Tools & IDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Development Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Visual Studio Code', 'GitHub', 'Arduino IDE', 'Git', 'Docker', 'Jupyter'].map((tool, index) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg border border-gray-600 text-white font-medium"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
