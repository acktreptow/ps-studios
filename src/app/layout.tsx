import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PS5 Studios",
    template: "%s | PS5 Studios",
  },
  description:
    "Analyzing the first-party developers under PlayStation Studios during the PS5 era.",
  icons: {
    icon: "images/favicon.ico",
  },
  openGraph: {
    title: "PS5 Studios",
    description:
      "Analyzing the first-party developers under PlayStation Studios during the PS5 era.",
    url: "https://ps5studios.com",
    siteName: "PS5 Studios",
    images: [
      {
        url: "images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "PS5 Studios",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-gray-50 to-gray-300 flex flex-col min-h-screen ${inter.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
