import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#043886",
};

export const metadata: Metadata = {
  title: {
    default: "Finexio | B2B Payment Automation",
    template: "%s | Finexio",
  },
  description:
    "Finexio automates accounts payable for mid-market companies—ACH, virtual card, and check payments through a single platform integrated with your ERP.",
  keywords: ["B2B payments", "AP automation", "accounts payable", "virtual card", "ACH payments", "ERP integration", "fintech"],
  authors: [{ name: "Finexio" }],
  openGraph: {
    title: "Finexio | B2B Payment Automation",
    description: "Automate accounts payable. Eliminate manual payments. Process $14B+ annually.",
    url: "https://finexio.com",
    siteName: "Finexio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finexio | B2B Payment Automation",
    description: "Automate accounts payable. Eliminate manual payments.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
