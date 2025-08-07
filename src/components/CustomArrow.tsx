import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", right: 10, zIndex: 1 }}
    >
      <FaAngleRight size={34} color="black" />
    </div>
  );
};

export const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", left: 10, zIndex: 1 }}
    >
      <FaAngleLeft size={34} color="black" />
    </div>
  );
};
