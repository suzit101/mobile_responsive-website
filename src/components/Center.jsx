import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Center = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-5">
        <div className="text-center md:text-left text-3xl md:text-4.5xl text-black font-bold p-4">
          Trusted by 2000+ companies worldwide.
        </div>
        <div className="flex justify-center gap-10 text-5xl md:text-7.5xl mt-4 md:mt-0">
          <FaFacebook className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-red-800" />
          <FaLinkedin className="cursor-pointer hover:text-blue-700" />
          <FaTwitter className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default Center;
