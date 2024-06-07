/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FEFDED',
        'custom-green': '#F6FFF5',
        'custom-red': '#FBA5A5',
        'green-1': '#1E2F1D',
        'green-2': '#78A974',
        'green-3': '#507E4D',
        'green-4': '#497246',
        'gray-1': '#F2F2F2',
        'gray-2': '#CCCCCC',
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(to bottom left, #d1fae5, #10b981)',
      },
    },
  },
  plugins: [],
}