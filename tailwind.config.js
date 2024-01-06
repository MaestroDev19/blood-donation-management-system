/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#211A1D",
        white: "#FDFFFC",
        grey: "#7D7D78",
        primary: "#F42A45",
        accent: "#04F06A",
      },
    },
  },
  plugins: [[require("@tailwindcss/forms")]],
};
