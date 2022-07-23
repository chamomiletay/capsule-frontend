/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'florals': "url('/images/bg.png')",
        'plants': "url('/images/plant.jpg')",
        'nature': "url('/images/nature.jpg')"
      },
      fontFamily: {
        'edu-vic-wa-nt-beginner': ['Edu VIC WA NT Beginner', 'cursive'],
        'nanum-gothic': ['Nanum Gothic', 'sans-serif']
      },
    },
  },
  plugins: [],
}
