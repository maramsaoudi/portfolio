import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">🎯 My Journey</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a full-stack software engineer holding an Engineering degree in Computer Science from ESPRIT.
                I enjoy building reliable products that combine clean architecture, strong backend foundations,
                and modern user interfaces.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">💡 What I Do</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I develop end-to-end web solutions using React and Angular on the frontend, and backend stacks like
                Node.js, PHP (including Joomla), and Django. I'm comfortable designing REST application programming
                interfaces (REST APIs), integrating third-party services, and delivering features from idea to production.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">🚀 My Approach</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I focus on maintainable code, clear collaboration, and consistent delivery. I care about performance,
                testing, and practical automation-like Continuous Integration and Continuous Delivery (CI/CD) to ship
                fast without sacrificing quality.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">🌍 Beyond Code</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I value teamwork and leadership. At university, I served as President of ChessSpirit Club, organizing
                activities and building a supportive community-skills I bring into engineering teams and agile projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
