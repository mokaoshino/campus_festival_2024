/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
      },
      borderWidth: {
        '32': '32px',
      }
    },
  },
  plugins: [],
}

