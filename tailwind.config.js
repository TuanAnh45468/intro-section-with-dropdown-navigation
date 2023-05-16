/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      white: "hsl(0, 0%, 98%)",
      "medium-gray": "hsl(0, 0%, 41%)",
      black: "hsl(0, 0%, 8%)"
    },
    screens:{
      mobile: "375px",
      laptop: "1440px"
    },
    extend: {
      fontFamily:{
        "epilogue": ['Epilogue', 'sans-serif']
      },
      fontWeight: {
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}

