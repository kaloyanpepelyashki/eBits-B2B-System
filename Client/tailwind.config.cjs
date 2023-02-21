/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-color": "#551C50",
      "txt-grey-color": "#959595",
      "txt-black-color": "#000000",
    },
    fonts: {
      "page-text-big": "38pt",
    },
  },
  plugins: [],
};
