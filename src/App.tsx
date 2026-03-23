import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { WhatWeBuild } from './components/WhatWeBuild'
import { CaseStudies } from './components/CaseStudies'
import { Results } from './components/Results'
import { Founder } from './components/Founder'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <WhatWeBuild />
        <CaseStudies />
        <Results />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
