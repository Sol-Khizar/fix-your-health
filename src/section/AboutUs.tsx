// import Counter from "../components/Counter";

const AboutUs = () => {
  // const counterInfo = [
  //   {
  //     id: "1",
  //     counter: "10000",
  //     title: "Happy Clients",
  //   },
  //   {
  //     id: "2",
  //     counter: "35",
  //     title: "Countries Reached",
  //   },
  //   {
  //     id: "3",
  //     counter: "13",
  //     title: "Years Experience",
  //   },
  //   {
  //     id: "4",
  //     counter: "89K",
  //     title: "Instagram Community",
  //   },
  // ];

  return (
    <div className="bg-[#DEF8DF]  md:pb-16 pb-10">
      <h1 className="text-4xl text-center text-[#002040] pt-8 ">
        About <span className="border-b-4 border-[#FF9A3F]">Us</span>
      </h1>

      <p className="mt-5 w-5/6 md:w-4/6 mx-auto text-center  text-sm md:text-lg mb-10 text-[#002040]">
        At Ayuvive, we believe true wellness goes beyond diets and quick fixes.
        We blend ancient Ayurvedic wisdom, modern nutrition, and energy
        alignment to bring you a holistic approach to wellness. Our mission is
        to help you align your inner energy, nourish your body, and transform
        your health. We understand that every individual carries a unique energy
        blueprint. By harmonizing this inner vibration with the right nutrition
        and lifestyle choices, we bring you a holistic path to health—one that
        nurtures your body, mind, and soul. With Ayuvive, you don’t just chase
        goals—you create balance, vitality, and lasting well-being.
      </p>

      <div className="flex flex-col  items-center justify-center gap-14 md:flex-row w-[80%] mx-auto">
        <img
          src="/assets/aarti-about-2.png"
          alt="aarti about"
          className="w-4/5 md:w-1/3 rounded-xl "
        />
        <p className="text-[#002040]  text-md md:text-xl font-semibold w-4/5  md:w-2/5 ">
          With over 5 years of experience in the health and wellness industry, I’ve worked with leading institutions as a Junior to Senior Dietician and Team Leader. Through my journey, I’ve helped clients overcome a variety of health challenges by identifying their core issues.
          To address these more effectively, I developed the Ayuvive Method — a unique blend of AI technology, Nutrition, and Ayurveda.
          This integrative approach targets the root cause of illness, not just the symptoms.
          At Ayuvive, we offer a personalized path to long-term wellness.
        </p>
      </div>
      {/* <div className="grid grid-cols-2 md:hidden  gap-2  gap-y-6 w-full  mt-8">
          {counterInfo.map((count) => (
            <Counter
              key={count.id}
              counter={count.counter}  
              infoTitle={count.title}
            />
          ))}
        </div> */}
    </div>
  );
};

export default AboutUs;
