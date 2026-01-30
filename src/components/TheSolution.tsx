import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Database, Instagram, Zap, Ban } from 'lucide-react';

const TheSolution = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "500+ Manually Verified Leads",
      icon: Database,
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-600 leading-relaxed">
            I didn't use a bot. I manually checked 500+ businesses to ensure they are <b>real, active, and spending money.</b> You get a clean Google Sheet with:
          </p>
          {/* Mini Sheet Mockup */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs overflow-hidden">
             <div className="flex gap-4 border-b border-slate-200 pb-2 mb-2 font-bold text-slate-400 uppercase tracking-wider">
                <span className="w-1/3">Business</span>
                <span className="w-1/3">Status</span>
                <span className="w-1/3">Action</span>
             </div>
             <div className="flex gap-4 items-center text-slate-800 font-medium">
                <span className="w-1/3 truncate">Urban Kicks...</span>
                <span className="w-1/3 text-red-500 bg-red-50 px-1 rounded">No Website</span>
                <span className="w-1/3 text-blue-600 underline">IG Link</span>
             </div>
             <div className="mt-2 text-center text-[10px] text-slate-400 italic">
                +499 more rows inside
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Direct Decision Maker Access",
      icon: Instagram,
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Stop searching for emails that go to spam. I provide <b>Direct Instagram Profile Links.</b> You are one click away from DMing the owner directly.
        </p>
      )
    },
    {
      title: "The 'Ads Active' Filter",
      icon: Zap,
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Why pitch broke clients? Every business on this list is <b>currently running Meta Ads.</b> They have a marketing budget. They just need a developer.
        </p>
      )
    },
    {
      title: "Zero Scraping Tools Needed",
      icon: Ban,
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          You don't need to pay $49/month for scraping software or learn Python. I've done the hard work (100+ hours) for you. Just download and pitch.
        </p>
      )
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-md mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
           <span className="text-[#FF5500] font-bold tracking-widest uppercase text-xs">The Solution</span>
           <h2 className="text-3xl font-black text-slate-900 mt-2">
             What You Get Inside.
           </h2>
           <p className="text-slate-500 text-sm mt-2">
             Everything you need to land your first client tonight.
           </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`border transition-all duration-200 rounded-xl overflow-hidden ${openIndex === index ? 'border-[#FF5500] shadow-md bg-orange-50/10' : 'border-slate-100 shadow-sm bg-white'}`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                     <div className={`p-2 rounded-lg ${openIndex === index ? 'bg-[#FF5500] text-white' : 'bg-orange-100 text-[#FF5500]'}`}>
                        <Icon size={20} />
                     </div>
                     <span className={`font-bold text-lg ${openIndex === index ? 'text-slate-900' : 'text-slate-700'}`}>
                        {feature.title}
                     </span>
                  </div>
                  {openIndex === index ? <ChevronUp size={20} className="text-slate-400"/> : <ChevronDown size={20} className="text-slate-400"/>}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 pl-[4.5rem]">
                     {feature.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TheSolution;