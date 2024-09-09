/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '32': '32px',
      },
      width: {
        '99/100': '99%', 
        '98/100': '98%',      
      },
      height: {
        '99/100': '99%',
        '98/100': '98%',     
      }
    },
  },
  plugins: [],
}

