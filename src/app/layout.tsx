import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ps5studios.com"),
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
    title: "PS5 Studios - The Site About PlayStation Studios For PS5",
    description:
      "Analyzing first-party developers under PlayStation Studios during the PS5 era.",
    url: "https://ps5studios.com",
    siteName: "PS5 Studios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
