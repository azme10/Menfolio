'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 w-1 h-full bg-gray-600"></div>

          {/* Experience Item - Talan AI Intern */}
          <div className="relative pl-20 mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-6 h-6 bg-purple-500 rounded-full border-4 border-purple-300 shadow-lg shadow-purple-500/50">
              <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75"></div>
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-lg border border-purple-500/30 backdrop-blur-sm shadow-xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    AI Intern at Talan
                  </h3>
                  <p className="text-lg text-purple-400 font-medium">
                    AI Engineer Intern
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
                    Jul 2025 - Aug 30, 2025
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Built BrandOrbAI, an AI-powered branding platform that orchestrates modular agents for brand discovery, identity creation, market & competitor analysis, investor insights, and social media strategy automation.
                </p>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span>Designed modular AI agent architecture covering branding, market analysis, finance, and social media</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span>Implemented FastAPI backend with LangGraph/LangChain (Groq, OpenAI, Google Generative AI) for orchestration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span>Integrated Tavily and Apify for data acquisition and analysis; ONNX Runtime for model inference</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span>Developed real-time pipelines with WebSockets; Streamlit dashboards for insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span>Shipped Next.js frontend with TailwindCSS, Radix UI, and Framer Motion for a polished UX</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">FastAPI</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">LangGraph</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">LangChain (Groq)</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">OpenAI</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">Google GenAI</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">Tavily</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">Apify</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">ONNX Runtime</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">WebSockets</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">Next.js</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">TailwindCSS</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">Framer Motion</span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">Git</span>
                  </div>
                </div>

                {/* Organization Info */}
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
                  <h4 className="text-lg font-semibold text-white mb-2">About Talan</h4>
                  <p className="text-gray-400 text-sm">
                    Talan is a global consulting and technology firm. As an AI Intern, I focused on building BrandOrbAI—an AI-driven platform that streamlines branding through automation, data, and intelligent agents.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience Item */}
          <div className="relative pl-20">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-blue-300 shadow-lg shadow-blue-500/50">
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 rounded-lg border border-blue-500/30 backdrop-blur-sm shadow-xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Summer Internship at LARODEC-ISG
                  </h3>
                  <p className="text-lg text-blue-400 font-medium">
                    Machine Learning Research Intern
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                    Jun 2024 - Aug 2024
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Real-time fraud detection in credit card transactions using advanced machine learning techniques.
                </p>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span>Developed machine learning models for real-time fraud detection in financial transactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span>Applied advanced ML techniques including anomaly detection and pattern recognition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span>Collaborated with research team on cutting-edge fintech security solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span>Gained hands-on experience with large-scale data processing and analysis</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm border border-purple-500/30">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-green-400 rounded-full text-sm border border-green-500/30">
                      Data Analysis
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
                      Fraud Detection
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-red-400 rounded-full text-sm border border-red-500/30">
                      Real-time Processing
                    </span>
                  </div>
                </div>

                {/* Organization Info */}
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
                  <h4 className="text-lg font-semibold text-white mb-2">About LARODEC-ISG</h4>
                  <p className="text-gray-400 text-sm">
                    Research Laboratory for Development of Distributed and Cooperative Systems at the Higher Institute of Management, 
                    focusing on advanced computer science research and real-world applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}

export default Experience
