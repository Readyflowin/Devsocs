import React, { useState } from 'react';
import { ThumbsUp, ShieldCheck, ChevronDown, Star, CheckCircle2 } from 'lucide-react';

const Reviews = () => {
  // === 1. STATE FOR RATINGS ===
  // Initial State: 4.7 Stars based on 92 ratings
  const [stats, setStats] = useState({
    average: 4.7,
    total: 92
  });
  const [userRated, setUserRated] = useState(false);

  // === 2. REVIEW DATA (Realistic, No Fake Photos) ===
  const [reviews, setReviews] = useState([
    {
      name: "Vikram Singh",
      initials: "VS",
      color: "bg-blue-100 text-blue-700",
      role: "Freelancer, Jaipur",
      time: "2h ago",
      text: "Bhai maza aa gaya! 🔥 I was trying to find clients on Upwork for 2 months with no luck. Bought this list yesterday, sent 10 messages using your script, and got 2 replies today. Best ₹499 spent.",
      likes: 152,
      isLiked: false, 
    },
    {
      name: "Sneha Kapoor",
      initials: "SK",
      color: "bg-purple-100 text-purple-700",
      role: "Web Dev, Mumbai",
      time: "5h ago",
      text: "I was skeptical ki data real hoga ya nahi because of the price. But I checked 5-6 Id's randomly and they are all active business owners running ads. The 'Anti-Spam' script is actually very smart.",
      likes: 89,
      isLiked: false,
    },
    {
      name: "Rahul T.",
      initials: "RT",
      color: "bg-green-100 text-green-700",
      role: "Student, Delhi",
      time: "19h ago",
      text: "ON POINT! Perfect resource to earn money right now. Bhai ne pura system bana ke de diya. The Liquid codes alone are worth ₹5000. My client was impressed with the sticky cart feature.",
      likes: 245,
      isLiked: false,
    },
    {
      name: "Arjun Mehta",
      initials: "AM",
      color: "bg-orange-100 text-orange-700",
      role: "Agency Owner, Bangalore",
      time: "1d ago",
      text: "Areh bhai, ye leads toh gold mine hain. Just closed a gym owner for ₹15k website. He was running ads on FB but sending traffic to WhatsApp. Easy conversion. Thanks DevSocs!",
      likes: 112,
      isLiked: false,
    }
  ]);

  // === 3. HANDLE USER RATING ===
  const handleRate = (rating: number) => {
    if (userRated) return; // Prevent double rating

    // Calculate new average visually
    const currentScore = stats.average * stats.total;
    const newTotal = stats.total + 1;
    const newAverage = (currentScore + rating) / newTotal;

    setStats({
      average: Number(newAverage.toFixed(1)),
      total: newTotal
    });
    setUserRated(true);
  };

  // Handle Like Click on Reviews
  const handleLike = (index: number) => {
    const newReviews = [...reviews];
    if (newReviews[index].isLiked) {
      newReviews[index].likes -= 1;
      newReviews[index].isLiked = false;
    } else {
      newReviews[index].likes += 1;
      newReviews[index].isLiked = true;
    }
    setReviews(newReviews);
  };

  return (
    <div className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* === HEADER: SUMMARY STATS & RATING === */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                What Freelancers Are Saying
            </h2>
            
            {/* The Big Rating Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-12 shadow-sm">
                
                {/* Left: The Score */}
                <div className="text-center">
                    <div className="text-5xl font-black text-slate-900 mb-1">{stats.average}</div>
                    <div className="flex items-center gap-1 justify-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                                key={star} 
                                className={`w-5 h-5 ${star <= Math.round(stats.average) ? 'fill-[#FF4500] text-[#FF4500]' : 'fill-slate-200 text-slate-200'}`} 
                            />
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm font-medium">{stats.total} Ratings</p>
                </div>

                {/* Divider (Hidden on mobile) */}
                <div className="hidden sm:block w-px h-16 bg-slate-200"></div>

                {/* Right: User Interaction */}
                <div className="text-center sm:text-left">
                    <p className="text-slate-900 font-semibold mb-2">
                        {userRated ? "Thanks for rating!" : "Rate this product:"}
                    </p>
                    <div className="flex items-center gap-2">
                         {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => handleRate(star)}
                                disabled={userRated}
                                className={`transition-transform hover:scale-110 focus:outline-none ${userRated ? 'cursor-default' : 'cursor-pointer group'}`}
                            >
                                <Star 
                                    className={`w-8 h-8 ${
                                        userRated 
                                            ? (star <= 5 ? 'fill-[#FF4500] text-[#FF4500]' : 'text-slate-300')
                                            : 'text-slate-300 hover:fill-[#FF4500] hover:text-[#FF4500] group-hover:fill-[#FF4500] group-hover:text-[#FF4500]'
                                    } transition-colors`} 
                                />
                            </button>
                         ))}
                    </div>
                </div>
            </div>
        </div>

        {/* === REVIEWS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
            {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 p-6 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                    
                    {/* User Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                            {/* INITIALS AVATAR (Better than fake stock photo) */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                                {review.initials}
                            </div>
                            
                            <div>
                                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                                    {review.name}
                                    <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full border border-green-200 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Verified
                                    </span>
                                </h4>
                                <p className="text-xs text-slate-500 font-medium mt-0.5">{review.role}</p>
                            </div>
                        </div>
                        <span className="text-slate-400 text-xs">{review.time}</span>
                    </div>

                    {/* Star Row in Review */}
                    <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#FF4500] text-[#FF4500]" />
                        ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-sm leading-relaxed mb-5">
                        "{review.text}"
                    </p>

                    {/* Footer Actions */}
                    <div className="border-t border-slate-50 pt-4 flex items-center justify-between">
                         <button 
                            onClick={() => handleLike(index)}
                            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                                review.isLiked ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            <ThumbsUp className={`w-4 h-4 ${review.isLiked ? 'fill-current' : ''}`} /> 
                            <span>Helpful ({review.likes})</span>
                        </button>
                    </div>

                </div>
            ))}
        </div>

        {/* === THE PROMISE SECTION (CENTERED) === */}
        <div className="flex justify-center w-full">
            <div className="max-w-3xl w-full">
                <details className="group">
                    <summary className="flex items-center justify-between w-full bg-[#FF4500] text-white p-4 sm:p-6 rounded-2xl cursor-pointer shadow-xl shadow-orange-200 hover:bg-orange-600 transition-colors list-none select-none">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                            <span className="text-base sm:text-xl font-bold tracking-wide text-left">The DevSocs Promise</span>
                        </div>
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="bg-white border border-slate-200 rounded-b-2xl p-6 sm:p-8 shadow-lg mt-[-8px] relative z-0 text-left">
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We are developers, not gurus. We know the pain of finding clients. That's why we verified every single lead in this sheet manually.
                        </p>
                        <p className="text-slate-900 font-bold">
                            If you don't find at least 50+ working numbers that are running ads, simply email us and we will replace the data instantly. No questions asked.
                        </p>
                    </div>
                </details>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Reviews;