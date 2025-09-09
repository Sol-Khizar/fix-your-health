import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <div className=" flex  justify-between items-center py-4 ">
      <img src="assets/logo.webp" alt="logo" className="w-20 md:w-36 ml-3" />
      <span className="flex items-center gap-2 mt-2 md:mt-0  mr-2">
        <IoCall className="text-xl md:text-2xl font-extrabold" />
        <span className="text-base md:text-lg font-bold">+91 8433575788</span>
      </span>
    </div>
  );
};

export default Header;
