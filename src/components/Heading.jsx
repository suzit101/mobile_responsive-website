import { useState } from "react";

const Heading = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="border-2 border-black px-4">
      <div className="flex items-center justify-between">
        <div className="mb-4">
          <img src="./logo.png" alt="logo" className="h-12" />
        </div>
        <div className="hidden md:flex flex-col items-center mt-4">
          <ul className="flex flex-row justify-center items-center gap-5 md:gap-10">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Courses</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className="border-2 border-black rounded-md text-black px-4 py-2 hover:text-pink-900">
            Login
          </button>
          <button className="border-2 border-black bg-black text-white px-4 py-2 rounded-md hover:text-blue-900">
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <ul className="flex flex-col gap-2">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Courses</li>
            <li className="hover:underline">Contact</li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button className="border-2 border-black rounded-md text-black px-4 py-2 hover:text-pink-900">
              Login
            </button>
            <button className="border-2 border-black bg-black text-white px-4 py-2 rounded-md hover:text-blue-900">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Heading;
