import React from 'react';
import { TrendingUp } from 'lucide-react';

// === FIXED IMPORTS ===
import proof1 from '../assets/images/proof1.png';
import proof2 from '../assets/images/proof2.png';
import proof3 from '../assets/images/proof3.png';
import proof4 from '../assets/images/proof4.png';
import proof5 from '../assets/images/proof5.png';
import proof6 from '../assets/images/proof6.png';
import proof7 from '../assets/images/proof7.jpeg';

const EarningsSection = () => {
  // Original proofs array
  const proofs = [proof1, proof2, proof3, proof4, proof5, proof6, proof7];

  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Header Section */}
        <div className="text-center">
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
      </div>

      {/* === INFINITE MARQUEE SLIDER === */}
      <div className="relative w-full overflow-hidden">
          {/* Gradients to hide edges for smooth fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          {/* The Sliding Track */}
          {/* group-hover:paused -> Mouse upar layenge to ruk jayega */}
          <div className="flex w-max gap-8 animate-marquee group hover:[animation-play-state:paused]">
            
            {/* Set 1: Original Images */}
            {proofs.map((src, index) => (
              <div 
                key={`original-${index}`} 
                className="relative flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                 <div className="h-[400px] aspect-[2/3] rounded-2xl bg-white shadow-xl border border-slate-100 p-2 overflow-hidden">
                    <img 
                        src={src} 
                        alt={`Proof ${index + 1}`} 
                        className="h-full w-full object-cover rounded-xl select-none pointer-events-none"
                        loading="lazy"
                    />
                </div>
              </div>
            ))}

            {/* Set 2: Duplicate Images (For Seamless Loop) */}
            {proofs.map((src, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="relative flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                 <div className="h-[400px] aspect-[2/3] rounded-2xl bg-white shadow-xl border border-slate-100 p-2 overflow-hidden">
                    <img 
                        src={src} 
                        alt={`Proof Duplicate ${index + 1}`} 
                        className="h-full w-full object-cover rounded-xl select-none pointer-events-none"
                        loading="lazy"
                    />
                </div>
              </div>
            ))}
            
            {/* Set 3: Extra Buffer (Just in case screen is very wide) */}
            {proofs.map((src, index) => (
              <div 
                key={`buffer-${index}`} 
                className="relative flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                 <div className="h-[400px] aspect-[2/3] rounded-2xl bg-white shadow-xl border border-slate-100 p-2 overflow-hidden">
                    <img 
                        src={src} 
                        alt={`Proof Buffer ${index + 1}`} 
                        className="h-full w-full object-cover rounded-xl select-none pointer-events-none"
                        loading="lazy"
                    />
                </div>
              </div>
            ))}

          </div>

          {/* Mobile Hint */}
          <div className="flex justify-center mt-6 md:hidden">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest animate-pulse">
              Scrolls Automatically • Tap to Pause
            </span>
          </div>
      </div>

    </div>
  );
};

export default EarningsSection;