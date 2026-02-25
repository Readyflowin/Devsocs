import React from 'react';
import { X, Check, Search, AlertCircle, Zap, Ban } from 'lucide-react';

const PainProblem = () => {
  return (
    <div className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header - Aggressive Pivot from Volume to Quality */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            You Don't Need 1,000 Leads. <br className="hidden sm:block" />
            <span className="text-[#FF4500]">You Need 50 People Who Actually Pay.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Stop "Spray and Pray." Stop buying Excel sheets full of dead emails. 
            The secret isn't volume—it's <span className="text-slate-900 font-bold">The Protocol.</span>
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ❌ THE OLD WAY (Buying Bulk Junk) */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 opacity-70 hover:opacity-100 transition-opacity">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 text-slate-700 px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              The Amateur Way
            </div>
            
            <ul className="space-y-6 mt-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <Ban className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-800">Hoarding "Scraped" Data</h4>
                  <p className="text-slate-500 text-sm">Downloading lists of 500+ random emails. 90% bounce, 10% mark you as spam. Zero replies.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-800">The "Template" Trap</h4>
                  <p className="text-slate-500 text-sm">Sending the same generic "I can do web design" copy to everyone. You look like a bot.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-800">No Strategy, Just Hope</h4>
                  <p className="text-slate-500 text-sm">You have leads, but you don't know <i>how</i> to talk to them. You burn through 250 leads and get ₹0.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* ✅ THE DEVSOCS WAY (Protocol + Verified Leads) */}
          <div className="relative rounded-3xl border-2 border-[#FF4500] bg-orange-50/40 p-8 sm:p-10 shadow-2xl scale-105 md:scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4500] text-white px-6 py-2 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg flex items-center gap-2">
               <Zap className="w-4 h-4 fill-white" /> The "Sniper" Method
            </div>

            <ul className="space-y-6 mt-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-[#FF4500]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">The 15-Minute Protocol <span className="text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded ml-2">NEW</span></h4>
                  <p className="text-slate-700 text-sm">We don't just give you fish; we teach you to fish. Watch the video, learn the pitch, and never struggle again.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-[#FF4500]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">50 "Ready-to-Close" Leads</h4>
                  <p className="text-slate-700 text-sm">No junk. These are verified businesses actively spending money. <b>50 High-Quality Leads</b>.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-[#FF4500]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">High Conversion Rate</h4>
                  <p className="text-slate-700 text-sm">Use these 250 leads as your practice ground. Even if you mess up 49 times, you only need one 'Yes' to turn ₹499 into ₹20,000.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Psychological Hook Footer */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg text-slate-700 font-medium border border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#FF4500]" />
                <span><span className="font-bold">Fact:</span> It's better to pitch 50 people perfectly than to spam 1,000 people poorly.</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PainProblem;