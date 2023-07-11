/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./views/**/*.{ejs,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        urgentTaskColor: '#f55d1e',
        primaryTaskColor: '#fc9700',
        secondaryTaskColor: '#ffd263',
        reminderTaskColor: '#b4d5a6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}