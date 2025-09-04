import React from "react";
import { motion } from "framer-motion";
import timeline from "../data/timeline.json";

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Timeline
        </motion.h2>

        <div className="relative pl-6">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-700" aria-hidden="true" />

          <ul className="space-y-8">
            {timeline.map((item, idx) => (
              <li key={`${item.title}-${idx}`} className="relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-blue-500 border-2 border-black" aria-hidden="true" />
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="text-sm text-gray-400">{item.date}</div>
                  <h3 className="text-xl font-semibold text-blue-400 mt-1">{item.title}</h3>
                  <p className="text-gray-300 mt-2 whitespace-pre-line">{item.description}</p>
                  {item.links && item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {item.links.map((l, i) => (
                        <a
                          key={i}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline text-sm"
                        >
                          {l.label || l.url}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

