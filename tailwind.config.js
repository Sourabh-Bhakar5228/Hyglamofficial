/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        gold: {
          50: "#fff9eb",
          100: "#ffefcd",
          200: "#ffdca1",
          300: "#ffc26a",
          400: "#ff9f30",
          500: "#fab03f",
          600: "#e68812",
          700: "#bf6711",
          800: "#985114",
          900: "#7b4314",
          950: "#472207",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        display: ["Coolvetica", "Poppins", "sans-serif"],
        curvy: ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [],
};
