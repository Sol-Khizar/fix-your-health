import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="mt-20 bg-[#DEF8DF] py-10 flex justify-center">
        <div className="flex gap-10">
          <FaFacebook className="text-5xl" />
          <FaInstagram className="text-5xl" />
          <FaYoutube className="text-5xl" />
        </div>
      </div>
    </>
  );
};

export default Footer;
