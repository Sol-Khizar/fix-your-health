import { Salad, Bone, Flower, Leaf, HeartPulse } from "lucide-react";

const programs = [
  {
    title: "Weight Management Plan",
    desc: "Sustainable weight with nutrition, lifestyle & wellness strategies",
    icon: Salad,
  },
  {
    title: "Joint Pain Relief Program",
    desc: "Relieve stiffness, reduce inflammation & regain mobility",
    icon: Bone,
  },
  {
    title: "Women's Wellness Program",
    desc: "Balanced hormones, emotional alignment & holistic care (PCOD/PCOS/menopause)",
    icon: Flower,
  },
  {
    title: "Gut Reset Program",
    desc: "Cleanse gut, restore digestion & boost overall wellness",
    icon: Leaf,
  },
  {
    title: "Lifestyle Disease Support",
    desc: "Manage diabetes, thyroid imbalance, hypertension & cholesterol",
    icon: HeartPulse,
  },
];

const Transformation = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-center text-2xl  md:text-5xl text-blue w-4/5 mx-auto pt-10">
          <span className="border-b-[#FF9A3F] border-b-4 pl-3">
            Tranformation Plan
          </span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2 mt-16 w-[80%] mx-auto">
          {programs.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="bg-[#DEF8DF] flex items-start gap-4 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <Icon className="w-8 h-8 text-green-600 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-md text-gray-600 mt-1">{desc}</p>
              </div>
            </div>
          ))}
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
