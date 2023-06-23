/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        'brand':'#ff0000'
      },
      fontFamily: {
        LeagueGothic: ['League Gothic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

