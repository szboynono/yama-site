import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snowmountain Financial Group",
  description:
    "Snowmountain Financial Group: Pioneering data analysis and business intelligence for financial institutions. Harness the power of your data to drive decisions and boost profitability.",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Snowmountain Financial Group",
    description:
      "Snowmountain Financial Group: Pioneering data analysis and business intelligence for financial institutions. Harness the power of your data to drive decisions and boost profitability.",
  },
  keywords: [
    "data analytics consulting services",
    "financial data analysis",
    "finance management consultant",
    "business data insights",
    "financial performance analytics",
    "data-driven financial strategies",
    "business intelligence consulting",
    "financial data visualization",
    "custom financial analytics solutions",
    "finance trend analysis",
    "budget forecasting analytics",
    "financial data processing",
    "investment data analytics",
    "cash flow data analysis",
    "enterprise financial management consulting",
    "big data in finance",
    "financial risk analytics",
    "profit optimization analytics",
    "financial KPI analysis",
    "business growth analytics",
  ],
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
      <body className={clsx("container mx-auto")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
