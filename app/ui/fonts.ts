import { Poppins, Merriweather } from 'next/font/google'

export const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

export const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
});