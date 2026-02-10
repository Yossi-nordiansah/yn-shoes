"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "../../../ui/Carousel";

const Hero = () => {
  const slides = [
    <div key="slide-1" className="relative w-full h-screen">
      <Image
        src="/images/bg-hero1.jpeg"
        alt="Hero 1"
        fill
        className="object-cover md:object-center"
        priority
      />
    </div>,
    <div key="slide-2" className="relative w-full h-screen">
      <Image
        src="/images/bg-hero2.png"
        alt="Hero 2"
        fill
        className="object-cover md:object-center object-right"
      />
    </div>,
    <div key="slide-3" className="relative w-full h-screen">
      <Image
        src="/images/bg-hero3.png"
        alt="Hero 3"
        fill
        className="object-cover md:object-center object-center"
      />
    </div>,
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-100">
      {/* Carousel Container */}
      <Carousel slides={slides} autoPlay={true} interval={5000} />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute z-10 md:top-30 top-50 md:w-1/3 md:ml-10 md:px-0 px-4">
        <h1 className="text-white text-sm w-fit bg-blue-900/50 rounded-full border border-white px-4 py-1 text-center font-roboto mb-5">
          SUMMER COLLECTION 2026
        </h1>
        <h1 className="text-white md:text-7xl text-5xl font-bold mb-5">
          Step Into Comfort.
        </h1>
        <p className="text-white text-sm">
          Engineered for the modern movement. Discovered footwear that balances
          unparalleled cushion with minimalist aesthetics.
        </p>
        <div className="flex font-semibold gap-5 mt-5">
          <button className="bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:-translate-y-1 transition">
            Shop Now
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white text-white px-4 py-2 rounded-full cursor-pointer hover:-translate-y-1 transition">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
