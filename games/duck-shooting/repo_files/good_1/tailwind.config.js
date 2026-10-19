/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['Trebuchet MS', 'system-ui', 'sans-serif'] },
      borderRadius: { arena: '28px' },
      letterSpacing: { game: '.16em' }
    }
  },
  plugins: []
};
