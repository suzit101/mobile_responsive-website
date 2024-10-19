import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footers = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-around mb-10 gap-10">
        <img
          src="./logo.png"
          alt="logo"
          className="object-contain mb-4 md:mb-0"
        />

        <ul className="text-center md:text-left">
          <p className="font-bold py-2">Courses</p>
          <li>Business</li>
          <li>Development</li>
          <li>Technology</li>
          <li>Design</li>
          <li>Prpgramming</li>
        </ul>

        <ul className="text-center md:text-left">
          <p className="font-bold py-2">Resources</p>
          <li>Career</li>
          <li>Resume</li>
          <li>Learning</li>
          <li>Interview Preparation</li>
          <li>Jobs</li>
        </ul>

        <ul className="text-center md:text-left">
          <p className="font-bold py-2">About Us</p>
          <li>Contact</li>
          <li>Help/Support</li>
          <li>FAQ</li>
          <li>Terms and Conditions</li>
          <li>Partners</li>
        </ul>
      </div>

      <div className="border border-black mt-10"></div>

      <div className="mt-10 mb-10 flex flex-col md:flex-row justify-between items-center py-2">
        <p className="text-center md:text-left">
          2024 Ddsgnr. All rights reserved.
        </p>

        <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mt-4 md:mt-0">
          <li className="hover:underline">Privacy Policy</li>
          <li className="hover:underline">Terms of Service</li>
          <li className="hover:underline">Cookies Settings</li>
        </ul>

        <div className="flex justify-center mt-4 md:mt-0 gap-6 text-4xl">
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footers;
