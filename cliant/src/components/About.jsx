// components/About.jsx
import React from "react"
import { motion } from "framer-motion"

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          中央大学ビジネスデータサイエンス学科に所属し、Webアプリケーションの開発を通じて社会課題を解決することに情熱を注いでいます。ReactやTailwind CSSを用いたフロントエンド、FlaskやFirebaseを用いたバックエンドに加え、Pythonによるデータ分析や機械学習の活用も得意としています。
          <br /><br />
          現在は、ポートフォリオ構築・画像解析・教育支援ツール・AI対話アプリなど、さまざまなプロジェクトに取り組み、ユーザー体験を重視した開発を進めています。技術とデザイン、データが融合した価値あるプロダクトの創出を目指しています。
        </motion.p>
      </div>
    </section>
  )
}