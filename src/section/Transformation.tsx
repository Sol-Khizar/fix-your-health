import TransformationPlanCard from "../components/TransformationPlanCard";

const Transformation = () => {
  const threeMonth = [
    {
      id: "1",
      text: "Weight Management Plan - Sustainable weight with nutrition, lifestyle & wellness strategies",
    },
    {
      id: "2",
      text: "Joint Pain Relief Program - Relieve stiffness, reduce inflammation & regain mobility",
    },
    {
      id: "3",
      text: "Women's Wellness Program - Balanced hormones, emotional alignment & holistic care (PCOD/PCOS/menopause)",
    },
    {
      id: "4",
      text: "Gut Reset Program - Cleanse gut, restore digestion & boost overall wellness",
    },
    {
      id: "5",
      text: "Lifestyle Disease Support - Manage diabetes, thyroid imbalance, hypertension & cholesterol",
    },
  ];

  return (
    <>
      <div className="bg-[#DEF8DF] mt-20  md:mb-40 mb-10">
        <h1 className="text-center text-2xl  md:text-5xl text-blue w-4/5 mx-auto pt-10">
          <span className="border-b-[#FF9A3F] border-b-4 pl-3">
            Tranformation Plan
          </span>
        </h1>
        <div className="flex flex-col md:flex-row  justify-center   mt-10  gap-7 md:gap-32 ">
          <TransformationPlanCard
            title="Our services"
            packageText=""
            cardServices={threeMonth}
          />
        </div>

        <div className="grid grid-rows-2 md:grid-cols-5 md:grid-rows-1 md:w-4/5 w-5/6 mx-auto gap-0 md:gap-6 mt-0  md:mt-10 pb-10  md:pb-36 ">
          <div className="flex items-center justify-center md:col-span-2 col-span-5  ">
            <h2 className="text-3xl md:text-5xl/snug text-blue font-semibold text-center md:text-left ">
              Start your Journey with us
            </h2>
          </div>
          <div className="col-span-5 md:col-span-3">
            <img
              src="assets/process.webp"
              alt="our process"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transformation;
