import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: 'Default - Next.js',
        template: '%s | Template - Next.js (check Profile Route)'
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: 'lightgreen',
          padding: '1rem'
        }}>
          Header
        </header>
        {children}
        <footer style={{
          backgroundColor: 'lightblue',
          padding: '1rem'
        }}>Footer</footer>
      </body>

    </html>
  )
}
