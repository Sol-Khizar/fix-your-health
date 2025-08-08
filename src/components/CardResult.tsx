type resultCardProps = {
  imagePath: string;
};
const CardResult = ({ imagePath }: resultCardProps) => {
  return (
    <>
      <div>
        <img src={`result/${imagePath}`} alt={imagePath} />
      </div>
    </>
  );
};

export default CardResult;
