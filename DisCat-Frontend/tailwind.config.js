/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purpleWhite: '#c9c3cf',
        backgroundBlack: '#141118'
      }
    },
  },
  plugins: [],
}