import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './layout/Shared/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food Network',
  description: 'Food Network is an American basic cable channel owned by Television Food Network, G.P., a joint venture and general partnership between Warner Bros. Discovery Networks and Nexstar Media Group.',
}

 const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;