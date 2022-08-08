/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Bebas Neue",
      },
      colors: {
        verde: "#0fffa3",
        amarillo: "#d0ff73",
        violeta: "#7b03e2",
        fuccia: "#f93ace",
        rosa: "#ff95d3",
      },
    },
  },
  plugins: [],
};

