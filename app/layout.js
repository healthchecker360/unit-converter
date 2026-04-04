import './globals.css'
export const metadata = { title: 'UnitConvert Pro', description: 'Free Unit Converter' }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
