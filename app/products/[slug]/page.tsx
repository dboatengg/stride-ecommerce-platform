import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <section className="py-20">
      <div className="page-container grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-xl" />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-lg opacity-80 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-semibold mb-8">
            ${product.price}
          </p>

          <button className="px-8 py-4 rounded-xl bg-brand text-white hover:bg-brand-dark transition">
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
}
