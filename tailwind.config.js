/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        circular: ["Circular Std"],
      },
      colors: {
        ungu: "#5D50C6",
        jambon: "#F85E9F",
        orange: "#FF5722",
        grey: "#9E9E9E",
      },
      dropShadow: {
        "myshadow": ["0px 4px 4px rgba(0, 0, 0, 0.25)"],
        "xl-shadow": [" 0px 41px 89px 0px #0000001A"],
      }
    },
  },
  plugins: [],
};
