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
        'card-even': '320px',
        'card-odd': '350px',
      },
      height:{
        '100': '67.5rem',
        '99': '34rem',
        'card-even': '460px',
        'card-odd': '540px',
      }
    },
  },
  plugins: [],
}

