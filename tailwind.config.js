module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'blue-lightest': '#C9F0FF',
      'green-lightest': '#ECFCE5',
      'yellow-lightest': '#FFEFD7'
    }),
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    textColor: {
      'ink-base': '#404446',
      'ink-darkest': '#090A0A',
      'blue-darkest': '#0065D0',
      'green-darkest': '#198155',
      'yellow-darkest': '#A05E03'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
