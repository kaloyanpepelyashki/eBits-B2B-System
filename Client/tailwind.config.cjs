/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['jetbrains-mono', 'JetBrains', 'sans-serif'],
    },
    colors: {
      "primary-color": "#551C50",
      "txt-grey-color": "#959595",
      "txt-black-color": "#000000",
      "txt-white-color": "#FFFFFF",
    },
    fontSize: {
      TextBig: "25pt",
      GlobalBtnsTxt: "15pt",
      HeadingSmall: "16pt",
      ProductTitleSmall: "9pt",
      VariationTitle: "7pt",
      ReceiptPriceL: "38pt",
      ReceiptPriceM: "30pt",
    },
  },
  plugins: [],
};
