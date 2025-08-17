// components/Contact.jsx
import React from "react"
import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          お仕事のご依頼・ご相談・ご質問など、お気軽にご連絡ください。
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 text-white text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="mailto:yutotakagi.for.business@gmail.com"
            className="hover:text-blue-400"
            aria-label="メールを送る"
          >
            📧
          </a>
          <a
            href="https://github.com/yut0takagi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="GitHub プロフィール"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
