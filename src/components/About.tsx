'use client'

import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'

const About = () => {
  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileCard
              name="Mohamed Aziz MENSI"
              title="Computer Science Engineering Student"
              handle="azizmensi"
              status="Available for Internships"
              contactText="Contact Me"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Software Engineering Student at ENSI
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am Mohamed Aziz MENSI, a passionate software engineering student at the 
              National School of Computer Science (ENSI). My journey in technology began 
              with a strong foundation in mathematics and physics, which has shaped my 
              analytical approach to problem-solving.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My primary focus lies in <span className="text-blue-400 font-semibold">embedded systems</span> and 
              <span className="text-purple-400 font-semibold"> machine learning</span>, where I enjoy 
              bridging the gap between hardware and software to create innovative solutions. 
              I thrive on tackling complex challenges and turning theoretical concepts into 
              practical applications.
            </p>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-blue-400">2023</div>
                <div className="text-gray-400">Started at ENSI</div>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Major Projects</div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Arabic (Native)</span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">French (B2)</span>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">English (B2)</span>
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">German (B1)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
