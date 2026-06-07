import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Method from './components/sections/Method'
import Mentorship from './components/sections/Mentorship'
import Results from './components/sections/Results'
import Community from './components/sections/Community'
import Pricing from './components/sections/Pricing'
import PayoutMentorship from './components/sections/PayoutMentorship'
import AdditionalResults from './components/sections/AdditionalResults'
import EvenMoreResults from './components/sections/EvenMoreResults'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import './styles/App.css'

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <Method />
        <Mentorship />
        <Results />
        <Community />
        <Pricing />
        <PayoutMentorship />
        <AdditionalResults />
        <EvenMoreResults />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
