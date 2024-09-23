import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dracula" className="scroll-smooth" lang="en" >
      
      <body>
          {children}
      </body>
    </html>
  );
}
