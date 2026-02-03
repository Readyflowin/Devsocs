import { Routes, Route, Navigate } from 'react-router-dom';

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
import ThankYou from './components/ThankYou';
import RefundPolicy from './components/RefundPolicy'; // <--- IMPORT ADDED

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
      <StickyBanner />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Route 1: Main Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Route 2: SECRET SUCCESS PAGE */}
      <Route path="/order-confirmed-x9z2q1-secure-access-77" element={<ThankYou />} />

      {/* Route 3: REFUND POLICY PAGE (Added) */}
      <Route path="/refund-policy" element={<RefundPolicy />} />

      {/* Optional: Redirect old thank-you to home */}
      <Route path="/thank-you" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;