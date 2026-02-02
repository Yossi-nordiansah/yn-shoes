import Image from "next/image";

const CategorySection = () => {
  const categories = [
    {
      name: "Men's Shoes",
      image: "/images/bg-hero1.jpeg",
      productCount: "855 Products",
    },
    {
      name: "Women's Shoes",
      image: "/images/bg-hero2.png",
      productCount: "621 Products",
    },
    {
      name: "Kids Shoes",
      image: "/images/bg-hero3.png",
      productCount: "234 Products",
    },
    {
      name: "Running",
      image: "/images/bg-hero1.jpeg",
      productCount: "412 Products",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Shop by Category
        </h2>
        <p className="mb-8 text-slate-500">
          Tailored collections for every lifestyle and activity.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold">{category.name}</h3>
                <p className="text-sm opacity-90">{category.productCount}</p>
                <p className="text-sm text-blue-400">Shop Now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
