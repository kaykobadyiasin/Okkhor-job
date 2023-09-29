/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d81b24',
        secondary: '#312f60',
        para_texts: '#757575',
      },
      fontFamily: {
        primary: [],
        secondary: [],
        bgTitle: []
      },
    },
  },
  plugins: [],
}

