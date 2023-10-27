/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#e3f2fd',

        primary: '#1E3A8A',
        link: '#283593',
      }
    },
  },
  plugins: [],
}

