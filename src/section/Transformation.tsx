import TransformationPlanCard from "../components/TransformationPlanCard";

const Transformation = () => {
  const threeMonth = [
    { id: "1", text: "Bi-weekly diet plans" },
    { id: "2", text: "Blood report review" },
    { id: "3", text: "12+ diet charts" },
    { id: "4", text: "Home/gym workouts" },
    { id: "5", text: "Eat-out menu help" },
    { id: "6", text: "Healthy meal tips" },
    { id: "7", text: "Weekly check-ins" },
    { id: "8", text: "Food swap guidance" },
    { id: "9", text: "Basic lifestyle tips" },
    { id: "10", text: "3-day meal feedback" },
  ];

  const sixMonth = [
    { id: "11", text: "12 progress check-ins" },
    { id: "12", text: "Chat support (Mon–Sat)" },
    { id: "13", text: "Habit & lifestyle tips" },
    { id: "14", text: "Progress tracking" },
    { id: "15", text: "Sleep & stress tips" },
    { id: "16", text: "Monthly call reviews" },
    { id: "17", text: "Supplement suggestions" },
    { id: "18", text: "Advanced food swaps" },
    { id: "19", text: "Mindful eating support" },
    { id: "20", text: "Dining-out planning" },
  ];

  return (
    <>
      <div className="bg-[#DEF8DF] mt-20  mb-40">
        <h1 className="text-center text-2xl  md:text-5xl text-blue w-4/5 mx-auto pt-10">
          <span className="border-b-[#FF9A3F] border-b-4 pl-3">
            Tranformation Plan
          </span>
        </h1>
        <div className="flex flex-col md:flex-row  justify-center   mt-10  gap-7 md:gap-32">
          <TransformationPlanCard
            title="3 month transformation"
            packageText="Silver Package"
            cardServices={threeMonth}
          />
          <TransformationPlanCard
            title="6 month transformation"
            packageText="Gold Package"
            cardServices={sixMonth}
          />
        </div>

        <div className="grid grid-rows-2 md:grid-cols-5 md:grid-rows-1 md:w-4/5 w-5/6 mx-auto gap-2 md:gap-6 mt-10  pb-36 ">
          <div className="flex items-center justify-center col-span-2 ">
            <h2 className="text-3xl md:text-5xl/snug text-blue font-semibold ">
              Start your Journey with us
            </h2>
          </div>
          <div className="col-span-3">
            <img
              src="transformation/Our-process.webp"
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
