/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '100': '120rem',
      },
      height:{
        '100': '67.5rem',
      }
    },
  },
  plugins: [],
}

