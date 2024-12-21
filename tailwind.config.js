/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '200px',
        'xlg': '1124px',
        'cs': '1450px'
      },
      colors: {
        btn_bg: '#FAFAFA'
      },
    },
  },
  plugins: [],
}
