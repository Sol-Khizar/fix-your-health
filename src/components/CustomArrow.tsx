import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;

  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2`}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        right: isMobile ? "-2px" : "-50px",
        zIndex: 10,
      }}
    >
      <FaAngleRight size={34} color="black" />
    </div>
  );
};

export const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;

  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2`}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        left: isMobile ? "-2px" : "-50px",
        zIndex: 10,
      }}
    >
      <FaAngleLeft size={34} color="black" />
    </div>
  );
};
