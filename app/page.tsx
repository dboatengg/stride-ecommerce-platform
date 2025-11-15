import ProductGrid from "@/components/product-grid";

export default function Home() {
  return (
    <>
    <section className="p-6 md:p-8  flex flex-col md:flex-row items-center gap-12">

      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-display font-bold mb-6">
          Step Into Comfort & Style
        </h1>

        <p className="text-lg opacity-80 mb-8">
          Explore premium footwear built for performance, comfort, and everyday use.
        </p>

        <a
          href="/products"
          className="inline-block px-8 py-4 bg-brand text-white rounded-radius hover:bg-brand-dark transition"
        >
          Shop Now
        </a>
      </div>

      {/* Hero Placeholder Image */}
      <div className="flex-1 h-80 bg-gray-200 dark:bg-gray-800 rounded-xl" />
    </section>
    <ProductGrid />
    </>
  );
}
