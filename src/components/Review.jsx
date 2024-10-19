import { FcRating } from "react-icons/fc";

const Review = () => {
  return (
    <section className="mt-10 px-4 md:px-0">
      <div className="text-black">
        <div className="text-2xl p-4 font-bold">What Our Students Say</div>
        <div className="mb-10 px-4">Lorem ipsum dolor sit amet.</div>
        <main className="flex flex-col md:flex-row gap-10">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="border border-black p-4 flex flex-col items-start"
            >
              <div className="px-5 p-2 text-3xl">
                <FcRating />
              </div>
              <p className="px-5">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam rem ea tenetur aut non porro vel doloribus pariatur
                ipsam. Id mollitia ex facilis dolore? Ipsa perspiciatis optio
                cum, qui ipsam, ratione ipsum, perferendis distinctio nemo
                delectus obcaecati ex aspernatur cupiditate!"
              </p>
              <img
                src="./background.jpg"
                alt="robo"
                className="flex p-2 rounded-full w-20 h-20"
              />
              <h1 className="px-5 font-bold">Wade Warrens</h1>
              <p className="px-5">Position, Company name</p>
            </div>
          ))}
        </main>
        <div className="border border-black mt-16" />
      </div>
    </section>
  );
};

export default Review;
