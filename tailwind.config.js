/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { white: "#fff", black: "#000", tomato: "#ff5e5b" },
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
