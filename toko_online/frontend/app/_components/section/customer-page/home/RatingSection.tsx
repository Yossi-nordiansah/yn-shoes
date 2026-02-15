import Image from "next/image";

const RatingSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment:
        "Amazing quality and comfort! These are the best shoes I have ever owned.",
      avatar: "/images/bg-hero1.jpeg",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      comment: "Perfect fit and great style. Highly recommend to everyone!",
      avatar: "/images/bg-hero2.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 4,
      comment: "Good product, fast shipping. Will buy again!",
      avatar: "/images/bg-hero3.png",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-gray-50 p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
