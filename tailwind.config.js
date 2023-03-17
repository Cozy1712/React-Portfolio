/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/img/backgroundImg.jpg')",
        'testimonialbg': "url('./img/testimonials-bg.jpg')",
      },
      // colors:{
      //   'body': '#17171F',
      //   'selected-text':'#A3A3FF',
      //   'theme': '3F3FF',
      //   'nav':'#404053',
      //   'secondary':'#9191a4',
      //   'badge': '#3F3F51',
      //   'input-border': '#5656666',
      //   'input': '#2A2A35'
      // },
      fontFamily: {
        'signature':  ["Pacifico"]

    
      }
    },
  },
  plugins: [],
}
