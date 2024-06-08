/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
 
module.exports = withMT({
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'fon': "url('/img/assets/fon.svg')",
        'hero-image': "url('/img/assets/user.png')",
        'portfolio': "url('/img/assets/portfolio.jpg)"
      }
    },
    backgroundSize: {
      '40%':'40%'
    }
  },
  plugins: [],
});

