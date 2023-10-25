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
          400: '#A5B094',
          500: '#747F64'
        },
        black: {
          400: '#353535',
          500: '#171717',
          900: '#000000'
        },
        grey: {
          200: '#EBEBEB'
        },
        'label-grey': 'rgba(255 255 255 0.2)'
      },
      rounded: {
        '4xl': '2.5rem'
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)']
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
})
export default config
