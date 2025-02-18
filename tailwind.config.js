/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#322A24',
          light: '#5E5449',
          dark: '#322A24',
        },
        secondary: {
          DEFAULT: '#FDFBF5',
          light: '#DBD6CC',
          dark: '#C0BBB6',
        },
        gray: {
          light: '#5E5449',
          DEFAULT: '#322A24',
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}