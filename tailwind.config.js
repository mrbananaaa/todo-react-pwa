/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': 'Poppins',
      },
      colors: {
        'dark': '#252525',
        'light': '#FCFBFC',
        'subtitle': '#888888',
        'light-green': '#ceffc7',
        'light-red': '#ffd7d7',
      }
    },
  },
  plugins: [],
}
