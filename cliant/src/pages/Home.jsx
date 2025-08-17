// pages/Home.jsx
import React from "react"
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
