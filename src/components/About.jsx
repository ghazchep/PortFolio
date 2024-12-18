import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="font-bold text-3xl mb-5">About</h1>
        <p>
          I create intuitive, responsive web applications using React and modern
          front-end tools, focusing on delivering seamless user experiences. My
          passion lies in combining clean design with efficient functionality to
          meet diverse user needs.
        </p>
        <br />

        <h1 className="font-bold text-green-500 text-2xl">
          Education and training
        </h1>
        <span>
          {" "}
          [Bachelor in Computer Science] , [Uviversity of punjab] , [Pu-23],
          [ChepScientificSocity]
        </span>
        <br />
        <br />
        <h1 className="font-bold text-green-500 text-2xl">Skill & Expertise</h1>
        <span>
          {" "}
          [React.js] , [Javascript] , [CSS-3] , [HTML-5] , [Bootstrap]
          [Tailwind]
        </span>
        <br />
        <br />

        <h1 className="font-bold text-green-500 text-2xl">
          Achievements & Awards
        </h1>
        <span>
          {" "}
          [Coding Competition Winner(2023-Dept)] , [HEC Scholarship] , [PEEF
          Scholarship]
        </span>
        <br />
        <br />
        <h1 className="font-bold text-green-500 text-2xl">Mission Statement</h1>
        <span>
          {" "}
          My mission is to leverage my skills and creativity to deliver
          innovative solutions that exceed client expectations and contribute
          positively to the digital landscape. I am committed to continuous
          learning and growth, always seeking new challenges and opportunities
          to expand my horizons.
        </span>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default About;
