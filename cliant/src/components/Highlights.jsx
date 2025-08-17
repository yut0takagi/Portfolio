import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects.json";

export const Highlights = () => {
  const projectCount = projects.length;

  return (
    <section id="highlights" className="py-16 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <motion.div
          className="bg-gray-900 rounded-xl p-8 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-4xl font-extrabold text-blue-400">{projectCount}</div>
          <div className="text-gray-300 mt-2">Projects</div>
        </motion.div>
        <motion.div
          className="bg-gray-900 rounded-xl p-8 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="text-4xl font-extrabold text-blue-400">ML · Web</div>
          <div className="text-gray-300 mt-2">Focus Areas</div>
        </motion.div>
        <motion.div
          className="bg-gray-900 rounded-xl p-8 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="text-4xl font-extrabold text-blue-400">Open Source</div>
          <div className="text-gray-300 mt-2">PyPI / GitHub</div>
        </motion.div>
      </div>
    </section>
  );
};

