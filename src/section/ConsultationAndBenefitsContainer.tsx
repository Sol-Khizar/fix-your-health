import ConsultationAndBenefitsCard from "../components/ConsultationAndBenefitsCard";

const ConsultationAndBenefitsContainer = () => {
  const textdata1 = [
    {
      id: "1",
      text: " PCOS",
    },
    {
      id: "2",
      text: "Overweight/ Obesity/ Underweight",
    },

    {
      id: "3",
      text: "Pre-Post pregnancy",
    },

    {
      id: "4",
      text: "Diabetes",
    },

    {
      id: "5",
      text: "Cholesterol",
    },
    {
      id: "6",
      text: "Any lifestyle-based health issues",
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
      <div className="grid grid-rows-1 md:grid-cols-2  w-5/6 md:w-4/5 mx-auto mt-36 gap-14">
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
