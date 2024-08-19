/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary:"#F7F8F9",
        primary:"#222222",
        accent:'#3449SE'
      }
    },
  },
  plugins: [],
}

