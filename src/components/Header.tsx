"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-500 shadow-sm">
      <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section: Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="">
                <FaArrowRotateLeft />
              </span>
              <span className="md:inline-block font-bold text-lg">
                <p className="text-blue-900">KEY DYNAMICS</p>
                <p className="tracking-[.22em] text-blue-400">SOLUTIONS</p>
              </span>
            </Link>
          </div>

          {/* Right section: Menu */}
          <div className="hidden md:flex items-center space-x-10 font-bold">
            <Link
              href="/services"
              className="hover:text-blue-500 hover:scale-105 transition-transform duration-300"
            >
              Services
            </Link>
            <Link
              href="/choose"
              className="hover:text-blue-500 hover:scale-105 transition-transform duration-300"
            >
              Why Choose Us
            </Link>
            <Link
              href="/insight"
              className="hover:text-blue-500 hover:scale-105 transition-transform duration-300"
            >
              Insights
            </Link>
            <Link
              href="/other"
              className="hover:text-blue-500 hover:scale-105 transition-transform duration-300"
            >
              Others
            </Link>
            <button className="bg-blue-900 text-white p-1 rounded">
              REQUEST A QUOTE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-500 font-bold">
          <Link
            href="/services"
            className="block px-4 py-2 hover:bg-gray-800 hover:text-blue-500 hover:scale-105 transition-transform duration-300"
          >
            Services
          </Link>
          <Link
            href="/choose"
            className="block px-4 py-2 hover:bg-gray-800 hover:text-blue-500 hover:scale-105 transition-transform duration-300"
          >
            Why Choose Us
          </Link>
          <Link
            href="/insight"
            className="block px-4 py-2 hover:bg-gray-800 hover:text-blue-500 hover:scale-105 transition-transform duration-300"
          >
            Insights
          </Link>
          <Link
            href="/other"
            className="block px-4 py-2 hover:bg-gray-800 hover:text-blue-500 hover:scale-105 transition-transform duration-300"
          >
            Others
          </Link>
          <button className="bg-blue-900 text-white p-1 rounded mt-2">
            REQUEST A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
