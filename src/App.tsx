import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Method from './components/sections/Method'
import Results from './components/sections/Results'
import Pricing from './components/sections/Pricing'
import PayoutMentorship from './components/sections/PayoutMentorship'
import AdditionalResults from './components/sections/AdditionalResults'
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
        <Results />
        <Pricing />
        <PayoutMentorship />
        <AdditionalResults />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
