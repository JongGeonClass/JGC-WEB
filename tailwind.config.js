/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: { 100: "#d8d8d8", 200: "rgba(216, 216, 216, 0.1)" },
        darkturquoise: "#00cecb",
        tomato: "#ff5e5b",
      },
      fontFamily: {
        "noto-sans-kr": "'Noto Sans KR'",
        "components-button-large1": "Roboto",
      },
    },
    fontSize: { base: "0.69rem", lg: "0.94rem", xl: "1.25rem", "2xl": "3rem" },
  },
  corePlugins: { preflight: false },
  plugins: [],
};
