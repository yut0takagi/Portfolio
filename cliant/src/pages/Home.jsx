// pages/Home.jsx
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { smoothScrollTo } from "../utils/scroll"
import { HeroSection } from "../components/HeroSection"
import { Projects } from "../components/Projects"
import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Highlights } from "../components/Highlights"
import { FeaturedProjects } from "../components/FeaturedProjects"
import { Skills } from "../components/Skills"
import { Spotlight } from "../components/Spotlight"
import { Timeline } from "../components/Timeline"

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state && location.state.scrollToId;
    if (id) {
      // Give the page a tick to render before scrolling
      setTimeout(() => smoothScrollTo(id, { duration: 900 }), 0);
    }
    // No dependency on location.state to avoid re-scrolling on minor updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main id="main">
        <HeroSection />
        <Highlights />
        <Spotlight />
        <FeaturedProjects />
        <Skills />
        <Timeline />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
