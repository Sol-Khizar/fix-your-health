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

const IconComparison = () => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 mt-16 w-[80%] mx-auto">
        {programs.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="flex items-start gap-4 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <Icon className="w-8 h-8 text-green-600 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-md text-gray-600 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconComparison;
