module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pyBlue: {
          200:'#91f5ff',
          300:'#76bbfc',
          400: "#326D9D",
          500: "#204565",
        },
        pyYellow: {
          400: "#FFDE75",
        },
      },
    },
  },

  variants: {
    extend: {
      scale: ['focus-within'],
    },
  },
  plugins: [],
};
