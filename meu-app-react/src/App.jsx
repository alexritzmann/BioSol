

import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import TreatmentsSection from './components/TreatmentsSection/TreatmentsSection'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
      </main>
    </div>
  );
}

export default App
