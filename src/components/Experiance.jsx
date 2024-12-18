import React from "react";
import react from "../../public/react.png";
import javascript from "../../public/javascript.png";
import css from "../../public/css.png";
import html from "../../public/html.png";

import tailwind from "../../public/tailwind.png";
const Experiance = () => {
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
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: html,
      name: "html",
    },

    {
      id: 5,
      logo: tailwind,
      name: "Tailwind",
    },
  ];
  return (
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-15">
      <div>
        <h1 className="font-bold text-3xl mb-5">Experiance</h1>
        <p className="">
          I've more than 1 year's experiance in below tecnologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 my-3">
          {carditem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center md:w-[200px] md:h-[200px] justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px]  rounded-full " alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
