import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Trends Aliganj | Unisex Hair & Style Salon & Makeup Studio",
  description: "Official demo site for Green Trends Aliganj, Lucknow. Professional haircuts, hair styling, colouring, skin care, facials, waxing & bridal makeover packages.",
  keywords: [
    "Green Trends Aliganj",
    "Salon in Aliganj Lucknow",
    "Hair Salon Lucknow",
    "Makeup Studio Aliganj",
    "Bridal Salon Lucknow",
    "Unisex Salon Lucknow"
  ],
  openGraph: {
    title: "Green Trends Aliganj | Unisex Hair & Style Salon & Makeup Studio",
    description: "Professional hair, beauty, skin care and bridal services at Green Trends Aliganj, Lucknow.",
    url: "https://mygreentrends.in",
    siteName: "Green Trends Aliganj",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#292525] font-sans selection:bg-[#E8C7C7] selection:text-[#292525] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
