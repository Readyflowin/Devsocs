/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], 
      },
      colors: {
        brand: {
          navy: '#0A192F', 
          blue: '#112240', 
          accent: '#64FFDA', 
          slate: '#8892b0', 
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(100, 255, 218, 0.3)', 
        'card': '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // NEW WOBBLE ANIMATION 👇
        wobble: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'marquee': 'marquee 80s linear infinite', 
        'wobble': 'wobble 1s ease-in-out infinite', // Button ke liye
      }
    },
  },
  plugins: [],
}