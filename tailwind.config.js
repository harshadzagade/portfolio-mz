/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ACFilmstrip: ["'ACFilmstrip'", "'sans-serif'"],
      },
    },
  },
  plugins: [],
}
