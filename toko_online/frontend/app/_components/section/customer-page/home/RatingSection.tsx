import CardSlider from "../../../ui/CardSlider";
import RatingCard from "../../../ui/RatingCard";

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

        <CardSlider
          slidesToShow={3}
          dots={false}
          arrow={false}
          autoplaySpeed={2500}
          responsive={{
            lg: 3,
            md: 2,
            sm: 1,
          }}
        >
          {testimonials.map((testimonial) => (
            <RatingCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
              avatar={testimonial.avatar}
            />
          ))}
        </CardSlider>
      </div>
    </section>
  );
};

export default RatingSection;
