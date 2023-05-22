// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        kubuceDarkBlue: "#060646",
        kubuceInfoBlue: "#4d79d4",
        kubuceBgLight: "#ecebeb",
        kubuceDanger: "hsl(0, 95%, 65%)",
        kubuceLight: "#ccd0d7",
        kubuceModalBg: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
