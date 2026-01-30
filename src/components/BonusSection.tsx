import React from 'react';
import { Gift, MessageSquare, FileText, Shield, Check } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      title: "My Copy-Paste DM Script",
      value: "₹1,999",
      desc: "The exact message I sent to earn ₹74k. It's not salesy. It forces them to reply.",
      icon: <MessageSquare className="text-white" size={24} />,
      color: "bg-blue-500"
    },
    {
      title: "The 'No Website' Proposal",
      value: "₹2,499",
      desc: "A PDF template showing them why they are losing money without a site. Send this and look like a pro agency.",
      icon: <FileText className="text-white" size={24} />,
      color: "bg-purple-500"
    },
    {
      title: "Freelance Contract Template",
      value: "₹999",
      desc: "Don't get scammed. Use this legal agreement to ensure you get paid 50% upfront.",
      icon: <Shield className="text-white" size={24} />,
      color: "bg-green-500"
    }
  ];

  return (
    <section className="bg-slate-900 py-16 px-4 text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500] opacity-10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-10">
           <div className="inline-flex items-center gap-2 bg-[#FF5500] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 animate-bounce">
              <Gift size={12} />
              <span>Free Fast Action Bonuses</span>
           </div>
           <h2 className="text-3xl font-black mb-2">
             Wait, There's More.
           </h2>
           <p className="text-slate-400 text-sm">
             Order today and get these <b>3 Gifts for FREE.</b>
           </p>
        </div>

        {/* --- BONUS CARDS --- */}
        <div className="space-y-6">
           {bonuses.map((bonus, index) => (
             <div key={index} className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl flex gap-4 items-start relative overflow-hidden group hover:border-[#FF5500]/50 transition-colors">
                
                {/* Icon Box */}
                <div className={`${bonus.color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg mt-1`}>
                   {bonus.icon}
                </div>

                {/* Content */}
                <div>
                   <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg leading-tight">{bonus.title}</h3>
                      <span className="bg-slate-700 text-[10px] px-2 py-0.5 rounded text-slate-300 font-mono">
                         Valued {bonus.value}
                      </span>
                   </div>
                   <p className="text-slate-400 text-xs leading-relaxed">
                      {bonus.desc}
                   </p>
                </div>

                {/* 'FREE' Stamp */}
                <div className="absolute -bottom-2 -right-2 bg-[#FF5500] text-white text-[10px] font-bold px-3 py-1 rounded-tl-lg opacity-90">
                   FREE
                </div>
             </div>
           ))}
        </div>

        {/* --- TOTAL VALUE SUMMARY --- */}
        <div className="mt-10 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
           <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Total Bonus Value</p>
           <p className="text-3xl font-black text-white line-through decoration-[#FF5500] decoration-4">₹5,497</p>
           <p className="text-[#FF5500] font-bold text-xl mt-1">Yours Free.</p>
        </div>

      </div>
    </section>
  );
};

export default BonusSection;