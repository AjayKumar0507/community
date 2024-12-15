/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrollbarTrack: "#f5f5f5",
        scrollbarThumb: "#bfbfbf",
        scrollbarThumbHover: "#a6a6a6",
      },
      backgroundImage:{
        'banner':"url('/images/banner.jpg')"
      }
    },
  },
  plugins: [],
}