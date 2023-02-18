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
        tomato: { 100: "#ff5e5b", 200: "rgba(255, 94, 91, 0.8)" },
        gray: {
          100: "rgba(255, 255, 255, 0.75)",
          200: "rgba(255, 255, 255, 0.65)",
          300: "rgba(0, 0, 0, 0.4)",
        },
        "text-secondary1": "rgba(0, 0, 0, 0.6)",
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
