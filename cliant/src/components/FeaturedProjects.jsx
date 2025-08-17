import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";

export const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);
  return (
    <section id="featured" className="py-20 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, index) => (
            <motion.div
              key={p.title}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:shadow-xl hover:-translate-y-1 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/projects/${index}`} aria-label={`${p.title} の詳細`} className="block">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/#projects" className="text-white border border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 transition">
            すべてのプロジェクトを見る
          </a>
        </div>
      </div>
    </section>
  );
};

