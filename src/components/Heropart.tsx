import React from "react";
import Image from "next/image";

const Heropart = () => {
  return (
    <div className="px-4 py-4 sm:py-24 bg-yellow-100">
      <div className="mx-auto sm:w-11/12 md:w-3/4 lg:w-2/3 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="w-full lg:w-1/2 lg:-ml-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            <span className="bg-yellow-200 p-1 text-lg sm:text-2xl">
              Current State
            </span>{" "}
            <span className="text-amber-500 text-lg sm:text-2xl">Analysis</span>
          </h1>
          <p className="text-gray-700 text-lg mt-4 text-justify">
            Current reports use <span className="text-amber-500">SQL</span>{" "}
            Server Reporting Services (SSRS), which has been essential for
            various types of <span className="text-amber-500">reports</span>,
            including <span className="text-amber-500">financial</span>,{" "}
            <span className="text-amber-500">operational</span>, and{" "}
            <span className="text-amber-500">compliance reports</span>.
          </p>

          <p className="text-xs text-justify mt-4">
            Tailwind CSS makes it easy to create responsive layouts with its
            utility-first approach.ailwind CSS makes it easy to create
            responsive layouts with its utility-first.
          </p>

          <p className="text-xs mt-6 text-justify">
            Tailwind CSS makes it easy to create responsive layouts with its
            utility-first approach. This example showcases a layout where the
            left half contains an image, and the right half features a
            paragraph.left half contains an image, and the right half features a
            paragraph.left half contains an image, and the right half features a
            paragraph.
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-4">
          <Image
            src="/post-1-rmbg.png"
            alt="Power BI Dashboard Example"
            width={200}
            height={100}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Heropart;
