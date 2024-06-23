import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cuby capture website",
  description: "Cuby capture website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      {/*
        <div id="warning_computer" className="hidden md:flex">
          <p>
            This website isn't compatible with computer usage.
          </p>
        </div>*/}
        {children}
      </body>
    </html>
  );
}
