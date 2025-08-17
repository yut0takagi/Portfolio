import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["React", "Tailwind CSS", "Streamlit", "Flask"],
  },
  {
    title: "ML / Data",
    items: ["Pandas", "scikit-learn", "NumPy", "Matplotlib"],
  },
  {
    title: "Cloud / Tools",
    items: ["Firebase", "GitHub Actions", "Docker (basic)", "Vercel/Render"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s} className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

