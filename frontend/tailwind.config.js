/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-yellow': '#FEFDED',
        'custom-green': '#F6FFF5',
        'custom-red': '#FBA5A5',
      }
    },
  },
  plugins: [],
}