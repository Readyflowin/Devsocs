import React, { useState, useEffect } from 'react';
import { Play, Menu, ShoppingCart, ShieldCheck, CheckCircle2, Star, StarHalf, HardDrive, Lock } from 'lucide-react';

const HeroSection = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);

  // Show sticky footer only after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900 pb-24 md:pb-12">
      
      {/* --- 1. HEADER --- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1 font-black text-xl tracking-tighter cursor-pointer">
            <span className="text-[#FF5500]">LEAD</span>
            <span className="text-slate-900">LIST</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5500] mt-3"></span>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="relative">
                <ShoppingCart size={24} className="text-slate-700" />
                <span className="absolute -top-1 -right-1 bg-[#FF5500] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">1</span>
             </div>
             <Menu size={28} className="text-slate-900" />
          </div>
        </div>
      </header>

      {/* --- 2. HERO CONTENT --- */}
      <section className="relative pt-6 px-4 max-w-md mx-auto text-center">
        
        {/* Real Rating Strip */}
        <div className="flex justify-center items-center gap-2 mb-5">
           <div className="flex items-center space-x-0.5">
              {[1,2,3,4].map(i => <Star key={i} size={16} fill="#FF5500" className="text-[#FF5500]" />)}
              {/* Half Star for 4.3 feeling */}
              <div className="relative">
                <Star size={16} className="text-slate-300" /> {/* Background star */}
                <div className="absolute top-0 left-0 overflow-hidden w-[40%]"> {/* 40% filled */}
                   <Star size={16} fill="#FF5500" className="text-[#FF5500]" />
                </div>
              </div>
           </div>
           <div className="text-xs font-bold text-slate-600 flex flex-col items-start leading-none gap-0.5">
              <span>4.3/5 Rating</span>
              <span className="text-[10px] text-slate-400 font-normal">743 users (Jan 2026)</span>
           </div>
        </div>

        {/* Headline */}
        <h1 className="text-[34px] leading-[1.1] font-black text-slate-900 mb-4 tracking-tight">
          Get Client-Ready <br/>
          <span className="bg-[#FF5500] text-white px-2 rounded-sm transform -rotate-1 inline-block my-1">Leads List</span> in <br/>
          One Click.
        </h1>

        <p className="text-slate-600 text-[15px] leading-relaxed mb-6 font-medium">
          A manual list of <b>500 businesses (Exact)</b> running ads but missing a website. Stop scraping, start closing.
        </p>

        {/* Benefits with Drive Icon */}
        <div className="flex flex-col gap-3 text-left mb-8 pl-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
           <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">500 Active Leads (Verified Jan '26)</span>
           </div>
           <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">Direct Instagram DM Links</span>
           </div>
           <div className="flex items-start gap-3">
              <HardDrive size={18} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">Instant Access via Google Drive</span>
           </div>
        </div>

        {/* --- CTA BUTTON (With Subtle Animation) --- */}
        <button className="w-full bg-[#FF5500] hover:bg-[#e04b00] text-white text-lg font-bold py-4 rounded-xl shadow-xl shadow-orange-500/20 active:scale-95 transition-all mb-3 relative overflow-hidden group">
           {/* Subtle Shine Animation */}
           <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
           <span className="relative z-10 flex items-center justify-center gap-2">
             Download The List Now
           </span>
        </button>
        
        <p className="text-sm font-bold text-slate-900 flex justify-center items-center gap-2">
           Only <span className="text-[#FF5500] text-lg">₹499</span> <span className="text-slate-400 line-through text-xs font-normal">₹2,999</span>
        </p>

        {/* --- PHONE MOCKUP --- */}
        <div className="mt-10 relative group cursor-pointer">
           <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100 inline-block">
                 <div className="relative rounded-[2rem] overflow-hidden border-4 border-slate-900 w-[260px] h-[520px] bg-slate-900 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-80"
                      alt="Demo"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-[pulse_3s_ease-in-out_infinite]">
                          <Play size={28} className="ml-1 text-[#FF5500] fill-[#FF5500]"/>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Floating Label */}
           <div className="absolute top-1/2 -right-2 bg-white shadow-lg p-2 rounded-lg border border-slate-100 animate-bounce delay-700 z-20">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Proof</div>
              <div className="text-xs font-bold text-green-600 flex items-center gap-1">
                 <ShieldCheck size={12}/> Verified
              </div>
           </div>
        </div>

      </section>

      {/* --- STICKY MOBILE FOOTER (Visible on Scroll) --- */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-3 z-50 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)] transition-transform duration-300 md:hidden ${showStickyNav ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase font-bold">Offer Price</span>
            <span className="text-lg font-black text-slate-900">₹499 <span className="text-slate-400 text-xs line-through font-normal">₹2999</span></span>
         </div>
         <button className="bg-[#FF5500] text-white px-8 py-3 rounded-lg font-bold shadow-lg active:scale-95 transition-transform flex items-center gap-2">
            Buy Now <Lock size={14} className="opacity-80"/>
         </button>
      </div>

    </div>
  );
};

export default HeroSection;