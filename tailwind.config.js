/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Use '*.html' if you're also using HTML files
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
      thin: '100',
    },
    fontSize: {
      '10xl': ['12rem', '9rem'],
      '5xl': ['1.5rem', '2rem'],
      '2xl': ['2rem', '2rem'],
    },
    fontFamily: {
      'bebas': ['Bebas Neue'],
      'arquitecta': ['Arquitecta '],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

