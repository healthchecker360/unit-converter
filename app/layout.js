import './globals.css'

export const metadata = {
  title: 'UnitConvert Pro — Free Online Unit Converter',
  description: 'Free online unit converter. Convert Length, Weight, Temperature, Area, Volume, Speed and Currency instantly. AI-powered explanations by Google Gemini.',
  keywords: 'unit converter, length converter, weight converter, temperature converter, currency converter, free converter online',
  openGraph: {
    title: 'UnitConvert Pro — Free Online Unit Converter',
    description: 'Convert any unit instantly. Length, Weight, Temperature, Currency and more.',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="add-your-code-here" />
      </head>
      <body>{children}</body>
    </html>
  )
}
