import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const slides = [
  {
    image: "/assets/md2pdf.png",
    title: "md2pdf",
    caption: "Markdown から高品質な PDF を生成",
    link: "https://pypi.org/project/md2pdf-advanced/",
  },
  {
    image: "/assets/dom_inspector.png",
    title: "Dom Inspector AI",
    caption: "ページ構造を解析して開発を加速",
    link: "https://pypi.org/project/dom-inspector-ai/",
  },
  {
    image: "/assets/voice2text.png",
    title: "Voice2Text App",
    caption: "音声からテキストへ、素早く正確に",
    link: "https://github.com/yut0takagi/faster-whisper-file-app",
  },
];

export const Spotlight = () => {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const max = slides.length;
  const next = () => setIndex((i) => (i + 1) % max);
  const prev = () => setIndex((i) => (i - 1 + max) % max);
  const timerRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    timerRef.current = setInterval(() => next(), 4000);
    return () => clearInterval(timerRef.current);
  }, [prefersReducedMotion]);

  const handleUserInteract = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const active = useMemo(() => slides[index], [index]);

  return (
    <section id="spotlight" className="relative py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Spotlight</h2>

        <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/60 backdrop-blur">
          {/* Decorative background */}
          <div aria-hidden className="absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),transparent_60%)]" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <div className="order-2 md:order-1 p-6 md:p-10">
              <motion.h3 key={active.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl font-semibold text-blue-400"
              >
                {active.title}
              </motion.h3>
              <motion.p key={`${active.title}-p`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-gray-200 mt-3 text-base md:text-lg"
              >
                {active.caption}
              </motion.p>
              {active.link && (
                <motion.a
                  key={`${active.title}-a`}
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Learn more →
                </motion.a>
              )}
            </div>

            <div className="order-1 md:order-2 p-6 md:p-10 flex items-center justify-center">
              <motion.img
                key={`${active.title}-img`}
                src={active.image}
                alt={active.title}
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="w-full max-h-[420px] object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="relative z-10 flex items-center justify-between px-4 pb-4 mt-2 select-none">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { handleUserInteract(); setIndex(i); }}
                  className={`h-1.5 w-6 rounded-full transition ${i === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Slide ${i+1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => { handleUserInteract(); prev(); }} className="px-3 py-1.5 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400" aria-label="Previous">
                ←
              </button>
              <button onClick={() => { handleUserInteract(); next(); }} className="px-3 py-1.5 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400" aria-label="Next">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;

