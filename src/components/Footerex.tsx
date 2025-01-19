import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Footerex = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full sm:w-3/4 px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center sm:justify-between text-center gap-4">
        {/* Left Section */}
        <div>
          <p>
            &copy; {new Date().getFullYear()} - All Rights Reserved Key Dynamics
            Solutions LTD | Designed by Zen
          </p>
          <p className="text-center sm:text-justify">Webnet</p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center gap-4">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            title="Visit our Facebook page"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            title="Visit our Twitter page"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaXTwitter />
          </Link>

          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            title="Visit our Instagram page"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://youtube.com"
            aria-label="YouTube"
            title="Visit our YouTube channel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footerex;
