/** command Tailwind scan */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { 'command-primary': '#9ad37a', 'command-accent': '#ffd94d' } } },
  plugins: [],
};
