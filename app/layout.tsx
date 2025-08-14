import type { Metadata } from "next";
import { Expletus_Sans } from "next/font/google";
import "./globals.css";

const expletusSans = Expletus_Sans({
  variable: "--font-expletus",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Developed by LLCoolJens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${expletusSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
