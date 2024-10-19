import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="hidden md:flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-2">
      <div className="flex gap-2 text-center md:text-left">
        <div>Phone Number: 9887563412</div>
        <div>|</div>
        <div>Email: nozshoeshop7@gmail.com</div>
      </div>
      <div className="flex gap-4 text-2xl mt-2 md:mt-0">
        <FaFacebook className="cursor-pointer hover:text-blue-600" />
        <FaInstagram className="cursor-pointer hover:text-red-600" />
        <FaLinkedin className="cursor-pointer hover:text-blue-700" />
        <FaTwitter className="cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Header;
