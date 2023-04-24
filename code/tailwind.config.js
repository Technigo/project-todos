/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,}',
    './components/*/.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem'
      }
    },
    colors: {
      white: '#f5f5f5',
      black: '#333333',
      green: '#4c9173',
      red: '#906387',
      background: '#eaf4ef'
    }
  },
  plugins: []
}

