import React, { useEffect } from 'react';
import { CheckCircle, Download, ExternalLink, Mail, ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const ThankYou = () => {

  // === FACEBOOK PIXEL PURCHASE TRACKING ===
  useEffect(() => {
    // Check if Pixel is loaded and fire the Purchase event
    // @ts-ignore
    if (typeof fbq !== 'undefined') {
      // @ts-ignore
      fbq('track', 'Purchase', {
        value: 499.00,
        currency: 'INR',
        content_name: 'Verified Leads Bundle',
      });
      console.log("Purchase Event Fired! 💰"); 
    }
  }, []);
  // ========================================

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      
      {/* Main Card */}
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Top Decoration Line */}
        <div className="h-2 w-full bg-[#FF4500]"></div>

        <div className="p-8 sm:p-12 text-center">
          
          {/* Animated Success Icon */}
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Payment Successful! 🎉
          </h1>
          <p className="text-slate-600 mb-8 text-lg">
            Welcome to the top 1%. Your assets are ready below.
          </p>

          {/* === STEP 1: PRODUCT ACCESS CARD (Drive Link Integrated) === */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 shadow-inner">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                Step 1: Get Your Files
             </p>
             
             {/* GOOGLE DRIVE LINK */}
             <a 
               href="https://drive.google.com/drive/folders/1Vfe0a0lkKnMG-EPjvjtEMLvh4YlzSonE?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group w-full flex items-center justify-center gap-3 bg-[#FF4500] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-[1.02] transition-all duration-300"
             >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" 
                    alt="Drive" 
                    className="w-6 h-6"
                />
                <span>Access The Bundle Now</span>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
             </a>
             
             <p className="text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                <Download className="w-3 h-3" /> Excel Leads • Playbook • Code
             </p>
          </div>

          {/* === STEP 2: WHATSAPP COMMUNITY CARD (WhatsApp Link Integrated) === */}
          <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6 mb-8 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#25D366]/10 rounded-full blur-xl"></div>
             
             <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-4 relative z-10">
                Step 2: Join The Community
             </p>
             
             <p className="text-sm text-slate-600 mb-4 leading-relaxed relative z-10">
                Don't miss new lead updates. Join the <b>Private VIP Channel</b> (Your number stays hidden).
             </p>

             {/* WHATSAPP LINK */}
             <a 
               href="https://chat.whatsapp.com/LbNeoWtn3A4DlOt646NMpC"
               target="_blank"
               rel="noopener noreferrer"
               className="group w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-green-200 hover:bg-[#20bd5a] hover:scale-[1.02] transition-all duration-300 relative z-10"
             >
                <Users className="w-5 h-5" />
                <span>Join DevSocs VIP</span>
             </a>
          </div>

          {/* Email Confirmation Note */}
          <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl text-left border border-blue-100 mb-8">
            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
                <strong>Check your Email:</strong> We have sent a backup link to your inbox. Check Spam/Promotions if missing.
            </p>
          </div>

          {/* Back to Home */}
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ThankYou;