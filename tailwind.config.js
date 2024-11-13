/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      width: {
        '3/4': '75%',
      },
      backgroundImage: {
        'shipone': "url('src/assets/Shipone.jpg')",
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
