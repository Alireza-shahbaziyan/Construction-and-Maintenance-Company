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
        'Consultion-background':"url('./src/assets/images/ProductServices00004.jpg')",
        'bg-product-service-f':"url('./src/assets/images/ProductServices00002.jpg')",
        'bg-product-service-s':"url('./src/assets/images/ProductServices00001.jpg')",
        'bg-product-service-t':"url('./src/assets/images/ProductServices00003.jpg')",
      }//
    },
    fontFamily:{
      Oswald:["Oswald,sans-serif"],
      WorkSans:["Work Sans,sans-serif"],
      Lato:["Lato,sans-serif"]
    },
  },
  plugins: [require("daisyui")],
}