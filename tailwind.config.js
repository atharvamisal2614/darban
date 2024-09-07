/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    

 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        learningCurve:['Learning Curve', 'cursive'],
        sofiaRegular:['Sofia Regular','serif'],
        someToLove:['Some To Love','serif'],
        lifeSugar:['Life Sugar','serif'],
        Cartitra:['Cartitra','serif'],
        Croogs:['Croogs','serif']
      },
      colors: {
        primary: '#16acbd'
      }
    },
  },
  plugins: [],
}