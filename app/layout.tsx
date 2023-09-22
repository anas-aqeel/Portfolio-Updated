import "@/app/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import incognito from "./font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Anas Aqeel | Front-End Developer",
  description:
    "Anas Aqeel is a Front-end Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://victoreke.com",
  ogImage:
    "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "victoreke.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  themeColor: "#33E092",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          {/* <Analytics /> */}
          <Footer />
        </Providers>
      </body>
      {/* <Script
        async
        src="https://statsvictor.vercel.app/script.js"
        data-website-id="8a51e6af-840d-491e-912c-a82345d54e0d"
      /> */}
    </html>
  );
}