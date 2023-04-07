import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClienOnly from './components/ClienOnly'

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
