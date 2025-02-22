import './globals.css'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'PHI - Ecuador',
  description: 'Red patrimonio histórico y cultural iberoamericano',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {<body className={roboto.className}>{children}</body>}
    </html>
  )
}
