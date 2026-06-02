import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Robotflow - Webflow Template",
  description: "Robotflow Webflow Template - Discover the new era of robotic technology",
  keywords: ["Robotflow", "Webflow", "Template", "Robotics", "Technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#020202] text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
