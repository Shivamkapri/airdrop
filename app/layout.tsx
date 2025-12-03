import './globals.css'

export const metadata = {
  title: 'AirDropHub',
  description: 'Airdrop Campaign Platform - Secure, fast, anti-bot',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
