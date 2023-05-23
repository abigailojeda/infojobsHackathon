/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    backgroundImage: {
      'login': "url('./assets/img/backgroundcrandon.png')",
      'arrowDownIcon': "url('./assets/img/icons/arrow_down_icon.svg')",
      'calendarIcon': "url('./assets/img/icons/calendar.svg')",
    },
    colors: {
      'white':'#fff',
      'primary':'#167DB7',
      'primary_L1':'#5CA4CD',
      'primary_L2':'#8BBEDB',
      'primary_L3':'#C5DFED',
      'primary_D1':'#1972A3',
      'primary_D3':'#23536E',
      'primary_D4':'#274454',
      'gray':'#999999',
      'gray_L3':'#E5E5E5',
      'gray_L4':'#F5F5F5',
      'accent_D1':'#e05c3e',
      'success':'#00a550',
      'alert':'#f1c40f',
      'error':'#e93e40',
    },
    fontFamily: {
      'ssp': ['ssp'],
      'ssp-bold': ['ssp-bold'],
      'ssp-medium': ['ssp-medium'],
    },
    extend: {},
  },
  plugins: [],
}
