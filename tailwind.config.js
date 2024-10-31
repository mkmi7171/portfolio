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
          'mark-pro-black': ['MArk pro black', 'sans-serif'],
          'mark-pro-bold': ['MArk pro bold', 'sans-serif'],
          'mark-pro': ['MArk pro', 'sans-serif'],
          'circular' :['circular', 'sans-serif']
      },
    },
  },
  plugins: [],
}

