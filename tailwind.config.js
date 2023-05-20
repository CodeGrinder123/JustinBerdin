/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.vue', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms')(),
    require('@tailwindcss/typography'),
  ],
}

