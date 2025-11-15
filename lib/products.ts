export const products = [
  {
    id: 1,
    name: "Stride Runner",
    slug: "stride-runner",
    price: 89,
    description: "A lightweight, durable running shoe designed for comfort and performance.",
    image: "/shoes/runner.jpg", // placeholder
  },
  {
    id: 2,
    name: "Urban Flex",
    slug: "urban-flex",
    price: 112,
    description: "A stylish urban sneaker built for all-day comfort and everyday wear.",
    image: "/shoes/urban.jpg",
  },
  {
    id: 3,
    name: "Comfort Glide",
    slug: "comfort-glide",
    price: 76,
    description: "Soft, breathable, and perfect for casual walking and relaxed outings.",
    image: "/shoes/comfort.jpg",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
