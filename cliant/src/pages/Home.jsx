// pages/Home.jsx
import React from "react"
import { HeroSection } from "../components/HeroSection"
import { Projects } from "../components/Projects"
import { About } from "../components/About"
import { Contact } from "../components/Contact"

const Home = () => {
  return (
    <div className="bg-black text-white font-sans">
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default Home