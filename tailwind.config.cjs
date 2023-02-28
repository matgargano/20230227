/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  safelist: [
    {
      pattern: /.*/
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
