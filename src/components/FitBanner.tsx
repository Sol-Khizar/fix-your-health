type FitBannerProps = {
  title: string;
  buttonTitle: string;
};

const FitBanner = ({ title, buttonTitle }: FitBannerProps) => {
  return (
    <div className="mt-8 md:mt-14  relative ">
      <div className="flex flex-col  md:flex-row md:justify-around items-center bg-[#FF9A3F] w-5/6 md:w-3/4  mx-auto  rounded-2xl py-8 ">
        <h1 className="text-sm text-center md:text-left md:text-3xl text-black md:text-white font-semibold w-3/4  md:w-fit">
          {title}
        </h1>
        <button className="text-black bg-white w-fit mt-3 py-1 md:py-3 rounded-full border border-transparent  transition-colors duration-500 ease-in-out hover:bg-transparent hover:border-white hover:text-white px-10 text-lg font-semibold">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default FitBanner;
