import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/Ghazanfarpic.jpeg";
const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/*<span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a front-end React developer skilled in JavaScript, HTML, CSS,
              and Tailwind CSS. I specialize in building fast, responsive, and
              user-friendly web applications, focusing on modern design,
              performance optimization, and seamless user experiences across
              devices.
            </p>
            <br />
            {/*Social Media icons  */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
              <div className="space-y-3">
                <h1 className="font-bold text-center">Avaliable On</h1>
                <ul className="flex gap-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/muhammad-ghazanfar-1b52a4329/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/ghazchep" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ghazanfar34501/"
                      target="_blank"
                    >
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/MuhammadGhazanfar"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <FaReact className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                  <IoLogoNodejs className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                  <SiMongodb className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                  <SiTailwindcss className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-17 mt-4 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Home;
