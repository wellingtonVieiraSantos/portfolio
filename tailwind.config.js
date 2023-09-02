/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'main': '0 0 10px rgba(255,255,255, 0.4)',
        'main-hover': '0 0 30px rgba(255,255,255)'
      },
      gridTemplateColumns:{
        'main': 'repeat(auto-fill, minmax(300px, 1fr))'
      }
    },
  },
  plugins: [],
}

