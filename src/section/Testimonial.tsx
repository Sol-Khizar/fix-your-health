import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/CustomArrow";
import TestimonialCard from "../components/TestimonialCard";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialCard = [
    {
      id: "1",
      image: "Client -1.webp",
      clientName: "Charmy",
      star: "★★★★★",
      clientReview:
        "Richa's well-balanced diet plan transformed my life. Lost 8.5 kgs, improved PCOD in 3 months. Feel healthy, active, and grateful!",
    },
    {
      id: "2",
      image: "Client -2.webp",
      clientName: "Shruthi",
      star: "★★★★",
      clientReview:
        "Richa is amazing! Tailored, simple diet plans for a healthier life. Highly recommend her expertise and approach.",
    },
    {
      id: "3",
      image: "Client -3.webp",
      clientName: "Sneha",
      star: "★★★",
      clientReview:
        "Thanks for a healthier lifestyle. Your guidance led to a significant transformation, teaching balance in everything. Grateful for your expertise",
    },
    {
      id: "4",
      image: "Client -4.webp",
      clientName: "Vidhi ",
      star: "★★",
      clientReview:
        "Dt. Richa Doshi is superb! Her positive approach to dieting is enjoyable, and she's a fantastic stress booster. Highly recommended!",
    },
    {
      id: "5",
      image: "Client -5.webp",
      clientName: "Ananya",
      star: "★★★",
      clientReview:
        "Richa's guidance transformed my approach to food. Sustainable diets, indulgence, and fantastic results. Highly recommend for a healthier lifestyle!",
    },
  ];
  return (
    <>
      <div className="mt-12 md:mt-32">
        <h1 className="text-blue text-4xl font-bold text-center mb-20">
          Testimonials
        </h1>

        <div className="relative md:w-5/6 w-[90%] mx-auto mt-6 md:mt-24 pb-9 md:pb-20">
          <Slider {...settings}>
            {testimonialCard.map((review) => (
              <div key={review.id} className="px-4">
                <TestimonialCard
                  clientName={review.clientName}
                  clientReview={review.clientReview}
                  image={review.image}
                  star={review.star}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
