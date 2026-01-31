import { Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainProblem from './components/PainProblem';
import TrustWall from './components/TrustWall';
import EarningsSection from './components/EarningsSection';
import BonusSection from './components/BonusSection';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import StickyBanner from './components/StickyBanner';
import ThankYou from './components/ThankYou'; // <--- Import New Page

// Landing Page Layout (Saara Sales Material yahan)
const LandingPage = () => {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <EarningsSection />
      <PainProblem />
      <TrustWall />
      <BonusSection />
      <Reviews />
      <Footer />
      {/* Sticky Banner sirf Sales Page par dikhega, Thank You page par nahi */}
      <StickyBanner />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Route 1: Main Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Route 2: Thank You Page (Payment Success) */}
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;