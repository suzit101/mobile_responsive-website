import React from "react";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 justify-between px-4 md:px-0">
      {/* left */}
      <div className="p-8 md:p-20 col-span-12 md:col-span-6">
        <h1 className="mt-10 text-3xl md:text-[4.5rem] font-bold">
          Learn new skills
        </h1>
        <h1 className="md:mt-8 text-3xl md:text-[4.5rem] font-bold">
          online with ease
        </h1>

        <p className="text-base md:text-xl p-2 md:p-4">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="border-2 border-black rounded-md bg-black text-white p-2">
            Start learning now
          </button>
          <button className="border-2 border-black rounded-md text-black p-2 hover:text-red-500">
            Explore Courses
          </button>
        </div>
      </div>

      {/* right */}
      <div className="col-span-12 md:col-span-6 flex items-center justify-center w-full h-full mb-10 md:mb-0">
        <img
          src="./thumbnail-shoe2.svg"
          className="w-full max-w-[500px] h-auto"
          alt="shoe"
        />
      </div>
    </div>
  );
};

export default Hero;
