import React from 'react';
import { ShieldCheck, Database, Smartphone, ExternalLink } from 'lucide-react';

const TrustWall = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold text-orange-700 uppercase tracking-wide">100% Verified Data</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            We Don't Guess. We Verify.
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Every lead in this sheet has passed our 3-step manual verification process. We don't sell scraped junk; we sell qualified leads.
          </p>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: The Spender Proof */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden relative group">
                {/* Placeholder Image - Replace with Ad Library Screenshot */}
                <img 
                    src="/image/data1.jpg" 
                    alt="Active Ad Library Status" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                    ACTIVE
                </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                They Have Budget
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
                We manually check Meta Ad Library. If they are not running ads <i>right now</i>, they are not on the list.
            </p>
          </div>

          {/* Card 2: The Opportunity Proof */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden relative group">
                {/* Placeholder Image - Replace with Instagram Bio/Linktree Screenshot */}
                <img 
                    src="/image/data2.jpg" 
                    alt="Instagram Bio with Linktree" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded border border-red-200">
                    NO WEBSITE
                </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                They Need You
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
                They are sending paid traffic to WhatsApp or Linktree. They are literally burning money. You are the savior.
            </p>
          </div>

          {/* Card 3: The Asset Proof */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden relative group">
                {/* Placeholder Image - Replace with Excel Sheet Screenshot */}
                <img 
                    src="/image/data3.jpg" 
                    alt="Excel Sheet Database" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <Database className="w-6 h-6 text-orange-600 mx-auto" />
                </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                Direct Access
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
                No "info@" emails. You get direct Instagram Id's. Copy, paste, and close.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TrustWall;