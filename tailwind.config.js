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
        /* possivel problema para resoluções menores que 290px */
        'main': 'repeat(auto-fill, minmax(250px, 1fr))'
      },
      boxShadow:{
        'main': '2px 2px 0 rgba(255,255,255)'
      },
      colors:{
        primary: '#',
        secondary: '#FE5F2F'
      }
    },
  },
  plugins: [],
}

