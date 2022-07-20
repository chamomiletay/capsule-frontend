/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'edu-vic-wa-nt-beginner': ['Edu VIC WA NT Beginner', 'cursive']
      },
    },
  },
  plugins: [],
}