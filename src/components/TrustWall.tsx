import React from 'react';
import { ShieldCheck, PlayCircle, CheckCircle2 } from 'lucide-react';
// IMPORT TRACKING (Important for this strategy)
import { trackInitiateCheckout } from '../pixelEvents';

// === IMPORT IMAGES ===
import data1 from '../assets/images/data1.png'; // Ad Library / Budget Proof
import data2 from '../assets/images/data2.png'; // VIDEO THUMBNAIL SCREENSHOT
import data3 from '../assets/images/data3.png'; // Excel / Direct Access

const TrustWall = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-1.5 rounded-full mb-5 border border-green-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-green-700" />
            <span className="text-xs font-bold text-green-800 uppercase tracking-widest">3-Step Verification System</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            The "Unfair Advantage" Stack
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Most freelancers fail because they have one piece of the puzzle. We give you all three: <b>The Budget, The Method, and The Access.</b>
          </p>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: THE TARGET (Budget) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
            <div className="aspect-video bg-slate-100 rounded-xl mb-5 overflow-hidden relative shadow-inner">
                {/* Ad Library Screenshot */}
                <img 
                    src={data1} 
                    alt="Active Ad Library Status" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> ACTIVE SPENDER
                </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
                1. The Verified Target 🎯
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                We verified that these businesses are <b>burning money on ads right now</b> but have NO website. They are desperate for a solution.
            </p>
          </div>

          {/* Card 2: THE METHOD (Video) - HERO CARD (CLICKABLE) */}
          <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-2 transition-all duration-300 group z-10 h-full">
            {/* "Most Important" Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF4500] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wide uppercase">
                The Protocol
            </div>
            
            {/* LINK TO PAYMENT PAGE */}
            <a 
                href="https://pages.razorpay.com/devsocs" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="block aspect-video bg-slate-900 rounded-xl mb-5 overflow-hidden relative shadow-lg group-hover:shadow-orange-200/50 transition-shadow cursor-pointer"
            >
                {/* VIDEO SCREENSHOT */}
                <img 
                    src={data2} 
                    alt="15 Minute Method Video" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <PlayCircle className="w-14 h-14 text-white fill-orange-600/20 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="mt-2 text-white font-bold text-xs bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/20 group-hover:bg-[#FF4500] group-hover:border-[#FF4500] transition-colors">
                        UNLOCK VIDEO 🔒
                    </span>
                </div>
            </a>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
                2. The Execution Method ⚡
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                Data is useless if you don't know what to say. Watch my <b>15-minute raw video</b> where I show you exactly how to approach and close them.
            </p>
          </div>

          {/* Card 3: THE ACCESS (Direct) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
            <div className="aspect-video bg-slate-100 rounded-xl mb-5 overflow-hidden relative shadow-inner">
                {/* Excel/Phone Screenshot */}
                <img 
                    src={data3} 
                    alt="Direct Contact Data" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded border border-blue-100 shadow-sm">
                    DIRECT ACCESS
                </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
                3. The Direct Line 📲
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                No "info@" emails. No gatekeepers. You get the <b>Personal Instagram</b> and <b>WhatsApp numbers</b> of the decision makers.
            </p>
          </div>

        </div>

        {/* Mobile-optimized bounce animation (respects reduced-motion) */}
        <style>{`
          @keyframes subtle-bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0); }
          }
          @media (max-width: 767px) {
            .cta-subtle-bounce {
              animation: subtle-bounce 3s ease-in-out infinite;
              will-change: transform;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .cta-subtle-bounce { animation: none !important; }
          }
        `}</style>

        {/* CTA BUTTON - placed below the grid (mobile-optimized + bounce) */}
        <div className="flex justify-center mt-6 px-4 sm:px-0">
          <a
            href="https://pages.razorpay.com/devsocs"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            aria-label="Purchase 250 leads bundle and Instagram method"
            className={
              'cta-subtle-bounce w-11/12 max-w-xl sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 bg-[#FF4500] hover:bg-[#ff5722] text-white font-bold rounded-xl sm:rounded-full shadow-lg transition-transform focus:outline-none focus:ring-4 focus:ring-orange-200 text-sm sm:text-base text-center'
            }
          >
            <span className="block leading-tight">
              <span className="block">YES — I WANT THE BUNDLE</span>

            </span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default TrustWall;