// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      francois: ["Francois One", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      ropa: ["Ropa Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
