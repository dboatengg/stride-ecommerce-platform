
import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductGrid() {
  return (
    <section className="py-16">
      <div className="page-container">
        <h2 className="text-title font-semibold mb-10">Popular Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="p-6 sm:p-8 rounded-xl bg-surface text-surface-foreground shadow-sm border border-black/10 dark:border-white/10 transition hover:shadow-md"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg mb-6" />

              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
              <p className="opacity-80">GH₵{p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
