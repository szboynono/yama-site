import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snowmountain Financial Group",
  description: "Snowmountain Financial Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={clsx('container mx-auto')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
