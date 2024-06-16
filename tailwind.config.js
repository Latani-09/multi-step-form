/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPurple: 'rgb(207, 159, 255)',
      },
      backgroundColor: theme => ({
        'light-purple': theme('colors.lightPurple'),
      }),
    },
  },
  plugins: [],
}
