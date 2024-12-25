/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {

    extend: {
      colors: {
        'highlight': {
          DEFAULT: '#08a7c7',
          light: '#08a7c7',
          dark: '#08a7c7',
        },
        'highlight-hover': {
          DEFAULT: 'rgb(44, 213, 247)',
          light: 'rgb(44, 213, 247)',
          dark: 'rgb(44, 213, 247)',
        },
        'tag': {
          DEFAULT: '#b7b7b7',
          light: '#b7b7b7',
          dark: '#b7b7b7',
        },
        'grey': {
          DEFAULT: 'rgb(32, 32, 32)',
          light: 'rgb(32, 32, 32)',
          dark: 'rgb(32, 32, 32)',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

