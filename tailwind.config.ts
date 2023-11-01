import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          400: '#ED833B',
          500: '#d64d2b'
        },
        black: {
          100: '#878787',
          400: '#353535',
          500: '#171717',
          900: '#000000'
        },
        grey: {
          200: '#EBEBEB',
          300: '#b9b9b9',
          500: '#38373f',
        },
        'label-grey': 'rgba(255 255 255 0.2)'
      },
      rounded: {
        '4xl': '2.5rem'
      },
      fontFamily: {
        akzidenz: ["var(--font-akzidenz)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
})
export default config
