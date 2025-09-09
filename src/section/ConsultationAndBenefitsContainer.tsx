import ConsultationAndBenefitsCard from "../components/ConsultationAndBenefitsCard";

const ConsultationAndBenefitsContainer = () => {
  const textdata1 = [
    {
      id: "1",
      text: "Overweight / Obesity / Underweight",
    },
    {
      id: "2",
      text: "Gut & Digestive Issues",
    },

    {
      id: "3",
      text: "PCOD / PCOS & Hormonal Imbalances",
    },

    {
      id: "4",
      text: "Hypothyroidism & Thyroid Concerns",
    },

    {
      id: "5",
      text: "Post-Menopause Health",
    },
    {
      id: "6",
      text: "High Cholesterol & Heart Health",
    },
    {
      id: "7",
      text: "Lifestyle Diseases & Wellness Goals",
    },
  ];
  const textdata2 = [
    {
      id: "1",
      text: " Diet plans tailored to your lifestyle",
    },
    {
      id: "2",
      text: "Complete blood report analysis (If required)",
    },

    {
      id: "3",
      text: "Frequent follow up sessions",
    },

    {
      id: "4",
      text: "Eating out options",
    },

    {
      id: "5",
      text: "Healthy recipes",
    },
    {
      id: "6",
      text: "Real-time chat support 6 days/week(9 am to 5 pm)",
    },
  ];
  return (
    <>
      <div className="grid grid-rows-1 md:grid-cols-2  w-5/6 md:w-4/5 mx-auto mt-10 md:mt-36 gap-32 md:gap-14">
        <ConsultationAndBenefitsCard
          buttonText="I think I am ready!"
          textdata={textdata1}
          headingText="Who can benefit from our consultation?"
        />
        <ConsultationAndBenefitsCard
          buttonText="Amazing! I'm Interested"
          textdata={textdata2}
          headingText="Why would I be interested?"
        />
      </div>
    </>
  );
};

export default ConsultationAndBenefitsContainer;
