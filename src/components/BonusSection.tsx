import React from 'react';
import { AlertTriangle, ArrowRight, Lock } from 'lucide-react';
// IMPORT TRACKING EVENT
import { trackInitiateCheckout } from '../pixelEvents';

// === IMPORT YOUR 3D BONUS IMAGES ===
import bonus1 from '../assets/images/bonus1.png'; // Excel/Database
import bonus2 from '../assets/images/bonus2.png'; // Playbook
import bonus3 from '../assets/images/bonus3.png'; // Code/Tech

const BonusSection = () => {
  return (
    <div className="bg-white py-16 sm:py-24 border-t border-slate-200 relative overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= NEW SECTION: WHAT'S INSIDE (3D BONUSES) ================= */}
        <div className="text-center mb-20">
            <span className="text-[#FF4500] font-bold tracking-wider uppercase text-sm">Total Value: ₹5,000+</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-12">
                What's Included in the ₹499 Bundle?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                
                {/* Bonus 1: The Protocol Video */}
                <div className="group relative bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-100/50 shadow-sm hover:shadow-2xl hover:shadow-orange-100/30 transition-all duration-500">
                    <div className="relative h-56 mb-6 flex items-center justify-center">
                        <div className="absolute inset-0 bg-orange-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <img 
                            src={bonus2} 
                            alt="The 15-Minute Protocol" 
                            className="relative h-full w-auto object-contain drop-shadow-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-3 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">1. The 15-Min Client Protocol</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        My internal SOP video. Watch me find, qualify, and contact a high-ticket client in real-time. 
                        <span className="block mt-2 font-bold text-orange-600">Value: ₹2,500</span>
                    </p>
                </div>

                {/* Bonus 2: The 250 leads */}
                <div className="group relative bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-100/50 shadow-sm hover:shadow-2xl hover:shadow-orange-100/30 transition-all duration-500">
                    <div className="relative h-56 mb-6 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <img 
                            src={bonus1} 
                            alt="250 Verified Leads" 
                            className="relative h-full w-auto object-contain drop-shadow-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-3 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">2. 250 Verified "Ready-to-Close" Leads</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Don't start from zero. Get 250 Verified businesses Instagram Handles that need a website <b>today</b>.
                        <span className="block mt-2 font-bold text-orange-600">Value: ₹2,000</span>
                    </p>
                </div>

                {/* Bonus 3: Scripts & Assets */}
                <div className="group relative bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-100/50 shadow-sm hover:shadow-2xl hover:shadow-orange-100/30 transition-all duration-500">
                    <div className="relative h-56 mb-6 flex items-center justify-center">
                        <div className="absolute inset-0 bg-green-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <img 
                            src={bonus3} 
                            alt="Scripts & Code" 
                            className="relative h-full w-auto object-contain drop-shadow-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-3 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">3. Copy-Paste Scripts</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Exact DM & WhatsApp scripts tested to get replies. Plus bonus Shopify code snippets to speed up your work.
                        <span className="block mt-2 font-bold text-orange-600">Value: ₹1,500</span>
                    </p>
                </div>

            </div>
        </div>
        
        {/* Urgency Box */}
        <div id="pricing-card" className="bg-white border-2 border-orange-100 rounded-3xl p-8 text-center mb-16 shadow-2xl shadow-orange-100/50 scroll-mt-32 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 font-bold uppercase tracking-widest text-sm px-3 py-1 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4" /> Limited Availability
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Get The Full System For Less Than A Pizza
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
             You only need ONE client from the 250 leads to make your money back <b>40x over</b>.
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-4 mb-2 overflow-hidden border border-slate-200">
            <div className="bg-[#FF4500] h-full rounded-full w-[65%] animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20" style={{backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem'}}></div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-8 uppercase tracking-wide">
            <span>Slots Filling Fast</span>
            <span>Current Batch Closing Soon</span>
          </div>

          {/* FINAL CTA BUTTON - UPDATED WITH TRACKING */}
          <a 
            href="https://rzp.io/rzp/devsocs" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#FF4500] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-orange-500/30"
          >
            Get Instant Access - ₹499
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          
          <p className="mt-4 text-xs text-slate-400 font-medium">
            <Lock className="w-3 h-3 inline mr-1" />
            Secure Payment via UPI • Instant Access
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group bg-slate-50 rounded-xl p-5 border border-slate-200 cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between font-bold text-slate-800 list-none">
                        Why are you giving the method + leads for just ₹499?
                        <span className="transition-transform duration-300 group-open:rotate-180"><ArrowRight className="w-4 h-4 rotate-90 text-slate-400" /></span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                        Fair question. We want you to succeed. By giving you the <b>Method</b> (to fish forever) and <b>50 Leads</b> (to eat today), we ensure you get results. We make our money on the volume of people we help, not by overcharging a few.
                    </p>
                </details>
                <details className="group bg-slate-50 rounded-xl p-5 border border-slate-200 cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between font-bold text-slate-800 list-none">
                        Is this just a list of random numbers?
                        <span className="transition-transform duration-300 group-open:rotate-180"><ArrowRight className="w-4 h-4 rotate-90 text-slate-400" /></span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                        No. These are businesses currently running ads but missing a website. We verify them. You get the Business Name, Phone Number, and Instagram Handle.
                    </p>
                </details>
                <details className="group bg-slate-50 rounded-xl p-5 border border-slate-200 cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between font-bold text-slate-800 list-none">
                        I am a total beginner, will this work?
                        <span className="transition-transform duration-300 group-open:rotate-180"><ArrowRight className="w-4 h-4 rotate-90 text-slate-400" /></span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                        Yes. The "15-Minute Protocol" video is designed for beginners. We show you exactly what to click, what to say, and how to close. No prior experience needed.
                    </p>
                </details>
                <details className="group bg-slate-50 rounded-xl p-5 border border-slate-200 cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between font-bold text-slate-800 list-none">
                        How do I access the files?
                        <span className="transition-transform duration-300 group-open:rotate-180"><ArrowRight className="w-4 h-4 rotate-90 text-slate-400" /></span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                        Instantly. After payment, you will be redirected to the download page and also receive an email with the Google Drive link containing the Video, Lead Sheet, and Scripts.
                    </p>
                </details>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BonusSection;