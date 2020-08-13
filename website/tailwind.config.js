const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.vue"],
  purge: false,
  theme: {
    darkSelector: '[data-theme="dark"]'
  },
  variants: {
    textColor: ["hover", "dark", "light"],
    backgroundColor: ["hover", "dark", "light"]
  },
  // variants: {
  //   backgroundColor: ['dark', 'dark-hover'],
  //   borderColor: ['dark', 'dark-disabled'],
  //   textColor: ['dark', 'dark-hover']
  // },
  plugins: [
    require("tailwindcss-theming")({
      variants: {
        dark: true,
        light: true
      },
    })
    // require('tailwindcss-dark-mode')(),
    //require('@tailwindcss/ui'),
  ]
};
