import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <div>
        <footer className="py-12">
          <div className="max-w-screen-2xl container ma-auto px-4 md:px-20 ">
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-4">
                <FaWhatsapp size={26} />
                <FaLinkedin size={26} />
                <FaInstagram size={26} />
                <FaGithub size={26} />
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                <p className="text-sm">&copy; Your Company. All right reserved.</p>
                <p className="text-sm"> Supportive Partner @ Muhammad Ghazanfar</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
