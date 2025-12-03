/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        telion: {
          50: "#f6f9ff",
          100: "#e8efff",
          200: "#c7d8ff",
          300: "#9ab7ff",
          400: "#5f8aff",
          500: "#3163ff",
          600: "#234adf",
          700: "#1b38b3",
          800: "#172f8f",
          900: "#162a75",
          950: "#0f1c4c",
        },
      },
    },
  },
  plugins: [],
};
