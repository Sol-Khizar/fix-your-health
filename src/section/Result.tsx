import Slider from "react-slick";

import ResultCard from "../components/resultCard";
import { NextArrow, PrevArrow } from "../components/CustomArrow";

const Result = () => {
  const imageLocation = [
    {
      id: "1",
      location: "Group-1.webp",
    },
    {
      id: "2",
      location: "Group-2.webp",
    },
    {
      id: "3",
      location: "Group-3.webp",
    },
    {
      id: "4",
      location: "Group-4.webp",
    },
    {
      id: "5",
      location: "Group-5.webp",
    },
    {
      id: "6",
      location: "Group-6.webp",
    },
    {
      id: "7",
      location: "Group-7.webp",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  return (
    <div className="bg-[#DEF8DF]  mt-20  ">
      <h1 className="pt-20  text-xl md:text-5xl text-center font-semibold text-blue">
        Our{" "}
        <span className="  border-b-[#FF9A3F] border-b-4 px-3 ">results</span>
      </h1>
      <p className="w-3/5 mx-auto text-md text-center mt-5 text-blue font-medium">
        These heroes took the first step - reaching out to us and from there,
        their weight loss journey started. Their results may look like a dream
        but it is a reality for all my clients. Want to build a healthy
        relationship with food that heals your body of PCOS/PCOD, Diabetes,
        Hypertension and other lifestyle health problems? Kickstart your weight
        loss journey today!
      </p>

      <div className="w-5/6 mx-auto mt-24 pb-20">
        <div className="slider-container  ">
          <Slider {...settings}>
            {imageLocation.map((img) => (
              <div key={img.id} className="px-4">
                <ResultCard imagePath={img.location} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Result;
