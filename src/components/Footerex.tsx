import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";

const Footerex = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center flex-wrap gap-8">
        {/* Left Section */}
        <div>
          <p>
            &copy; 2024 - All Rights Reserved Key Dynamics Solutions LTD |
            Designed by Zen
          </p>
          <p>Webnet</p>
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <AiOutlineYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footerex;
