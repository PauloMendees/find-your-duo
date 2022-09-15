const colors = require('./src/styles/colors.cjs')

module.exports = {
  content: [
    './src/**/*.{tsx, jsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: colors,
      backgroundImage: {
        galaxy: "url('/fundo.png')",
        gradient: 'linear-gradient(45deg, #9572FC 5.00%, #43E7AD 80%, #E1D55D 15%)'
      }
    },
  },
  plugins: [],
}