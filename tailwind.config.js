/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure "src" is properly written here
  ],
  theme: {
    extend: {
      screens: {
        lg: '900px', // Custom screen breakpoint
      },
    },
  },
  plugins: [],
};