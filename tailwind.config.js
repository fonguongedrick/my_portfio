/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#351A9A',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#42B6C5',
      'secondary': '#F6F6F6',
      'danger': '#e3342f',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#fff',
      'secondary': '#42B6C5',
      'danger': '#e3342f',
    }),
  },
  plugins: [],
}