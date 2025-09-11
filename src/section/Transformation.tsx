import { Salad, Bone, Flower, Leaf, HeartPulse, Dna } from "lucide-react";
import { Heart, Apple, Sparkles, } from "lucide-react";
import { motion } from "framer-motion";

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
const steps = [
  {
    id: 1,
    title: "Free Consultation",
    desc: "Speak with our dietician to set your health goals.",
    icon: <Leaf className="w-7 h-7" />,
    accent: "bg-emerald-700/80",
  },
  {
    id: 2,
    title: "Holistic Enrollment",
    desc: "Choose a program (Nutrition / Ayurveda / Chinese Medicine).",
    icon: <Apple className="w-7 h-7" />,
    accent: "bg-amber-700/85",
  },
  {
    id: 3,
    title: "Body & History Analysis",
    desc: "In-depth body metrics + medical history review.",
    icon: <Dna className="w-7 h-7" />,
    accent: "bg-emerald-900/80",
  },
  {
    id: 4,
    title: "AI + Expert Plan",
    desc: "AI-assisted, practitioner-reviewed personalized meal prescription.",
    icon: <Heart className="w-7 h-7" />,
    accent: "bg-rose-700/85",
  },
  {
    id: 5,
    title: "Follow-up & Results",
    desc: "Track progress, tweak plan, celebrate results.",
    icon: <Sparkles className="w-7 h-7" />,
    accent: "bg-teal-700/85",
  },
];

const Transformation = () => {
  return (
    <>
      <div className="mt-5 ">
        <h1 className="text-center text-2xl  md:text-5xl text-blue w-4/5 mx-auto pt-5">
          <span className="border-b-[#FF9A3F] border-b-4 pl-3">
            Tranformation Plan
          </span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2 mt-16 w-[80%] mx-auto ">
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

        <div className="w-5/6 md:w-[100%] mx-auto mt-0 md:mt-10 md:pb-8">
          <section className="py-1 px-4 sm:px-6 bg-gradient-to-b from-white via-amber-50 to-white">
            <div className="w-full mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-center text-xl md:text-5xl text-blue w-4/5 mx-auto mb-6 mt-10 md:mt-0">
                  <span className="border-b-[#FF9A3F] border-b-4 pl-3">
                    Start Your Journey With Us
                  </span>
                </h1>
                <p className="mt-2 text-gray-600 max-w-3xl   mx-auto">
                  A balanced blend of modern nutrition, Ayurveda and Chinese medicine for a
                  personalized transformation.
                </p>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-y-6 left-0 right-0 pointer-events-none opacity-20">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 160">
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0%" stopColor="#014737" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#C66" stopOpacity="0.04" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 96C120 60 360 0 720 32s480 64 720 48v-176H0z"
                      fill="url(#g)"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-3/4 md:w-[82%] z-10">
                  {steps.map((s, idx) => (
                    <motion.article
                      key={s.id}
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className="flex flex-col items-start gap-3 p-5 rounded-2xl shadow-lg bg-white"
                    >
                      <div
                        className={`p-3 rounded-xl text-white flex items-center justify-center ${s.accent}`}
                      >
                        {s.icon}
                      </div>

                      <h3 className="text-lg font-semibold text-emerald-900">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.desc}</p>

                      <div className="mt-auto pt-3 w-full flex items-center">
                        {idx < steps.length - 1 ? (
                          <div className="hidden md:block flex-1 h-0.5 bg-gray-200 mx-4" />
                        ) : (
                          <div className="flex-1" />
                        )}
                        <span className="text-xs text-gray-400">Step {s.id}</span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  );
};

export default Transformation;
