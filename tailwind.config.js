/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-p": "#1d1d1d",
        "light-p": "#F5F9FF"
      },
      textColor: {
        "dark-p": "#fcfcfc",
        "light-p": "#1d1d1d"
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}