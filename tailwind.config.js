/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'header-bacground':"url('./src/assets/images/modern-skyscraper-with-many-windows-during-daytime.jpg')",
        'Consultion-background':"url('./src/assets/images/mens-shaking-handshake.jpg')"
      }
    },
    fontFamily:{
      Oswald:["Oswald,sans-serif"],
      WorkSans:["Work Sans,sans-serif"],
      Lato:["Lato,sans-serif"]
    },
  },
  plugins: [require("daisyui")],
}