/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", {
      "dim": {
        ...require("daisyui/src/theming/themes")["dim"],
        primary: "#00A6FB"
      }
    }],
  },
}
