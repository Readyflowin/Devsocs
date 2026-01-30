import React from 'react';
import { X, Check, Search, AlertCircle, ArrowRight } from 'lucide-react';

const PainProblem = () => {
  return (
    <div className="bg-white py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Most Freelancers Quit Within 3 Months
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            The problem isn't your coding skill. The problem is <span className="text-red-500 font-semibold">who you are pitching to.</span>
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ❌ THE STRUGGLE (Left Side) */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 opacity-90 hover:opacity-100 transition-opacity">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
              The Old Way
            </div>
            
            <ul className="space-y-6 mt-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Cold DMing Random Pages</h4>
                  <p className="text-slate-500 text-sm">Messaging businesses who don't even have a budget for a logo, let alone a website.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Competing on Price</h4>
                  <p className="text-slate-500 text-sm">"Brother, price kam karo." Fighting with 50 other freelancers on Upwork for $10.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Zero Response</h4>
                 <p className="text-slate-500 text-sm">Sending 100 messages &rarr; Getting "Seen" &rarr; Getting Blocked. Painful.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* ✅ THE DEVSOCS WAY (Right Side - Highlighted) */}
          <div className="relative rounded-3xl border-2 border-[#FF4500] bg-orange-50/50 p-8 sm:p-10 shadow-2xl scale-105 md:scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4500] text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
              The DevSocs Method
            </div>

            <ul className="space-y-6 mt-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">Target "Spenders"</h4>
                  <p className="text-slate-600 text-sm">We only pitch businesses actively spending ₹50k+ on Ads. They <b>have</b> money.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">The "Savior" Pitch</h4>
                  <p className="text-slate-600 text-sm">You don't sell; you alert them: "Your ad link is broken." They reply instantly to thank you.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900">High Ticket Closing</h4>
                  <p className="text-slate-600 text-sm">Since they are already burning money on ads, paying ₹15k-20k for a site is cheap for them.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Psychological Hook Footer */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg text-slate-700 font-medium">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <span>You stop being a "Salesman" and become a "Consultant". That changes everything.</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PainProblem;