/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      colors: {
        "Teal": "#00ADB5"
      }
    },
  },
  plugins: [],
}

