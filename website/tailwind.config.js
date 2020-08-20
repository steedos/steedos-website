const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./colors')
const selectorParser = require('postcss-selector-parser')
const hexRgb = require('hex-rgb')
const typographyPlugin = require('@tailwindcss/typography')

function rgba(hex, alpha) {
  const { red, green, blue } = hexRgb(hex)
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}


const spacing = {
  px: '1px',
  '0': '0',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
}

const boxShadow = {
  ...defaultTheme.boxShadow,
  solid: '0 0 0 2px currentColor',
  outline: `0 0 0 3px ${rgba(colors.blue[400], 0.45)}`,
  'outline-gray': `0 0 0 3px ${rgba(colors.gray[400], 0.45)}`,
  'outline-blue': `0 0 0 3px ${rgba(colors.blue[300], 0.45)}`,
  'outline-teal': `0 0 0 3px ${rgba(colors.teal[300], 0.45)}`,
  'outline-green': `0 0 0 3px ${rgba(colors.green[300], 0.45)}`,
  'outline-yellow': `0 0 0 3px ${rgba(colors.yellow[300], 0.45)}`,
  'outline-orange': `0 0 0 3px ${rgba(colors.orange[300], 0.45)}`,
  'outline-red': `0 0 0 3px ${rgba(colors.red[300], 0.45)}`,
  'outline-pink': `0 0 0 3px ${rgba(colors.pink[300], 0.45)}`,
  'outline-purple': `0 0 0 3px ${rgba(colors.purple[300], 0.45)}`,
  'outline-indigo': `0 0 0 3px ${rgba(colors.indigo[300], 0.45)}`,
}

const minWidth = {
  '0': '0',
  full: '100%',
  'min-content': 'min-content',
  'max-content': 'max-content',
}

const width = theme => ({
  auto: 'auto',
  ...theme('spacing'),
  screen: '100vw',
  'min-content': 'min-content',
  'max-content': 'max-content',
})

const maxWidth = (theme, { breakpoints }) => ({
  none: 'none',
  '0': '0rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  full: '100%',
  'min-content': 'min-content',
  'max-content': 'max-content',
  prose: '65ch',
  ...breakpoints(theme('screens')),
})

const maxHeight = theme => ({
  screen: '100vh',
  ...theme('spacing'),
})

const inset = theme => ({
  auto: 'auto',
  ...theme('spacing'),
})


const typography = theme => ({
  default: {
    css: {
      color: theme('colors.gray.700'),
      '[class~="lead"]': {
        color: theme('colors.gray.600'),
      },
      a: {
        color: theme('colors.indigo.600'),
        fontWeight: 600,
        textDecoration: 'none',
      },
      strong: {
        color: theme('colors.gray.900'),
      },
      'ol > li::before': {
        color: theme('colors.gray.500'), // 600
      },
      'ul > li::before': {
        backgroundColor: theme('colors.gray.300'), // 400
      },
      hr: {
        borderColor: theme('colors.gray.200'), // 300
      },
      blockquote: {
        color: theme('colors.gray.900'),
        borderLeftColor: theme('colors.gray.200'), // 300
      },
      'h1, h2, h3, h4': {
        color: theme('colors.gray.900'),
      },
      'figure figcaption': {
        color: theme('colors.gray.500'), // 600
      },
      code: {
        color: theme('colors.gray.900'),
      },
      pre: {
        color: theme('colors.gray.200'), // 300
        backgroundColor: theme('colors.gray.800'),
      },
      thead: {
        color: theme('colors.gray.900'),
        borderBottomColor: theme('colors.gray.300'), // 400
      },
      'tbody tr': {
        borderBottomColor: theme('colors.gray.200'), // 300
      },
    },
  },
});

module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.vue"],
  purge: false,
  theme: {
    darkSelector: '[data-theme="dark"]',
    spacing,
    boxShadow,
    width,
    minWidth,
    maxWidth,
    maxHeight,
    inset,
    typography
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
        dark: false,
        light: false
      },
    })
    // require('tailwindcss-dark-mode')(),
    //require('@tailwindcss/ui'),
  ]
};
