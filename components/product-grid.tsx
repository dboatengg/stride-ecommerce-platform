const products = [
  { id: 1, name: "Stride Runner", price: "GH₵ 289", image: "" },
  { id: 2, name: "Urban Flex", price: "GH₵ 112", image: "" },
  { id: 3, name: "Comfort Glide", price: "GH₵ 176", image: "" },
];

export default function ProductGrid() {
  return (
    <section className="p-6 md:p-8 rounded-xl shadow-sm">
      <h2 className="text-title font-semibold mb-8">Popular Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="p-6 rounded-radius bg-surface text-surface-foreground shadow-sm border border-black/5 dark:border-white/10"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4" />

            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="opacity-80">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
