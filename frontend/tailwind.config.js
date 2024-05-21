/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        'custom-yellow': '#FEFDED',
        'custom-green': '#F6FFF5',
        'custom-red': '#FBA5A5',
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(to bottom left, #d1fae5, #10b981)',
      },
=======
      colors:{
        'custom-yellow': '#FEFDED',
        'custom-green': '#F6FFF5',
        'custom-red': '#FBA5A5',
      }
>>>>>>> 32dde8b81a5696737c9e576f5cbcea102f78c514
    },
  },
  plugins: [],
}