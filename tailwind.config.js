/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}",  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // enables dark mode based on a class
  theme: {
    extend: {
      backgroundColor: {
        light: '#FFFFFF', // Light theme
        dark: '#171717', // Dark theme
      },
      colors: {
        blue: {
          '50': '#EBF5FA',  // Lightest
          '100': '#CCE3F5',
          '200': '#AAD1EF',
          '300': '#89BFEA',
          '400': '#68ADE5',
          '500': '#469BDF',
          '600': '#2489DA',
          '700': '#0277D5',
          '800': '#0167C1',
          '900': '#0057AD', // Darkest
          DEFAULT: '#057DCD', 
        }
      }
    },
  },
  variants: {
    extends: {
      backgroundColor: ['dark'], // Enable dark variant for background color
    }
  },
  plugins: [require('@tailwindcss/forms'),  require('flowbite/plugin')],
}