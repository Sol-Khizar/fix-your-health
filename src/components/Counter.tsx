type counterProps = {
  counter: string;
  infoTitle: string;
};
const Counter = ({ counter, infoTitle }: counterProps) => {
  return (
    <div className="border border-[#FF9A3F]  pt-4 md:pt-10 md:w-full w-5/6  pb-4 rounded-4xl text-center bg-white mx-auto">
      <p className="text-3xl md:text-6xl font-extrabold text-[#FF7900] md:mb-6 mb-2">
        {counter}+
      </p>
      <p className="text-lg md:text-xl font-extrabold text-[#002040] px-3 ">
        {infoTitle}
      </p>
    </div>
  );
};

export default Counter;
