/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      top:{
        '100': '67.5rem',
      },
      width: {
        '100': '120rem',
        'card-even': '350px',
        'card-odd': '380px',
      },
      height:{
        '100': '67.5rem',
        '99': '34rem',
        'card-even': '540px',
        'card-odd': '640px',
      }
    },
  },
  plugins: [],
}

