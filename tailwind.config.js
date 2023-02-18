/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'laptop': {'min': '1023px'},

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    backgroundImage: {
      'hero' : "url(../public/311589413_641559444110696_8741248957289991299_n.jpg)",
      'hero1' : "url(../public/68663104_2520013301408333_215679822947418112_n.jpg)",
      'level' : "url(../public/received_1295341857306354-removebg.png)",
      'programm' : "url(../public/FB_IMG_1528984283679-transformed.png)",
      'prices' : "url(../public/a8ed74ae-264b-4f32-8a6d-ebc32f07a27d-transformed.png)",
      'coaching' : "url(../public/COACHING.png)",
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
  plugins: [
    require("flowbite/plugin")
  ],
}

