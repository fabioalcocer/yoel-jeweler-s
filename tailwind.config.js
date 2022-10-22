/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cinzel Decorative, sans-serif']
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
