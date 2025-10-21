import './globals.css'

export const metadata = {
  title: 'ÍléOtaku - Your Home for Manga',
  description: 'Discover African and global manga stories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}