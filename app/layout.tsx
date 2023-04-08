import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar'
import ClienOnly from './components/ClientOnly'

export const metadata = {
    title: 'Clone AirBnb',
    description: 'Clone AirBnb with create next app',
}

const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ClienOnly>
                    <Navbar />
                </ClienOnly>
                {children}
            </body>
        </html>
    )
}
