import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-gray-500">
      <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8 py-8 flex justify-between flex-wrap gap-8">
        {/* Logo Section */}
        <div>
          <Image
            src="/footer_logo.png"
            alt="Example Image"
            width={200}
            height={100}
          />
          {/* 
          <Link href="/" className="flex items-center space-x-2">
            <span className="">
              <FaArrowRotateLeft />
            </span>
            <span className="md:inline-block font-bold text-lg">
              <p className="text-white">KEY DYNAMICS</p>
              <p className="tracking-[.22em] text-blue-400">SOLUTIONS</p>
            </span>
          </Link>
          */}
        </div>

        {/* Important Links */}
        <div>
          <h2 className="font-bold text-white mb-2">Important</h2>
          <ul className="space-y-1 text-white">
            <li className="hover:text-blue-400 cursor-pointer">Technology</li>
            <li className="hover:text-blue-400 cursor-pointer">Network</li>
            <li className="hover:text-blue-400 cursor-pointer">Solution</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-white mb-2">Quick Links</h2>
          <ul className="space-y-1 text-white">
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Blog</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-400 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Sign Up Section */}
        <div className="space-y-2">
          <p className="text-white">knowing you're always on the best</p>
          <p className="text-white">energy deal.</p>
          <form className="space-y-2">
            <label htmlFor="phone" className="sr-only">
              Enter your phone number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full p-2 rounded bg-blue-600 text-white"
            />
            <button
              type="submit"
              className="bg-gray-500 text-white p-2 rounded"
            >
              Sign up Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
