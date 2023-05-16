/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "main-green": "#5C7D6D",
        "eggplant": "#5D4954",
        "gray": "#EFEEEE",
        "background": "#EAE7DD",
        "green-b": "#F5F5F5",
        "off-white": "#FFF8F0",
        "mint-green": "#d0e1d7",
        "coffee": "#9E9A8E",
        "text-p" : "#43182A",
        "dark": "#54605A"

        
      }
    },
  },
  plugins: [],
})
