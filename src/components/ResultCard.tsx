type resultCardProps = {
  imagePath: string;
};
const ResultCard = ({ imagePath }: resultCardProps) => {
  return (
    <>
      <div>
        <img src={`result/${imagePath}`} alt={imagePath} />
      </div>
    </>
  );
};

export default ResultCard;
