/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins-Regular', 'sans-serif'],
        'medium': ['Poppins-Medium', 'sans-serif'],
        'semibold': ['Poppins-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

