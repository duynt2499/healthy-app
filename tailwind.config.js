/** @type {import('tailwindcss').Config} */

const colorsCustom = {
  light: "#FFFFFF",
  primary: {
    300: "#FFCC21",
    400: "#FF963C",
    500: "#EA6C00",
  },
  secondary: {
    300: "#8FE9D0",
  },
  dark: {
    600: "#2E2E2E",
    500: "#414141",
  },
  gray: {
    400: "#777777",
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colorsCustom,
      fontFamily: {
        'inter' : {
          300: "Inter-Regular"
        },
        'sans' : {
          300: "Noto-Sans-JP-Regular"
        }
      },
    },
  },
  plugins: [],
};
