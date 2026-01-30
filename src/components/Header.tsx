import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
// Make sure the path to your logo imported here is correct based on your previous steps
// If it's in src/assets/images/: import logo from '../assets/images/logo.png';
// If you moved it to public and are using direct path, remove this import and update src below.
import logo from '../assets/images/logo.png'; 

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing-card');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
            scrolled 
            ? 'bg-white/70 backdrop-blur-xl border-slate-200/60 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
        
        {/* 1. LEFT: BRAND TEXT (DevSocs) */}
        <div 
            className="cursor-pointer group z-20" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <span className={`font-sans font-extrabold tracking-tighter text-2xl sm:text-3xl transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Dev<span className="text-[#FF4500]">Socs</span>
            </span>
        </div>

        {/* 2. CENTER: LOGO IMAGE (Absolute Centered & BIGGER) */}
        <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <img 
                src={logo} // Ensure this variable matches your import name
                alt="DevSocs Emblem" 
                // UPDATED HEIGHT CLASSES BELOW:
                className={`transition-all duration-300 drop-shadow-sm hover:scale-110 ${scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'} w-auto`} 
            />
        </div>

        {/* 3. RIGHT: CTA BUTTON */}
        <div className="z-20">
            <button 
                onClick={scrollToPricing}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-[#FF4500] hover:scale-105 hover:shadow-orange-500/40 active:scale-95"
            >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                
                <span className="flex items-center gap-2 relative z-10">
                    Get Access
                    <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
            </button>
        </div>

      </div>
    </nav>
  );
};

export default Header;