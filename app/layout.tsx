import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Stride",
  description: "Ecommerce platform built with Next.js",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <header className="p-4 flex justify-end bg-header-bg text-header-fg transition-colors">
            <ThemeToggle />
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
