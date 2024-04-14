/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabinet Grotesk", "sans-serif"],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      boxShadow: {
        'equal': '0 0 10px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        'xs': '405px',
      },
    },
  },
  plugins: [],
}