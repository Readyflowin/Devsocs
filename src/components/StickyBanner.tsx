import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackInitiateCheckout } from '../pixelEvents'; // <--- IMPORT ADDED

const StickyBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 animate-slide-up">
      
      {/* === GLASSMORPHISM CONTAINER === */}
      <div className="mx-auto max-w-4xl bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl ring-1 ring-black/5 p-3 flex items-center justify-between gap-4">
        
        {/* Left: Image & Text */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
          {/* Thumbnail Image */}
          <div className="h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 rounded-lg bg-slate-50 p-1 border border-slate-200/50 shadow-sm">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/8832/8832863.png" // Placeholder Icon
              alt="Bundle" 
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          
          {/* Text Info */}
          <div className="flex flex-col">
            <span className="text-slate-600 text-[10px] sm:text-xs uppercase font-bold tracking-wider">
              Limited Time Offer
            </span>
            <div className="flex items-baseline gap-2">
               <span className="text-slate-900 font-bold text-sm sm:text-lg">Verified Leads Bundle</span>
               <span className="text-[#FF4500] font-black text-sm sm:text-xl">₹499</span>
            </div>
          </div>
        </div>

        {/* Right: CTA Button (Updated to Razorpay Link + PIXEL TRACKING) */}
        <a 
            href="https://rzp.io/rzp/devsocs" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout} // <--- TRACKING ADDED HERE
            className="group relative inline-flex items-center justify-center rounded-xl bg-[#FF4500] px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white shadow-lg transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 animate-wobble flex-shrink-0"
        >
          <span className="hidden sm:inline mr-2">Buy Now</span>
          <span className="sm:hidden mr-1">Buy</span>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          
          {/* Shiny overlay effect */}
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/40"></div>
        </a>

      </div>
    </div>
  );
};

export default StickyBanner;