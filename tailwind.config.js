/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // <-- Changed to Outfit
      },
      colors: {
        brand: {
          navy: '#0A192F', // Deep Navy
          blue: '#112240', // Lighter Navy for cards
          accent: '#64FFDA', // Bright Teal for highlights
          slate: '#8892b0', // Soft text color
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(100, 255, 218, 0.3)', // Neon glow
        'card': '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}