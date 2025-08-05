import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shinami</title>
      </head>
      <body className="relative">
        <Navbar />
        <ButtonToTop />
        {children}
      </body>
      <Footer />
    </html>
  );
}
