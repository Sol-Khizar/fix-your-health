import Counter from "../components/Counter";

const AboutUs = () => {
  const counterInfo = [
    {
      id: "1",
      counter: "10000",
      title: "Happy Clients",
    },
    {
      id: "2",
      counter: "35",
      title: "Countries Reached",
    },
    {
      id: "3",
      counter: "13",
      title: "Years Experience",
    },
    {
      id: "4",
      counter: "89K",
      title: "Instagram Community",
    },
  ];
  return (
    <div>
      <div className=" mt-10 bg-[#DEF8DF] md:pb-40 pb-16">
        <h1 className="text-4xl text-center text-[#002040] pt-8 ">
          About <span className="border-b-4 border-[#FF9A3F]">Us</span>
        </h1>
        <p className="mt-5 w-5/6 md:w-4/6 mx-auto text-center font-semibold text-sm md:text-lg mb-10 text-[#002040]">
          At Health Studio, we redefine diets with holistic meal plans for
          healthy weight and managing medical conditions. Our focus is
          personalization based on your history and fitness goals. Food is your
          medicine, guiding you to wellness
        </p>

        <div className="flex flex-col justify-center items-center gap-14 md:flex-row ">
          <img
            src="/aboutUs/about-img.webp"
            alt="about-img"
            className="w-4/5 md:w-2/5 "
          />
          <p className="text-[#002040]  text-sm md:text-xl font-semibold w-4/5  md:w-2/5 ">
            Dt. Richa Doshi, a renowned dietician, brings over a decade of
            global expertise. Her innovative body transformation programs and
            postgraduate degree in Clinical Nutrition and Dietetics have made
            her Mumbai's leading celebrity nutritionist. Her approach is
            holistic, tailored to individual needs, steering clear of diet fads,
            and ensuring a more enjoyable dieting journey.
          </p>
        </div>
        <div className="grid grid-cols-2 md:hidden  gap-2  gap-y-6 w-full  mt-8">
          {counterInfo.map((count) => (
            <Counter
              key={count.id}
              counter={count.counter}
              infoTitle={count.title}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:grid grid-cols-4 gap-8 w-4/5 mx-auto  mt-[-80px]">
        {counterInfo.map((count) => (
          <Counter
            key={count.id}
            counter={count.counter}
            infoTitle={count.title}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
