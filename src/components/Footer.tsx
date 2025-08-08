import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
// import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="mt-20 bg-[#DEF8DF] py-10 flex justify-center">
        <div className="flex gap-10">
          <FaFacebook className="text-5xl" />
          <FaInstagram className="text-5xl" />
          <FaYoutube className="text-5xl" />
        </div>

        {/* <div>
          <FaWhatsapp className="text-5xl fixed bottom-6 right-20 border rounded-full p-3 w-14 h-14 bg-green-600 text-white" />
          <MdCall className="text-5xl fixed bottom-6 left-20 rounded-full p-3 w-14 h-14 border" />
        </div> */}
      </div>
    </>
  );
};

export default Footer;
