import React from 'react';
import Header from './components/Header'; // <--- Import Header
import HeroSection from './components/HeroSection';
import PainProblem from './components/PainProblem';
import EarningsSection from './components/EarningsSection';
import TrustWall from './components/TrustWall';
import TheSolution from './components/TheSolution';
import Reviews from './components/Reviews';
import BonusSection from './components/BonusSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      <Header />  {/* <--- Added Header Here */}
      
      <HeroSection />
      <EarningsSection />
      <PainProblem />
      <TrustWall />
      <TheSolution />
      <Reviews />
      <BonusSection />
    </div>
  );
}

export default App;