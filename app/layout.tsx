import type { Metadata, Viewport } from "next";
import { Caveat, Geist_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { COMPANY } from "@/lib/site";
import "./globals.css";

// Inter matches the product UI the palette is ported from.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Mono carries the technical cues: eyebrows, step numbers, captions, URLs.
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Caveat is the handwritten margin voice — annotations only, never body copy.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OneClickHR — HR operations, finally in one calm place",
    template: "%s · OneClickHR",
  },
  description:
    "Manage attendance, leave, payroll, work authorization, tasks, and employee operations from one secure HR workspace.",
  applicationName: "OneClickHR",
  creator: COMPANY.name,
  publisher: COMPANY.legalName,
  keywords: [
    "HR software",
    "HR operations platform",
    "attendance tracking",
    "leave management",
    "payroll",
    "work authorization reminders",
    "employee management",
    "NextKinLife",
  ],
  openGraph: {
    type: "website",
    siteName: "OneClickHR",
    title: "OneClickHR — HR operations, finally in one calm place",
    description:
      "Attendance, leave, payroll, work authorization, tasks and employee operations in one secure HR workspace.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneClickHR — HR operations, finally in one calm place",
    description:
      "Attendance, leave, payroll, work authorization, tasks and employee operations in one secure HR workspace.",
  },
  robots: { index: true, follow: true },
};

// Matches the paper canvas so mobile browser chrome blends with the page.
export const viewport: Viewport = {
  themeColor: "#f6f7f9",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-canvas">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
