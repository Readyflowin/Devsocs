import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';

// === IMPORTS ===
import proof1 from '../assets/images/proof1.png';
import proof2 from '../assets/images/proof2.png';
import proof3 from '../assets/images/proof3.png';
import proof4 from '../assets/images/proof4.png';
import proof5 from '../assets/images/proof5.png';
import proof6 from '../assets/images/proof6.png';
import proof7 from '../assets/images/proof7.jpeg';

const EarningsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Images ko 3 baar repeat kiya taaki "Infinite" feel aaye
  const originalProofs = [proof1, proof2, proof3, proof4, proof5, proof6, proof7];
  const proofs = [...originalProofs, ...originalProofs, ...originalProofs];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        // Speed: 1px add kar rahe hain har frame mein (Slow & Smooth)
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
          // Agar end ke paas pohanch gaye, toh wapas start (seamless loop) pe jump karo
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        } else {
          scrollContainer.scrollLeft += 1; 
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-2">
            This System Works. Here is The Proof.
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
             <TrendingUp className="w-6 h-6 text-green-600" />
             <p className="text-slate-600 font-medium">Results from last month</p>
          </div>
          
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

      {/* === AUTO + MANUAL SCROLL CONTAINER === */}
      <div className="relative w-full">
          
          {/* Gradients to fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          {/* SCROLLABLE AREA */}
          <div 
            ref={scrollRef}
            // Logic: Mouse enter/Touch start par pause karo taaki user scroll kar sake
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
                // Thoda delay taaki user swipe karke hath hataye toh turant na bhage
                setTimeout(() => setIsPaused(false), 2000);
            }}
            className="flex overflow-x-auto gap-6 py-8 px-4 scrollbar-hide select-none cursor-grab active:cursor-grabbing"
            style={{ 
                scrollbarWidth: 'none', // Firefox hide
                msOverflowStyle: 'none', // IE hide
            }}
          >
            {proofs.map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                 <div className="h-[400px] aspect-[2/3] rounded-2xl bg-white shadow-xl border border-slate-100 p-2 overflow-hidden">
                    <img 
                        src={src} 
                        alt={`Proof ${index}`} 
                        className="h-full w-full object-cover rounded-xl pointer-events-none" 
                        // pointer-events-none isliye taaki drag karne mein image select na ho
                        loading="lazy"
                    />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Hint */}
          <div className="flex justify-center mt-2 md:hidden">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest animate-pulse">
              {isPaused ? "Swipe to scroll" : "Tap to pause & scroll"}
            </span>
          </div>
      </div>

    </div>
  );
};

export default EarningsSection;