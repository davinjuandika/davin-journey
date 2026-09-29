import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davin's Journey | Pixel Portfolio",
  description: "An interactive pixel RPG portfolio built with Next.js and Canvas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
