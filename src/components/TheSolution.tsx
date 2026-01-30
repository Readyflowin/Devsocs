import React from 'react';
import { FileSpreadsheet, Code2, MessageSquare, CheckCircle, Gift } from 'lucide-react';

const TheSolution = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FF4500] font-bold tracking-wider uppercase text-sm">
            What's Inside The Bundle?
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything You Need To Close Your First Client
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            We don't just give you leads and leave you alone. We give you the <span className="text-slate-900 font-semibold">exact system</span> to close them and the tools to deliver the work.
          </p>
        </div>

        {/* The 3 Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Card 1: The DATA (Main Product) */}
          <div className="relative group rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-sm hover:border-orange-200 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
                1. The "Gold" Data
            </h3>
            <p className="text-slate-500 text-sm mb-6 min-h-[40px]">
                250+ Verified Indian Businesses running ads without a website.
            </p>
            <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Direct WhatsApp Numbers
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Ad Library Links
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Excel/CSV Format
                </li>
            </ul>
          </div>

          {/* Card 2: The SCRIPT (Bonus 1) */}
          <div className="relative group rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-sm hover:border-orange-200 hover:shadow-xl transition-all duration-300">
            {/* Bonus Badge */}
            <div className="absolute top-4 right-4 bg-orange-100 text-[#FF4500] text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                <Gift className="w-3 h-3" /> BONUS #1
            </div>

            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
                2. The "Anti-Spam" Script
            </h3>
            <p className="text-slate-500 text-sm mb-6 min-h-[40px]">
                Don't sound like a bot. Use my "Savior" framework that gets replies.
            </p>
            <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" /> Non-Salesy Approach
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" /> "Broken Link" Strategy
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" /> Copy & Paste Ready
                </li>
            </ul>
          </div>

          {/* Card 3: The CODE (Bonus 2) */}
          <div className="relative group rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-sm hover:border-orange-200 hover:shadow-xl transition-all duration-300">
            {/* Bonus Badge */}
            <div className="absolute top-4 right-4 bg-orange-100 text-[#FF4500] text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                <Gift className="w-3 h-3" /> BONUS #2
            </div>

            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
                3. Liquid Code Vault
            </h3>
            <p className="text-slate-500 text-sm mb-6 min-h-[40px]">
                150+ Premium Shopify Snippets to build sites in hours, not days.
            </p>
            <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" /> Sticky Add-To-Cart
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" /> Announcement Bars
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" /> Worth ₹5,000+ (Free)
                </li>
            </ul>
          </div>

        </div>

        {/* Value Summary */}
        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-dashed border-slate-300">
            <p className="text-slate-600 text-lg">
                Total Value: <span className="line-through text-slate-400">₹7,500</span>
                <span className="mx-3 text-slate-300">|</span>
                Your Price: <span className="text-[#FF4500] font-bold text-2xl">₹499 Only</span>
            </p>
        </div>

      </div>
    </div>
  );
};

export default TheSolution;