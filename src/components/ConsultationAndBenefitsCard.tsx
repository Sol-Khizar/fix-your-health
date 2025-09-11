type ConsultationAndBenefitsCardProp = {
  textdata: {
    id: string;
    text: string;
  }[];
  headingText: string;
  buttonText: string;
};

const ConsultationAndBenefitsCard = ({
  buttonText,
  headingText,
  textdata,
}: ConsultationAndBenefitsCardProp) => {
  return (
    <div className="flex flex-col  h-[600px]  rounded-2xl  ">
      <div className="bg-[#77BC40] text-white rounded-tr-3xl rounded-tl-3xl h-[120px] flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-center py-5 ">
          {headingText}
        </h1>
      </div>
      <div className="bg-[#d8eeb4] flex-1 pt-5 md:pt-0  flex flex-col justify-center ">
        {textdata.map((text) => (
          <p key={text.id} className="pl-16 text-lg  md:text-xl mb-5 pr-2">
            {text.text}
          </p>
        ))}
      </div>
      <div className="rounded-br-3xl rounded-bl-3xl bg-[#d8eeb4] pb-10">
        <div className="w-fit mx-auto  ">
          <button className="py-4 text-center px-3 md:px-10 bg-[#FF9A3F] rounded-full cursor-pointer text-white font-bold text-lg md:text-xl   ">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationAndBenefitsCard;
