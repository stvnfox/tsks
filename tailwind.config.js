

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
