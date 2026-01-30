import React from 'react';
import { Lock, Star } from 'lucide-react';

const TrustWall = () => {
  // Random 1080x1920 placeholders for now
  const reviews = [
    "https://images.unsplash.com/photo-1611162616305-c69b3fae27c5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162616305-c69b3fae27c5?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <section className="bg-white py-16 border-t border-slate-100 overflow-hidden">
      <div className="max-w-md mx-auto text-center px-4 mb-8">
        
        {/* --- HEADLINE --- */}
        <div className="flex justify-center mb-2">
           {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FF5500" className="text-[#FF5500]"/>)}
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
           Wall of <span className="text-[#FF5500]">Wins.</span>
        </h2>
        <p className="text-slate-500 text-sm font-medium">
           Swipe to see real conversations. 👇
        </p>
      </div>

      {/* --- HORIZONTAL SCROLL SLIDESHOW --- */}
      {/* 'no-scrollbar' class hide karne ke liye custom CSS chahiye hoti hai, 
          hum inline style use karenge taaki scrollbar na dikhe par swipe kaam kare */}
      <div 
        className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
         {reviews.map((img, index) => (
           <div key={index} className="min-w-[280px] snap-center relative group first:pl-2">
              {/* Phone Frame */}
              <div className="bg-slate-900 p-2 rounded-[2rem] border-4 border-slate-100 shadow-xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                 <div className="relative overflow-hidden rounded-[1.5rem] aspect-[9/16] bg-slate-800">
                    
                    {/* Header Strip for Realism */}
                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center px-4 gap-2">
                       <div className="w-6 h-6 rounded-full bg-slate-200/20"></div>
                       <div className="h-2 w-20 bg-slate-200/20 rounded"></div>
                    </div>

                    {/* IMAGE */}
                    <img 
                      src={img} 
                      alt={`Proof ${index+1}`} 
                      className="w-full h-full object-cover opacity-90"
                    />

                    {/* Placeholder Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <span className="bg-black/60 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                          Review Screenshot {index + 1}
                       </span>
                    </div>
                 </div>
              </div>
           </div>
         ))}
         
         {/* End Padding to show last item fully */}
         <div className="min-w-[20px]"></div>
      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="px-4 text-center mt-4">
         <button className="bg-[#FF5500] hover:bg-[#e04b00] text-white text-lg font-bold py-4 w-full rounded-xl shadow-xl shadow-orange-500/20 active:scale-95 transition-transform">
            Get These Results - ₹499
         </button>
         <p className="text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1">
            <Lock size={10}/> 100% Money Back Guarantee if data is fake.
         </p>
      </div>

    </section>
  );
};

export default TrustWall;