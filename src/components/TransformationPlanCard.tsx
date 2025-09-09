import { FaCheck } from "react-icons/fa";

type TransformationPlanCardProps = {
  title: string;
  packageText: string;
  cardServices: {
    id: string;
    text: string;
  }[];
};

const TransformationPlanCard = ({
  title,
  packageText,
  cardServices,
}: TransformationPlanCardProps) => {
  return (
    <>
      <div className="bg-[#2D543D] text-white w-5/6  md:w-1/3     flex flex-col  rounded-lg px-10     mx-auto md:mx-0 ">
        <h1 className="text-2xl mt-3 text-center">{title}</h1>
        {packageText && (
          <button className="bg-[#888] text-white text-center px-9   py-1.5 rounded-md mt-4 w-fit mx-auto">
            {packageText}
          </button>
        )}
        <div className="mt-5  ">
          <div className="flex flex-col justify-center h-full">
            {cardServices.map((service) => (
              <div
                key={service.id}
                className="flex items-start  text-sm md:text-base justify-start mb-3"
              >
                <FaCheck className="mr-3 text-white flex-shrink-0" size={20} />
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-fit mx-auto">
          <button className="bg-[#FF9A3F] text-white   px-5 py-2.5 w-fit mx-auto rounded-xl hover:text-[#002040] cursor-pointer mb-5   ">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default TransformationPlanCard;
