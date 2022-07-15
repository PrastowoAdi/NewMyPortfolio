/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    footerContainer: {
      center: true,
      padding: "0 5px",
    },
    extend: {
      colors: {
        primary: "#FFD803",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        xs: "425px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
