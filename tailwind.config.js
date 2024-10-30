/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#40546c",
        "accent-text": "#4C688A",
      },
    },
  },
  plugins: [],
};
