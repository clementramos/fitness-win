/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'hero' : "url(../public/IMG-20180630-WA0009.png)",
      'level' : "url(../public/received_1295341857306354-removebg.png)",
      'programm' : "url(../public/FB_IMG_1528984283679-transformed.png)",
      'prices' : "url(../public/a8ed74ae-264b-4f32-8a6d-ebc32f07a27d-transformed.png)",
    },
    animation : {
      'marquee' : 'marquee 25s linear infinite',
      'marquee2' : 'marquee 25s linear infinite'
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      }
    },
  },
  plugins: [],
}

