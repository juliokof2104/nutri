/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },


    },
  },
  plugins: [],
}
