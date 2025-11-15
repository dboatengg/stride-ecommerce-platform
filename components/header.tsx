"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-header-bg text-header-fg border-b" style={{ borderColor: "var(--header-border)" }}>
      <div className="page-container flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Stride
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/products" className="hover:opacity-75 transition">
            Products
          </Link>
          <Link href="/about" className="hover:opacity-75 transition">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-75 transition">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="hover:opacity-75 transition">
            <ShoppingCart size={22} />
          </Link>
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}


// export { Header };