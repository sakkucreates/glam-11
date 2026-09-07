import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glam 11 | Beauty Salon & Makeup Studio in Naka Hindola, Lucknow",
  description: "Top-rated beauty salon in Naka Hindola, Lucknow specializing in bridal makeup, HD makeup, hair styling, hair treatments & designer nail art. Led by Certified International Makeup Artist.",
  keywords: "Glam 11, Glam 11 Lucknow, Bridal makeup Lucknow, Nail art Naka Hindola, Hair salon Lucknow, Beauty studio Naka Hindola",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBF8F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#FBF8F6] text-[#262222] font-sans selection:bg-[#E8C8C8] selection:text-[#262222] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
