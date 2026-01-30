import React from 'react';
import HeroSection from './components/HeroSection';
import PainProblem from './components/PainProblem'; // <--- Import
import EarningsSection from './components/EarningsSection';
import TrustWall from './components/TrustWall';
import TheSolution from './components/TheSolution';
import BonusSection from './components/BonusSection';
function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20"> {/* pb-20 taaki footer content na chupaye */}
      <HeroSection />
      <EarningsSection />
      <PainProblem />       {/* Pehle Pain dikhao */}
      <TrustWall />         {/* Fir Reviews */}
      <TheSolution/>
      <BonusSection/>
    </div>
  );
}

export default App;