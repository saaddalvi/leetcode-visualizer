/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        leetcode: {
          easy: '#00b8a3',
          medium: '#ffc01e',
          hard: '#ff375f',
          bg: '#282828',
          text: '#eff2f699',
        },
        dark: {
          100: '#1a1a1a',
          200: '#242424',
          300: '#2d2d2d',
          400: '#353535',
          500: '#3f3f3f',
          600: '#484848',
          700: '#525252',
          800: '#5e5e5e',
          900: '#6e6e6e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 