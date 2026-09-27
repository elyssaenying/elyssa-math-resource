import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const description =
  "Secondary E-Math and A-Math notes, practice and revision resources for students.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tuition-site-seven.vercel.app"),
  title: {
    default: `${site.siteName} | Secondary Math Resources`,
    template: `%s | ${site.siteName}`,
  },
  description,
  openGraph: {
    title: `${site.siteName} | Secondary Math Resources`,
    description,
    type: "website",
    siteName: site.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.siteName} | Secondary Math Resources`,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-charcoal focus:text-cream focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
