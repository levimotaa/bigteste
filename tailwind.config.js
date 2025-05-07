/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // <-- Esta linha deve ficar fora do array `content`
  theme: {
    extend: {},
  },
  plugins: [],
};
