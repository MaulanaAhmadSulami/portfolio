/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : { 'navtop': '#A9D2D5'},
    },
    fontFamily: {
      'rubik-mono-one': ['"Rubik Mono One"', 'sans'],
      'dm-mono' : ['"DM Mono"', 'sans'],
      'momomaniac-one' : ['"Momomaniac One"', 'sans'],
    }
  },
  plugins: [],
}

