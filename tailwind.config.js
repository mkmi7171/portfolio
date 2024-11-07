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
          'circular' :['circular', 'sans-serif']
      },
    },
  },
  plugins: [],
}

