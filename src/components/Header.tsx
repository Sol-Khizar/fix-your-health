import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <div className="ml-2 lg:ml-36 flex justify-between items-center mr-0 md:mr-7 py-4  relative z-0">
      <img src="logo/studio-logo.webp" alt="logo" className="w-15 md:w-36 " />
      <span className="flex items-center gap-3 ">
        <IoCall className="text-2xl font-extrabold " />
        <span className="text-lg font-bold">+91 9082408546</span>
      </span>
    </div>
  );
};

export default Header;
