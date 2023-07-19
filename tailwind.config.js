/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
      extend: {},
      // colors:{
      //   colorOne:'red',
      //   colorTow:'blue',
      //   colorThreee:'green',
      //   colorFour:'gray',
      //   colorFive:'gray'
      // }
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
  }