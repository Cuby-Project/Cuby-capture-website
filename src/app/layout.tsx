import type { Metadata } from "next";
import "./globals.css";
import React from "react";

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
      <body className="h-screen">
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
