import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-5 mb-10 px-4 md:px-10">
      <div className="p-4 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl">
          Subscribe to our newsletter
        </h1>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
          autem!
        </p>
      </div>

      <div className="mt-5 md:mt-0">
        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 md:gap-10 pr-5">
          <button className="border border-black px-4 py-2 rounded-md">
            Enter your email
          </button>
          <button className="border border-black px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>

        <p className="py-2 px-2 text-center md:text-right">
          By subscribing you agree with our Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
