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
        'military-green-400': '#A5B094',
        'military-green-500': '#747F64',
        'gray-200': '#EBEBEB',
        'black-400': '#353535',
        'black-500': '#171717',
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
