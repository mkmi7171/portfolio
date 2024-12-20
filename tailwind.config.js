/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBackground': '#1a191d',
        'whiteText': '#FCFBFB'
      },
        fontFamily: {
          'din-condensed': ['D-DIN Condensed', 'sans-serif'],
          'circular': ['circular', 'sans-serif'],
          'safiro-med': ['safiro', 'sans-serif'],
          'safiro-reg-i' :['safiro-reg-i', 'sans-serif']
      },
    },
  },
  plugins: [],
}

