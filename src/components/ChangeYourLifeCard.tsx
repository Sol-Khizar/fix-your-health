type ChangeYourLifeCardProps = {
  icon: string;
  iconText: string;
};

const ChangeYourLifeCard = ({ icon, iconText }: ChangeYourLifeCardProps) => {
  return (
    <div className="w-4/5 md:w-full flex flex-col items-center mx-auto md:mx-0 ">
      <div className="rounded-full  w-[250px] h-[250px] flex items-center justify-center">
        <img src={`/changeYourIcon/${icon}`} alt={iconText} />
      </div>
      <p className="text-xl text-center text-blue ">{iconText}</p>
    </div>
  );
};

export default ChangeYourLifeCard;
