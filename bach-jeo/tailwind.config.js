/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: [
          "'ITC Korinna', Inter"
        ],
        cat: [
          "'Swiss921 BT', Inter"
        ]
      },
      colors: {
        "primary-text": "#D5F8FF",
        "cat-text": "#FBB05C",
        "cat-bg": "#001197",
        "primary-bg": "#090514"
      }
    },
  },
  plugins: [],
}

