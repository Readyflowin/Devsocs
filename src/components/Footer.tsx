import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // UPDATED: Added 'pb-32' to prevent the Sticky Banner from covering the link
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-32 text-center sm:text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="mb-4">
               <span className="text-2xl font-bold text-white tracking-tight">DevSocs</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
               Empowering developers with verified data and tools to close high-ticket clients.
            </p>
            
            <div className="mt-6 flex flex-col md:items-start items-center gap-2">
                <p className="text-slate-600 text-xs font-medium">
                   © 2026 DevSocs. All rights reserved.
                </p>
                
                {/* === REFUND LINK (Bold, Visible & Clickable) === */}
                <Link 
                   to="/refund-policy" 
                   className="text-slate-400 hover:text-white font-bold text-sm underline decoration-orange-500 decoration-2 underline-offset-4 transition-all mt-1"
                >
                   Refund Policy
                </Link>
                {/* =========================================== */}
                
            </div>
          </div>

          {/* Social Links (Official Icons) */}
          <div className="flex items-center gap-8">
            
            {/* UPDATED: Support / Email Link */}
            <a 
              href="mailto:info.readyflow@gmail.com"
              className="group flex flex-col items-center gap-2"
            >
              {/* Changed color to Blue for Email/Support */}
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {/* Mail Icon SVG */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="text-slate-400 text-xs font-medium group-hover:text-white transition-colors">Support</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/devsocs_official?igsh=MW0zY2ZoM3pxbjZvNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <span className="text-slate-400 text-xs font-medium group-hover:text-white transition-colors">Instagram</span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;