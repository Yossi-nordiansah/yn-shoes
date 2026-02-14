import CardProduct from "@/app/_components/ui/CardProduct";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "IDR 2.500.000",
      image: "/images/lan.webp",
      badge: "NEW",
      badgeColor: "bg-blue-600",
      rating: 4.8,
      reviewCount: 120,
      category: "Men's Shoes",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: "IDR 2.200.000",
      image: "/images/bg-hero2.png",
      badge: "Best Seller",
      badgeColor: "bg-red-600",
      rating: 4.9,
      reviewCount: 250,
      category: "Running",
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: "IDR 1.800.000",
      image: "/images/bg-hero3.png",
      badge: "Limited",
      badgeColor: "bg-orange-600",
      rating: 4.5,
      reviewCount: 85,
      category: "Casual",
    },
    {
      id: 4,
      name: "New Balance 574",
      price: "IDR 1.500.000",
      image: "/images/bg-hero1.jpeg",
      badge: "Top Rated",
      badgeColor: "bg-green-600",
      rating: 4.7,
      reviewCount: 190,
      category: "Classic",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Featured Products
          </h2>
          <a
            href="/products"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              reviewCount={product.reviewCount}
              badge={false}
              badgeColor={product.badgeColor}
              badgeText={product.badge}
              isWishlist={true}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
