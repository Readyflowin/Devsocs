import React from 'react';
import { ArrowDown, CheckCircle, Lock } from 'lucide-react';

const HeroSection = () => {
  return (
    // UPDATED: Changed pt-32 to pt-24 (Reduced gap for mobile)
    <div className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-40 lg:pb-24">
      
      {/* === BACKGROUND PATTERN START === */}
      <div className="absolute inset-0 z-0">
          {/* 1. Base Grid Pattern */}
          <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* 2. Radial Gradient for 3D Depth (Spotlight Effect) */}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#FF4500] opacity-20 blur-[100px]"></div>
      </div>
      {/* === BACKGROUND PATTERN END === */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 mb-6 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2 animate-pulse"></span>
          <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">
            Verified Leads • Updated Jan 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
          Stop Pitching Broke Clients. <br className="hidden sm:block" />
          Get <span className="text-[#FF4500] underline decoration-4 decoration-orange-200 underline-offset-4">250+ Leads</span> Who Are Burning Money On Ads.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8 leading-relaxed">
          Don't send 100 cold DMs to randoms. Download the verified list of Indian businesses active <b>right now</b> without a website + get the exact scripts to close them.
        </p>

        {/* ================= VIDEO PLACEHOLDER START ================= */}
        <div className="mx-auto max-w-3xl mb-12 relative group cursor-pointer">
            {/* Glow Effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative aspect-video rounded-xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-300">
                 
                 {/* Placeholder Content */}
                 <div className="text-center">
                     <div className="mx-auto w-20 h-20 bg-orange-600/90 rounded-full flex items-center justify-center mb-4 pl-1 shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm border-2 border-white/20">
                        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                     </div>
                     <p className="text-slate-400 font-medium tracking-wide">Watch: How I find these leads in 2 mins</p>
                 </div>

            </div>
        </div>
        {/* ================= VIDEO PLACEHOLDER END ================= */}

        {/* CTA Button Area */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
          <button className="group relative inline-flex items-center justify-center rounded-xl bg-[#FF4500] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            Download the Bundle - ₹499
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            
            {/* Shiny effect on button */}
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40"></div>
          </button>
          
          <p className="text-sm text-slate-500 flex items-center gap-1">
            <Lock className="w-3 h-3" /> Secure Payment via UPI
          </p>
        </div>

        {/* THE STACK VISUAL */}
        <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                Get Clients For Any Tech Stack
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-500">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="WordPress" className="h-9 md:h-11 w-auto drop-shadow-sm hover:scale-110 transition-transform" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-8 md:h-10 w-auto drop-shadow-sm hover:scale-110 transition-transform" />
                <svg viewBox="0 0 24 24" className="h-8 md:h-10 w-auto fill-black hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><title>Framer</title><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
                <svg viewBox="0 0 24 24" className="h-8 md:h-10 w-auto fill-black hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
            </div>
        </div>

      </div>

      {/* Trust Ticker */}
      <div className="mt-16 border-y border-slate-100 bg-slate-50/80 backdrop-blur-sm py-3 overflow-hidden relative z-10">
        <div className="flex items-center justify-center gap-8 text-sm font-medium text-slate-500 sm:gap-16">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> Instant Download</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> 250+ Verified Numbers</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> Lifetime Access</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;