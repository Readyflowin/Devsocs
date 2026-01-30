import React from 'react';
import { TrendingUp, ShieldCheck, AlertCircle, ArrowDown } from 'lucide-react';

const EarningsSection = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 border-b border-slate-200">
      <div className="max-w-md mx-auto text-center">
        
        {/* --- HEADLINE --- */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-green-200">
           <TrendingUp size={12} />
           <span>Results from Jan 2026</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">
           <span className="text-[#FF5500]">₹74,300</span> Earned in <br/>
           Just 30 Days.
        </h2>

        <p className="text-slate-600 text-sm font-medium mb-8 leading-relaxed max-w-xs mx-auto">
           Imagine adding this to your bank account next month. No cold calling. No begging. Just pitching clients who <b>already have money.</b>
        </p>

        {/* --- PROOF VISUAL (The Screenshot Container) --- */}
        <div className="relative group">
           
           {/* Decorative Background Blob */}
           <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-orange-200 rounded-full blur-[60px] opacity-40 -z-10"></div>

           {/* The Image Frame */}
           <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-slate-200 transform transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Fake Browser/App Header for realism */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2 px-1">
                 <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Bank Statement • HDFC
                 </div>
              </div>

              {/* YOUR SCREENSHOT GOES HERE */}
              <div className="relative overflow-hidden rounded-lg bg-slate-50 border border-slate-100 aspect-[4/5] flex items-center justify-center group-hover:shadow-inner transition-shadow">
                 
                 {/* Placeholder Text (Replace with <img src={YourScreenshot} />) */}
                 <div className="text-center p-6">
                    <p className="text-xs text-slate-400 mb-2">Payment Screenshot Placeholder</p>
                    <div className="w-32 h-8 bg-slate-200 rounded mx-auto mb-2 animate-pulse"></div>
                    <div className="w-24 h-4 bg-slate-200 rounded mx-auto animate-pulse delay-75"></div>
                    
                    {/* Instructions for you */}
                    <div className="mt-8 border-2 border-dashed border-[#FF5500]/30 bg-[#FF5500]/5 p-4 rounded-lg">
                       <p className="text-[#FF5500] text-xs font-bold">👇 Replace this with your ₹74k screenshot</p>
                       <p className="text-[10px] text-slate-500 mt-1">Crop sensitive details but keep the Amount visible.</p>
                    </div>
                 </div>

                 {/* "Verified" Stamp Overlay */}
                 <div className="absolute bottom-4 right-4 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1 opacity-90">
                    <ShieldCheck size={12} /> Verified Payment
                 </div>
              </div>
           </div>

           {/* Floating Caption */}
           <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-lg px-4 py-2 rounded-full text-xs font-bold text-slate-700 whitespace-nowrap flex items-center gap-2">
              <AlertCircle size={14} className="text-[#FF5500]" />
              <span>Not "Inspect Element" — This is Real.</span>
           </div>
        </div>

        <div className="mt-12 flex justify-center">
           <ArrowDown className="text-slate-300 animate-bounce" size={24} />
        </div>

      </div>
    </section>
  );
};

export default EarningsSection;