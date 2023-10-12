import { Noto_Sans_Display } from 'next/font/google'
import localFont from 'next/font/local'

export const space_grotesk = Noto_Sans_Display({
    subsets: ['latin'],
    display: 'swap',
  })

// SpaceGrotesk-VariableFont_wght.ttf

// export const space_grotesk = localFont({
//     src: [
//         {
//             path: '../public/SpaceGrotesk-Bold.ttf',
//             weight: '400',
//             style: 'normal'
//         },
//     ],
//   })

  
export const arkidenz = localFont({
    src: [
        {
            path: '../public/Akzidenz-Grotesk Pro Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/akzidenzgroteskpro_boldex.otf',
            weight: '700',
            style: 'normal'
        },
    ],
  })