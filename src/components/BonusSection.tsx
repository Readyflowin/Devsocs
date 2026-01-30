import React from 'react';
import { HelpCircle, AlertTriangle, ArrowRight, Lock, Shield } from 'lucide-react';

const BonusSection = () => {
  return (
    <div className="bg-white py-16 sm:py-24 border-t border-slate-200 relative overflow-hidden">
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgency Box - Clean White Look with Orange Highlight */}
        {/* ADDED: id="pricing-card" for Header navigation */}
        <div id="pricing-card" className="bg-white border-2 border-orange-100 rounded-3xl p-8 text-center mb-16 shadow-2xl shadow-orange-100/50 scroll-mt-32">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 font-bold uppercase tracking-widest text-sm px-3 py-1 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4" /> Batch #1 Closing Soon
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Secure Your Spot Before Price Increases
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            To prevent saturation, we are limiting this list to 75 freelancers only. Once sold out, the price will jump to <span className="font-bold text-slate-900">₹2,499</span>.
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-4 mb-2 overflow-hidden border border-slate-200">
            <div className="bg-[#FF4500] h-full rounded-full w-[35%] animate-pulse relative overflow-hidden">
                {/* Stripe effect on progress bar */}
                <div className="absolute inset-0 bg-white/20" style={{backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem'}}></div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-8 uppercase tracking-wide">
            <span>24 Sold</span>
            <span>75 Total Spots</span>
          </div>

          {/* FINAL CTA BUTTON */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#FF4500] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-orange-500/30">
            Get Instant Access - ₹499
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="mt-4 text-xs text-slate-400 font-medium">
            <Lock className="w-3 h-3 inline mr-1" />
            One-time payment. Instant download via Email.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
                
                {/* Q1 */}
                <details className="group bg-slate-50 rounded-xl p-5 border border-slate-200 cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between font-bold text-slate-800 list-none">
                        Is this data legal to use?
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            <ArrowRight className="w-4 h-4 rotate-90 text-slate-400" />
                        </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                        Yes. This is 100% Public Business Information aggregated from the Meta Ad Library and public Instagram business profiles. We do not sell private personal data. You are contacting businesses via their public contact numbers.
                    </p>
                </details>

                {/* Q2 */}
                <details className="group bg-slate-50 rounded-xl p-5 border border-slate-200 cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between font-bold text-slate-800 list-none">
                        I use WordPress/Framer, is this for me?
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            <ArrowRight className="w-4 h-4 rotate-90 text-slate-400" />
                        </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                        Absolutely. The leads are businesses that need a website. They don't care if you build it in WordPress, Shopify, or React. They just want results. The bonus Liquid codes are for Shopify, but the leads are universal.
                    </p>
                </details>

                {/* Q3 */}
                <details className="group bg-slate-50 rounded-xl p-5 border border-slate-200 cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between font-bold text-slate-800 list-none">
                        How do I get the files?
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            <ArrowRight className="w-4 h-4 rotate-90 text-slate-400" />
                        </span>
                    </summary>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                        Immediately after payment, you will receive an email with the download link for the Excel Sheet, the Script PDF, and the Code Library.
                    </p>
                </details>
            </div>
        </div>

        {/* Footer & Disclaimer */}
        <div className="border-t border-slate-200 pt-12 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                <div>
                    <h4 className="font-bold text-xl mb-2 text-slate-900">DevSocs</h4>
                    <p className="text-slate-500 text-sm max-w-xs">
                        Helping developers and freelancers find high-ticket clients without the grind.
                    </p>
                </div>
                
                {/* Legal Text */}
                <div className="text-xs text-slate-400 max-w-lg text-justify leading-relaxed">
                    <p className="font-bold text-slate-600 mb-1 flex items-center gap-1">
                        <Shield className="w-3 h-3" /> Data Policy & Disclaimer:
                    </p>
                    All information contained in this database is Public Business Information collected manually from the Meta Ad Library and public business profiles where entities were actively advertising. This is a B2B Research Database. It does NOT contain private personal information, home addresses, or sensitive financial data. We aggregate publicly available business contact details to help developers connect with businesses requiring technical services.
                </div>
            </div>
            
            <div className="mt-12 text-center text-slate-400 text-xs">
                © 2026 DevSocs. All rights reserved.
            </div>
        </div>

      </div>
    </div>
  );
};

export default BonusSection;