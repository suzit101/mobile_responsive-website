import React from "react";

export const Discover = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-10">
      {/* left */}
      <div className="p-8 md:p-20 col-span-12 md:col-span-6">
        <h1 className="mt-10 text-2xl md:text-3rem font-bold">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </h1>
        <p className="text-base md:text-xl p-2 md:p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quidem perspiciatis vero laborum sit velit aut quibusdam beatae nisi
          asperiores. Officia laudantium accusamus rem necessitatibus cupiditate
          animi quia ipsam consequatur, ex rerum consequuntur earum et
          accusantium suscipit repellat reiciendis. Aliquam expedita atque nulla
          ullam fugiat cum sit? Dicta quasi ullam sapiente perferendis tempora
          quam, doloribus quis aperiam dolorum sit, asperiores magnam fugit
          assumenda! Dolorum, explicabo.
        </p>
        <button className="border-2 border-black rounded-md bg-black text-white p-2 mt-4">
          Explore Courses
        </button>
      </div>

      {/* right */}
      <div className="col-span-12 md:col-span-6 flex items-center justify-center w-full h-full mb-10 md:mb-0">
        <img
          src="./medium.webp"
          className="w-full h-auto max-w-[720px]"
          alt="shoe"
        />
      </div>
    </div>
  );
};

export default Discover;
