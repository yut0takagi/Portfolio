// components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { AudioOverview } from "./AudioOverview";
import { smoothScrollTo } from "../utils/scroll";

export const HeroSection = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const initVanta = async () => {
      try {
        if (!vantaEffect && vantaRef.current && !prefersReducedMotion) {
          const [{ default: NET }, THREE] = await Promise.all([
            import('vanta/dist/vanta.net.min'),
            import('three')
          ]);
          const effect = NET({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x00bfff,
            backgroundColor: 0x000000,
          });
          setVantaEffect(effect);
        }
      } catch (e) {
        // Fail silently and keep static background if vanta fails to load
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Scroll-driven transforms for Apple-like parallax
  const { scrollYProgress } = useScroll({ target: vantaRef, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={vantaRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white px-6">
        <section className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center md:justify-start">
              <motion.img
                src="/assets/icon.jpg"
                alt="Yuto Takagi"
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] rounded-full object-cover shadow-2xl ring-1 ring-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
            </div>

            {/* Right: Intro */}
            <div className="text-left">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={!prefersReducedMotion ? { y: titleY, scale: titleScale, opacity: titleOpacity } : undefined}
              >
                Hello, I'm <span className="text-blue-400">Takagi</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-xl max-w-xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={!prefersReducedMotion ? { y: subY, opacity: subOpacity } : undefined}
              >
                A developer focused on Machine Learning and Web Application.
              </motion.p>

              <div className="flex flex-wrap gap-3 items-center">
                <motion.a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); smoothScrollTo('projects'); }}
                  aria-label="プロジェクト一覧へ移動"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }}
                  className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-full text-base font-medium transition"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                >
                  Contact
                </motion.a>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.8 }}>
                  <AudioOverview />
                </motion.div>
              </div>

              {/* Scroll indicator */}
              {!prefersReducedMotion && (
                <motion.div
                  aria-hidden
                  className="mt-8 text-gray-400 text-sm flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 1.2 }}
                >
                  <span>Scroll</span>
                  <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                  >
                    ↓
                  </motion.span>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
