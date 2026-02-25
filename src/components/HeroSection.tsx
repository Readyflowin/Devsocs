import React, { useState } from 'react';
import { ArrowDown, CheckCircle, Lock } from 'lucide-react';
import { trackInitiateCheckout, trackVideoClick } from '../pixelEvents';

// IMPORT YOUR THUMBNAIL HERE
// Make sure the file exists at src/assets/images/thumbnail.png
import videoThumbnail from '../assets/images/thumbnail.png'; 

const HeroSection = () => {
  // State to handle video playing
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    trackVideoClick(); // Fire pixel event
    setIsPlaying(true); // Switch to iframe
  };

  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-40 lg:pb-24">
      
      {/* === BACKGROUND PATTERN START === */}
      <div className="absolute inset-0 z-0">
          <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#FF4500] opacity-20 blur-[100px]"></div>
      </div>
      {/* === BACKGROUND PATTERN END === */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 mb-6 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2 animate-pulse"></span>
          <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">
            New Protocol • Updated Feb 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
          Stop Begging for Work. <br className="hidden sm:block" />
          Get Your Next High-Paying Client in the <span className="text-[#FF4500] underline decoration-4 decoration-orange-200 underline-offset-4">Next 24 Hours.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8 leading-relaxed">
          Most freelancers fail because they don't have data. Stop guessing. <b>Steal</b> my exact <b>15-Minute Hunting Protocol</b> AND get <b>250 Verified Leads</b> handed to you as <b>STARTER BONUS</b>.
        </p>

        {/* ================= VIDEO SECTION START ================= */}
        <div className="mx-auto max-w-3xl mb-12 relative group">
            
            {/* If Playing: Show YouTube Iframe */}
            {isPlaying ? (
              <div className="aspect-video rounded-xl bg-black shadow-2xl overflow-hidden border border-slate-800">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/one8mjK9zBc?autoplay=1&rel=0" 
                  title="DevSocs Lead Finding Method" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              /* If Not Playing: Show Image Thumbnail + Play Button */
              <div 
                onClick={handleVideoClick}
                className="cursor-pointer relative aspect-video rounded-xl shadow-2xl overflow-hidden border border-slate-200 group-hover:scale-[1.01] transition-transform duration-300"
              >
                {/* 1. The Image */}
                <img 
                    src={videoThumbnail} 
                    alt="Watch how to get leads" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* 2. Dark Overlay (to make play button pop) */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>

                {/* 3. The Play Button Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-orange-600/90 rounded-full flex items-center justify-center pl-1 shadow-lg backdrop-blur-sm border-2 border-white/20 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>

                {/* 4. Text Label Below Button */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-white font-medium tracking-wide drop-shadow-md bg-black/40 inline-block px-3 py-1 rounded-full text-sm">
                        Watch how it works (only 2 Mins) 
                    </p>
                </div>
              </div>
            )}
        </div>
        {/* ================= VIDEO SECTION END ================= */}

        {/* CTA Button Area */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
          
          <a 
            href="https://rzp.io/rzp/devsocs" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="group relative inline-flex items-center justify-center rounded-xl bg-[#FF4500] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
          I WANT TO LEARN THE PROTOCOL
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40"></div>
          </a>
          
          <p className="text-sm text-slate-500 flex items-center gap-1">
            <Lock className="w-3 h-3" /> Secure Payment via UPI
          </p>
        </div>

        {/* THE STACK VISUAL */}
        <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                Works for finding clients in
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
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> No Theory, Just Action</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> Copy-Paste Scripts Included</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> 100% Verified Data</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;