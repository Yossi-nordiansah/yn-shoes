'use client';

import Image from 'next/image';

const BrandSection = () => {
  const brands = [
    { name: 'Nike', logo: '/images/brands-logo/nike-logo.png' },
    { name: 'Adidas', logo: '/images/brands-logo/adidas-logo.png' },
    { name: 'Puma', logo: '/images/brands-logo/puma-logo.png' },
    { name: 'New Balance', logo: '/images/brands-logo/New-Balance-logo.png' },
    { name: 'Converse', logo: '/images/brands-logo/converse-logo.png' },
    { name: 'Vans', logo: '/images/brands-logo/vans-logo.png' },
    { name: 'Asics', logo: '/images/brands-logo/asics-logo.png' },
    { name: 'Reebok', logo: '/images/brands-logo/reebok-logo.png' },
    { name: 'Mizuno', logo: '/images/brands-logo/mizuno-logo.png' },
  ];

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="relative group flex">
        {/* Scrolling Container 1 */}
        <div className="flex animate-scroll-left gap-16 pr-16 items-center flex-shrink-0">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex min-w-[150px] items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Scrolling Container 2 (Duplicate) */}
        <div className="flex animate-scroll-left gap-16 pr-16 items-center flex-shrink-0" aria-hidden="true">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}-dup`}
              className="flex min-w-[150px] items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .group:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandSection;
