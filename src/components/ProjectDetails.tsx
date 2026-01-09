import React, { useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  const project = projects.find(p => p.id === projectId)

  const galleryImages = useMemo(() => {
    if (!project) return []
    const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : []
    const all = [project.image, ...gallery].filter(Boolean)
    // Remove duplicates
    return Array.from(new Set(all))
  }, [project])

  const [activeImage, setActiveImage] = useState<string>(() => galleryImages[0] || '')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Keep activeImage in sync when navigating between projects
  React.useEffect(() => {
    setActiveImage(galleryImages[0] || '')
    setIsLightboxOpen(false)
  }, [galleryImages])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container max-w-5xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
              {project.title}
            </h1>
            {project.type && (
              <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 font-semibold text-sm">
                {project.type} • {project.year}
              </span>
            )}
            {project.duration && (
              <span className="px-4 py-1.5 rounded-full bg-violet-500/20 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/30 dark:border-violet-500/20 font-semibold text-sm">
                ⏱️ {project.duration}
              </span>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
            {project.description}
          </p>

          {project.detailedDescription && (
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 border border-cyan-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-violet-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                📊 Key Metrics & Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/50 dark:bg-slate-900/30"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl mt-0.5">✓</span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                className="px-6 py-3 rounded-lg bg-violet-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-violet-200 dark:hover:bg-slate-600 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Images/Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card"
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            📸 Project Overview
          </h2>

          {/* Main (click to open) */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-slate-200 dark:bg-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            aria-label="Open image preview"
          >
            <img
              src={activeImage || project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-slate-900/20 flex items-center justify-center">
              <span className="px-4 py-2 rounded-lg bg-white/80 text-slate-900 text-sm font-semibold">
                Click to zoom
              </span>
            </div>
          </button>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                Additional Screenshots
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {galleryImages.map((src) => {
                  const isActive = src === activeImage
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(src)}
                      className={[
                        'relative overflow-hidden rounded-lg aspect-video bg-slate-200 dark:bg-slate-700 border transition-all',
                        isActive
                          ? 'border-cyan-500 ring-2 ring-cyan-400/40'
                          : 'border-white/20 dark:border-slate-700 hover:border-cyan-300',
                      ].join(' ')}
                      aria-label="Select screenshot"
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 ? (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                ✨ Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-cyan-200 dark:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>

            </>
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-3">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors"
                >
                  ✕ Close
                </button>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-slate-900">
                <img
                  src={activeImage || project.image}
                  alt={project.title}
                  className="w-full max-h-[78vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
