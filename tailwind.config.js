module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
