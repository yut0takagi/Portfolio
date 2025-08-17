import React, { useState } from "react"
import { motion } from "framer-motion"
import projectList from "../data/projects.json"
import { Link } from "react-router-dom"

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3)
  const showMore = () => setVisibleCount((prev) => prev + 3)
  const hasMore = visibleCount < projectList.length

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.slice(0, visibleCount).map((project, index) => (
          <motion.div
            key={index}
            title={`${project.title} の詳細を見る`}
            className="bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition transform duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/projects/${index}`}
              className="block"
              aria-label={`${project.title} の詳細ページへ`}
            >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-700 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={showMore}
            className="text-white border border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 transition"
          >
            もっと見る
          </button>
        </div>
      )}
    </section>
  )
}
