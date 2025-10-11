import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description: profile.bio[0],
  keywords: [
    "portfolio",
    "software engineer",
    "machine learning",
    "web development",
    "AI researcher",
  ],
  authors: [{ name: profile.name, url: profile.socialLinks.website }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.socialLinks.website || "https://yourwebsite.com",
    title: profile.name,
    description: profile.bio[0],
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: profile.bio[0],
    creator: profile.socialLinks.twitter
      ? `@${profile.socialLinks.twitter.split("/").pop()}`
      : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
