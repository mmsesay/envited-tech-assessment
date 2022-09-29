/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBGColor: "#F6F2FF",
        primaryDarkPurpleColor: "#240D57",
        primaryGradientColorOne: "#8456EC",
        primaryGradientColorTwo: "#E87BF8",
        primaryDarkGray: "#4F4F4F",
        primaryWhite: "#FBFAFF",

        // primaryGradientColor: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
      },
      fontSize: {
        headline: "30px",
      },
      lineHeight: {
        "headline-space": "36px",
      },
    },
  },
  plugins: [],
};
