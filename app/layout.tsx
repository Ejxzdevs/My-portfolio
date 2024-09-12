import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" data-theme="dracula" lang="en" >
      <body>
          {children}
      </body>
    </html>
  );
}
