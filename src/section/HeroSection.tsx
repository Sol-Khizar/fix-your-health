import FormInput from "../components/FormInput";
import Header from "../components/Header";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[url(/banner/home-banner.PNG)] ">
        <Header />
        <div className="grid  grid-cols-12 place-items-center w-full md:w-4/5  mx-auto  gap-5 md:gap-0 mt-[-8px] md:mt-[-80px]    ">
          <div className="col-span-12 md:col-span-3 px-4 md:px-0 relative z-0 md:left-11 left-0">
            <h2 className="text-3xl md:text-5xl font-black text-[#002040] leading-[1.4] ">
              Don't starve yourself to lose weight
            </h2>
            <p className="text-xl md:text-lg font-bold mt-3 text-[#002040] ">
              Eat right & lose weight with
            </p>
            <p className="text-xl md:text-lg font-bold mt-3 text-[#FF9A3F]">
              Dt. Richa Doshi
            </p>
          </div>
          <img
            src="/herosection-image/home-middle-img.webp "
            alt="middle image"
            className=" col-span-12 md:col-span-5 relative z-10 max-h-[90vh] object-contain  "
          />
          <div className="col-span-12 md:col-span-3 px-4 md:px-0   ">
            <p className=" text-[#002040] text-center font-bold text-3xl ">
              Get Started Today and Feel the Difference!
            </p>
            <FormInput placeholder="Name*" />
            <FormInput placeholder="Phone*" />
            <FormInput placeholder="City*" />

            <button className="text-white bg-[#FF9A3F] w-full mt-3 py-3 rounded-full border border-transparent  transition-colors duration-500 ease-in-out hover:bg-white hover:border-[#FF9A3F] hover:text-[#FF9A3F]">
              Consult Now
            </button>
          </div>
        </div>
      </div>

      <img
        src="banner/awardImage.webp"
        alt="awardImage"
        className=" w-4/5 md:w-3/5 mx-auto my-12 "
      />
    </>
  );
};

export default HeroSection;
