/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        harmattan: "Harmattan, 'sans-serif'",
      },
      colors: {
        "red-20": "#FDD5D7",
        "green-20": "#CFFAEA",
        "blue-20": "#BDDCFF",
        "yellow-20": "#FCEED4",
        "violet-20": "#EEE5FF",
        "brown-20": "#ffe3b9",
        "gray-20": "#C7CEDB",
        "orange-20": "#FFD7C4",
      },
    },
  },
  plugins: [],
};
