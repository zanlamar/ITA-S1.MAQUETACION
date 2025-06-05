/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  safelist: [
    'border-b-4',
    'border-red-500',
    'hover:border-blue-500',
    'hover:text-black',
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}