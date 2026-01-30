import React from 'react';
import { ThumbsUp, MessageCircle, Share2, ShieldCheck, ChevronDown, Star } from 'lucide-react';

const Reviews = () => {
  // Fake Indian Reviews Data with REAL Indian Looking Images
  const reviews = [
    {
      name: "Vikram Singh",
      role: "Freelancer, Jaipur",
      time: "2h ago",
      // Indian Male Photo
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=150&h=150",
      text: "Bhai maza aa gaya! 🔥 I was trying to find clients on Upwork for 2 months with no luck. Bought this list yesterday, sent 10 messages using your script, and got 2 replies today. Best ₹499 spent.",
      likes: 152,
      comments: 24,
      shares: 12
    },
    {
      name: "Riya Kumari",
      role: "Web Developer, Delhi",
      time: "5h ago",
      // Indian Female Photo
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=150&h=150",
      text: "I was skeptical ki data real hoga ya nahi. But I checked 5-6 Id's randomly and they are all active business owners. The 'Anti-Spam' script is actually very smart. Doesn't sound like a bot at all.",
      likes: 89,
      comments: 15,
      shares: 5
    },
    {
      name: "Rahul Tyagi",
      role: "Student, Mumbai",
      time: "19h ago",
      // Indian Male Photo (Younger)
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?fit=crop&w=150&h=150",
      text: "ON POINT! Perfect resource to earn money right now. Bhai ne pura system bana ke de diya. The Liquid codes alone are worth ₹5000. My client was impressed with the 'Sticky Add to Cart' feature.",
      likes: 245,
      comments: 56,
      shares: 34
    },
    {
      name: "Amit Patel",
      role: "Shopify Dev, Gujarat",
      time: "1d ago",
      // Indian Male Photo
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150",
      text: "Areh bhai, ye leads toh gold mine hain. Just closed a gym owner for ₹15k website. He was running ads on FB but sending traffic to WhatsApp. Easy conversion. Thanks DevSocs!",
      likes: 112,
      comments: 8,
      shares: 19
    }
  ];

  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* === 1. THE PROMISE SECTION (Orange Bar) === */}
        <div className="max-w-3xl mx-auto mb-16">
            <details className="group">
                <summary className="flex items-center justify-between w-full bg-[#FF4500] text-white p-4 sm:p-6 rounded-2xl cursor-pointer shadow-xl shadow-orange-200 hover:bg-orange-600 transition-colors list-none">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                        <span className="text-lg sm:text-xl font-bold tracking-wide">The DevSocs Promise</span>
                    </div>
                    <ChevronDown className="w-6 h-6 transition-transform group-open:rotate-180" />
                </summary>
                
                {/* Expandable Content */}
                <div className="bg-white border border-slate-200 rounded-b-2xl p-6 sm:p-8 shadow-lg mt-[-8px] relative z-0">
                    <p className="text-slate-600 leading-relaxed mb-4">
                        We are developers, not gurus. We know the pain of finding clients. That's why we verified every single lead in this sheet manually.
                    </p>
                    <p className="text-slate-900 font-bold">
                        If you don't find at least 50+ working numbers that are running ads, simply email us and we will replace the data instantly. No questions asked.
                    </p>
                </div>
            </details>
        </div>

        {/* === 2. REVIEWS GRID === */}
        <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
            </div>
            <h2 className="text-2xl font-bold text-slate-900">What Freelancers Are Saying</h2>
            <p className="text-slate-500 text-sm">Join 70+ others who started today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                    
                    {/* User Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-10 h-10 rounded-full object-cover border border-slate-200"
                            />
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                <p className="text-xs text-slate-500">{review.role} • {review.time}</p>
                            </div>
                        </div>
                        {/* Facebook-style dots (Visual only) */}
                        <div className="text-slate-400 font-bold text-xl leading-3 cursor-pointer">...</div>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        {review.text}
                    </p>

                    {/* Social Stats Divider */}
                    <div className="border-t border-slate-100 my-3"></div>

                    {/* Social Actions */}
                    <div className="flex items-center justify-between text-slate-500 text-xs sm:text-sm font-medium">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 hover:bg-slate-50 px-2 py-1 rounded transition-colors">
                            <ThumbsUp className="w-4 h-4" /> 
                            <span>{review.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 hover:bg-slate-50 px-2 py-1 rounded transition-colors">
                            <MessageCircle className="w-4 h-4" /> 
                            <span>{review.comments} Comments</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 hover:bg-slate-50 px-2 py-1 rounded transition-colors">
                            <Share2 className="w-4 h-4" /> 
                            <span>{review.shares} Shares</span>
                        </div>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;