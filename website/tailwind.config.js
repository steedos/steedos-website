const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      orange: colors.orange,
    }
  },
  variants: {
    extend: {
      // ...
     gradientColorStops: ['active', 'group-hover'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/typography'),
  ],
}