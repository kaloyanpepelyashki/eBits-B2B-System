/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-color": "#551C50",
      "txt-grey-color": "#959595",
      "txt-black-color": "#000000",
      "txt-white-color": "#FFFFFF",
    },
    fontSize: {
      TextBig: "28pt",
      GlobalBtnsTxt: "23pt",
      HeadingSmall: "16pt",
      ProductTitleSmall: "9pt",
      VariationTitle: "7pt",
    },
  },
  plugins: [],
};
