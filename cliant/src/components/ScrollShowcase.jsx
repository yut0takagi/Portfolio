import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const slides = [
  {
    image: "/assets/md2pdf.png",
    title: "md2pdf",
    caption: "Markdown から高品質な PDF を生成",
  },
  {
    image: "/assets/dom_inspector.png",
    title: "Dom Inspector AI",
    caption: "ページの構造を解析し、開発を加速",
  },
  {
    image: "/assets/voice2text.png",
    title: "Voice2Text App",
    caption: "音声からテキストへ、素早く正確に",
  },
];

// Separate child component so hooks can be used safely per slide
const Slide = ({ s, index, progress }) => {
  const start = index / slides.length;
  const end = (index + 1) / slides.length;
  const midL = start + (end - start) * 0.3;
  const midR = start + (end - start) * 0.7;
  const opacity = useTransform(progress, [start, midL, midR, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, midL, midR, end], [0.98, 1.0, 1.0, 0.98]);
  const y = useTransform(progress, [start, end], [0, 0]);
  return (
    <motion.figure
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-[92%] bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 shadow-2xl"
      style={{ opacity, scale, y }}
    >
      <img
        src={s.image}
        alt={s.title}
        loading="lazy"
        decoding="async"
        className="w-full max-h-[62vh] object-contain rounded-lg"
      />
      <figcaption className="mt-4 text-center">
        <div className="text-xl font-semibold text-blue-400">{s.title}</div>
        <div className="text-gray-200 text-sm">{s.caption}</div>
      </figcaption>
    </motion.figure>
  );
};

export const ScrollShowcase = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const isSmall = useMediaQuery('(max-width: 767px)');

  return (
    <section id="story" ref={sectionRef} className="relative bg-black border-t border-gray-800 overflow-x-hidden">
      {isSmall ? (
        <div className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-1 gap-6">
          {slides.map((s) => (
            <figure key={s.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 shadow-lg">
              <img src={s.image} alt={s.title} className="w-full h-56 object-contain rounded" />
              <figcaption className="mt-3 text-center">
                <div className="text-lg font-semibold text-blue-400">{s.title}</div>
                <div className="text-gray-200 text-sm">{s.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="min-h-[300vh]">
          <div className="sticky top-[72px] h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/70 to-black pointer-events-none" />
            {!prefersReducedMotion ? (
              slides.map((s, i) => (
                <Slide key={s.title} s={s} index={i} progress={scrollYProgress} />
              ))
            ) : (
              <div className="max-w-5xl w-[92%] mx-auto grid md:grid-cols-3 gap-4">
                {slides.map((s) => (
                  <figure key={s.title} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                    <img src={s.image} alt={s.title} className="w-full h-40 object-contain rounded" />
                    <figcaption className="mt-2 text-center text-sm text-gray-300">{s.title}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener('change', onChange);
    return () => m.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}
