

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
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
