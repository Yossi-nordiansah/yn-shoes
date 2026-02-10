"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import CardSlider from "../../../ui/CardSlider";

const CategorySection = () => {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };

  const categories = [
    {
      name: "Running",
      image: "/images/sepatu running.png",
      productCount: "855 Products",
    },
    {
      name: "Casual",
      image: "/images/sepatu casual.png",
      productCount: "621 Products",
    },
    {
      name: "Basketball",
      image: "/images/sepatu basketball.png",
      productCount: "234 Products",
    },
    {
      name: "Futsal / Football",
      image: "/images/sepatu futbal.png",
      productCount: "412 Products",
    },
    {
      name: "Hiking / Outdoor",
      image: "/images/sepatu tracking.png",
      productCount: "412 Products",
    },
  ];

  return (
    <section className="bg-gray-50 pt-16 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Shop by Category
        </h2>
        <p className="mb-8 text-slate-500">
          Tailored collections for every lifestyle and activity.
        </p>
      </div>
      <div className="sm:mx-8 mx-5">
        <CardSlider
          dots={false}
          arrow={false}
          infinite={true}
          swipeToSlide={true}
          autoplaySpeed={3000}
          speed={500}
          pauseOnHover={true}
          responsive={{
            sm: 1,
            md: 2,
            lg: 3,
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:max-w-96 max-w-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
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
                <p className="text-sm text-blue-400 flex items-center gap-1">
                  Shop Now <FaArrowRight />
                </p>
              </div>
            </div>
          ))}
        </CardSlider>
      </div>
    </section>
  );
};

export default CategorySection;
