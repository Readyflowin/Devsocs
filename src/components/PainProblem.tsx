import React from 'react';
import { XCircle, SearchX, UserX, ArrowDown } from 'lucide-react';

const PainProblem = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 border-b border-slate-200">
      <div className="max-w-md mx-auto">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-10">
           <h2 className="text-3xl font-black text-slate-900 leading-tight mb-4">
             Why Most Freelancers <br/>
             <span className="text-red-600 bg-red-50 px-2 rounded">Fail in 2026.</span>
           </h2>
           <p className="text-slate-500 font-medium">
             It's not your skill. It's who you are pitching.
           </p>
        </div>

        {/* --- PAIN CARDS --- */}
        <div className="space-y-4">
           
           {/* Problem 1 */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex gap-4 items-start">
              <div className="bg-red-50 p-2 rounded-full shrink-0 mt-1">
                 <SearchX className="text-red-500" size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 text-lg mb-1">The "Broke" Client Trap</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">
                    You pitch businesses that have zero budget. If they aren't running ads, they likely won't pay you ₹15k for a website.
                 </p>
              </div>
           </div>

           {/* Problem 2 */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex gap-4 items-start">
              <div className="bg-red-50 p-2 rounded-full shrink-0 mt-1">
                 <UserX className="text-red-500" size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 text-lg mb-1">The "Ghosting" Reality</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">
                    You send 50 DMs and get 0 replies because you are messaging inactive accounts or gatekeepers, not the owners.
                 </p>
              </div>
           </div>

           {/* Problem 3 */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex gap-4 items-start">
              <div className="bg-red-50 p-2 rounded-full shrink-0 mt-1">
                 <XCircle className="text-red-500" size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 text-lg mb-1">The "Scraping" Hell</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">
                    Manual scraping takes 20 hours/week. Tools cost Rs 499/month. You waste time finding leads instead of closing them.
                 </p>
              </div>
           </div>

        </div>

        {/* --- TRANSITION TO SOLUTION --- */}
        <div className="mt-12 text-center">
           <p className="text-lg font-bold text-slate-900 mb-2">There is a smarter way. 👇</p>
           <div className="flex justify-center">
              <ArrowDown className="text-[#FF5500] animate-bounce" size={24} />
           </div>
        </div>

      </div>
    </section>
  );
};

export default PainProblem;