import type { Metadata } from "next";
import { Lacquer } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const lacquer = Lacquer({ weight: "400", subsets: ["latin"], variable: "--font-lacquer" });

export const metadata: Metadata = {
  title: "Abhinav Volety",
  description: "Personal website of Abhinav Volety — UIUC CS & Econ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lacquer.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
