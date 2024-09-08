import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dracula" lang="en" >
      <body>
      <Navbar/>
          {children}
      </body>
    </html>
  );
}
