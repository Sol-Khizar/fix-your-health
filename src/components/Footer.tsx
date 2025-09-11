import { Instagram, MessageCircle } from "lucide-react";

// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram, FaYoutube } from "react-icons/fa6";
// import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {/* <div className="  bg-[#DEF8DF] py-10 flex justify-center">
        <div className="flex gap-10">
          <FaFacebook className="text-5xl" />
          <FaInstagram className="text-5xl" />
          <FaYoutube className="text-5xl" />
        </div>

         <div>
          <FaWhatsapp className="text-5xl fixed bottom-6 right-20 border rounded-full p-3 w-14 h-14 bg-green-600 text-white" />
          <MdCall className="text-5xl fixed bottom-6 left-20 rounded-full p-3 w-14 h-14 border" />
        </div> 
      </div> */}

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="w-full md:w-[94%]  mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-y-0 ">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Ayuvive. All rights reserved.
          </p>

          {/* Right - Social Icons */}
          <div className="flex gap-36 md:gap-4">
            <a
              href="https://wa.me/918433575788"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition"
            >
              <MessageCircle className="w-10 h-10" />
            </a>
            <a
              href="https://www.instagram.com/ayuvive.health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition"
            >
              <Instagram className="w-10 h-10" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
