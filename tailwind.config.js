/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ["Mulish" ,'sans-serif']
    },
      backgroundImage: {
        'hero-bg-img': "url('./images/bgbanner.png')",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

