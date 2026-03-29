import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  description: "Your team approves. Finexio executes, protects, and pays you back. Automate accounts payable with $1M payment guarantee, backed by J.P. Morgan.",
  keywords: ["B2B payments", "AP automation", "accounts payable", "virtual card", "ACH payments", "ERP integration", "payment guarantee"],
  authors: [{ name: "Finexio" }],
  openGraph: {
    title: "Finexio | B2B Payment Automation",
    description: "Your team approves. Finexio executes, protects, and pays you back. $5.8B processed, 1,300+ buyers, J.P. Morgan backed.",
    url: "https://finexio.com",
    siteName: "Finexio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finexio | B2B Payment Automation",
    description: "Your team approves. Finexio executes, protects, and pays you back.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  console.log("Process version:", process.version);
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
