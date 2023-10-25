module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primaryBg: "#f7f7f7",
      },
    },
    fontFamily: {
      montserrat: ["'Montserrat", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
