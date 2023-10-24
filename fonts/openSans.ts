import { Open_Sans } from "next/font/google"

const light = Open_Sans({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
})

const medium = Open_Sans({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const bold = Open_Sans({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default {
    light: light.className,
    medium: medium.className,
    bold: bold.className
}