/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FF7E5A",
      },
      fontFamily: {
        inter: ["Inter"],
        alice: ["Alice"],
      },
      animation: {
        textAnim: "textAnim 0.8s ease-in-out",
      },
      keyframes: {
        textAnim: {
          "0%": { opacity: 0, transform: "translateY(1.5rem)" },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
