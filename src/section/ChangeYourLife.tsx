import ChangeYourLifeCard from "../components/ChangeYourLifeCard";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/CustomArrow";

const ChangeYourLife = () => {
  const icons = [
    {
      id: 1,
      image: "/icon-1.webp",
      iconText: "Mood & Confidence boost",
    },
    {
      id: 2,
      image: "/icon-2.webp",
      iconText: "Enhanced sleep",
    },
    {
      id: 3,
      image: "/icon-3.webp",
      iconText: "Energy & Vitality boost",
    },
    {
      id: 4,
      image: "/icon-4.webp",
      iconText: "Improved Body Image",
    },
    {
      id: 5,
      image: "/icon-5.webp",
      iconText: "Reduced stress",
    },
  ];
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
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
    <>
      <h1 className="text-blue text-center text-3xl md:text-5xl font-semibold mt-20 w-3/4  mx-auto  ">
        How will this{" "}
        <span className="  border-b-[#FF9A3F] border-b-4 ">
          change your life?
        </span>
      </h1>
      <div className="hidden md:grid grid-rows-1 md:grid-cols-5  w-5/6 mx-auto mt-12 mb-24">
        {icons.map((icon) => (
          <ChangeYourLifeCard
            key={icon.id}
            icon={icon.image}
            iconText={icon.iconText}
          />
        ))}
      </div>

      <div className="slider-container md:hidden  ">
        <Slider {...settings}>
          {icons.map((icon) => (
            <ChangeYourLifeCard
              key={icon.id}
              icon={icon.image}
              iconText={icon.iconText}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ChangeYourLife;
