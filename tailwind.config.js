/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlueText: "#D0D6F9",
        borderButton: "#0B0D17",
        grayHover: "#6B7280",
        strongGray: "#8F9195",
        white: "#fff",
        dots: "#99A7BB",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
