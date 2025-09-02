import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>UniVerse</title>
      </head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
