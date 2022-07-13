/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'jungle': '#002329',
      'rose': '#f5dddd',
      'phlox': '#c04cfd',
      'silver': '#ecebff',
      'bluegreen': '#94d1be',
    },
  },
  plugins: [],
}
