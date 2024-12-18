import React from "react";
import react from "../../public/react.png";
import javascript from "../../public/javascript.png";
import nextjs from "../../public/nextjs.png";
import nodejs from "../../public/nodejs.png";
import mongodb from "../../public/mongodb.png";
import tailwind from "../../public/tailwind.png";
const Portfolio = () => {
  const carditem = [
    {
      id: 1,
      logo: react,
      name: "React",
    },
    {
      id: 2,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 3,
      logo: nextjs,
      name: "Nextjs",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Nodejs",
    },
    {
      id: 5,
      logo: mongodb,
      name: "monogodb",
    },
    {
      id: 6,
      logo: tailwind,
      name: "Tailwind",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="font-bold text-3xl mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {carditem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300] md:h-[300px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Repeating the same card limits showcasing my React skills and
                  the true potential of the framework.
                </p>
              </div>
              <div className="px-4 py-2 space-x-2 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-blod px-3 py-1 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-blod px-3 py-1 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
