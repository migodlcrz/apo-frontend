/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "apo-secondary": "#292e3b", // Your custom color
      },
    },
  },
  plugins: [],
};
