/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

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

