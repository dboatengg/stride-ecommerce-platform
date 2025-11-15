import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers/theme-provider";
// import ThemeToggle from "@/components/theme-toggle";
import Header  from "@/components/header";
import  Footer  from "@/components/footer";

export const metadata: Metadata = {
  title: "Stride",
  description: "Ecommerce platform built with Next.js",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
