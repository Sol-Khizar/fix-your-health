const Booking = () => {
  return (
    <div className="bg-[#FF9A3F] h-[500px] w-5/6  md:w-3/4 mx-auto mt-12 md:mt-36 rounded-4xl">
      <div className="w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center h-full gap-10 md:gap-20 ">
        <img
          src="booking/img-5.webp"
          alt="cover"
          className="w-52 h-52  md:w-96 md:h-96 rounded-full"
        />
        <div>
          <div className="w-fit mx-auto text-center md:text-left">
            <h2 className="text-white text-2xl  md:text-5xl/tight font-bold font-sans">
              Get A Free Health Consultation
            </h2>
            <h3 className="text-white texl-sm md:text-2xl/relaxed font-bold font-sans">
              Book a free consultation Now
            </h3>
            <button className="text-black bg-white w-fit mt-3 py-1 md:py-3 rounded-full border border-transparent  transition-colors duration-500 ease-in-out hover:bg-transparent hover:border-white hover:text-white px-10 text-lg font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
