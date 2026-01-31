import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

// === FIXED IMPORTS (Extensions Match Your Files) ===
import proof1 from '../assets/images/proof1.png';  // .png
import proof2 from '../assets/images/proof2.png';  // .png
import proof3 from '../assets/images/proof3.png';  // .png
import proof4 from '../assets/images/proof4.png';  // .png
import proof5 from '../assets/images/proof5.png';  // .png
import proof6 from '../assets/images/proof6.png';  // .png
import proof7 from '../assets/images/proof7.jpeg'; // .jpeg

const EarningsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const proofs = [proof1, proof2, proof3, proof4, proof5, proof6, proof7];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-2">
            This System Works. Here is The Proof.
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
             <TrendingUp className="w-6 h-6 text-green-600" />
             <p className="text-slate-600 font-medium">Results from last month</p>
          </div>
          
          {/* THE BIG NUMBER */}
          <div className="inline-block relative">
            <span className="text-5xl sm:text-7xl font-black text-[#FF4500] tracking-tight">
              ₹74,300
            </span>
            <span className="absolute -top-3 -right-6 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full border border-green-200 transform rotate-12 shadow-sm">
              VERIFIED
            </span>
          </div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            I don't depend on luck. I target businesses who have budget. These are real payments from clients found using this exact method.
          </p>
        </div>

        {/* GALLERY CONTAINER */}
        <div className="relative group">
          
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-orange-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-orange-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrolling Strip */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 py-8 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            {proofs.map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 snap-center relative transition-transform hover:scale-[1.02] duration-300"
              >
                {/* Image Container - Enforcing 2:3 Ratio 
                   aspect-[2/3] ensures it stays in ratio.
                   h-[400px] keeps height fixed so scroll looks good.
                */}
                <div className="h-[400px] aspect-[2/3] rounded-2xl bg-white shadow-lg border border-slate-100 p-2 overflow-hidden">
                    <img 
                        src={src} 
                        alt={`Proof of earnings ${index + 1}`} 
                        className="h-full w-full object-cover rounded-xl"
                        loading="lazy"
                    />
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Swipe Hint */}
          <div className="flex justify-center mt-4 md:hidden">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest animate-pulse">
              Swipe to see more →
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EarningsSection;