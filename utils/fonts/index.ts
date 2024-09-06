import { Roboto, Oswald, Lexend } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: 'normal',
    preload: true,
    variable: '--strongwood-font',
    display: 'swap'
})

export const oswald = Oswald({ subsets: ["latin"]});

export const lexend = Lexend({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: 'normal',
    preload: true,
    variable: '--lexend-font',
    display: 'swap'
});
