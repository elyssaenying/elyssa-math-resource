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

export const metadata: Metadata = {
  title: {
    default: `${site.teacherName} | Secondary Math Resources`,
    template: `%s | ${site.teacherName}`,
  },
  description:
    "Secondary E-Math and A-Math notes, worksheets and revision resources for students.",
  openGraph: {
    title: `${site.teacherName} | Secondary Math Resources`,
    description:
      "Secondary E-Math and A-Math notes, worksheets and revision resources for students.",
    type: "website",
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
