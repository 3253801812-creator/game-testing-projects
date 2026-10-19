/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { creek: ['Trebuchet MS', 'system-ui', 'sans-serif'] },
      boxShadow: { canopy: '0 22px 70px rgba(5,22,24,.38)' },
    },
  },
  plugins: [],
};
