import React from "react";
import Image from "next/image";

const Heropart = () => {
  return (
    <div className="px-4 py-4 gap-8 bg-yellow-100">
      <div className="mx-auto sm:w-3/4 flex flex-col lg:flex-row p-4 mt-12 w-full">
        <div className="w-full sm:w-3/4 lg:mt-0">
          <h1>
            <span className="text-2xl bg-yellow-200 p-1">Current State</span>{" "}
            <span className="text-2xl text-amber-500">Analysis</span>
          </h1>
          <p className="text-gray-700 text-lg mt-4 w-2/3">
            Current reports use <span className="text-amber-500">SQL</span>{" "}
            Server Reporting Services (SSRS), which has been essential for
            varoius types of <span className="text-amber-500">reports</span>,
            including <span className="text-amber-500">financial</span>,{" "}
            <span className="text-amber-500">operational</span>, and{" "}
            <span className="text-amber-500">compliance reports</span>.
          </p>

          <p className="text-gray-700 text-xs w-2/3 mt-2">
            Tailwind CSS makes it easy to create responsive layouts with its
            utility-first approach. This example showcases a layout where the
          </p>

          <p className="text-gray-700 text-xs w-2/3 mt-8">
            Tailwind CSS makes it easy to create responsive layouts with its
            utility-first approach. This example showcases a layout where the
            left half contains an image, and the right half features a
            paragraph.utility-first approach. This example showcases a layout
            where the
          </p>
        </div>

        <div className="w-full lg:w-2/3">
          <Image
            src="/power-bi-hero.jpg"
            alt="Example Image"
            width={500}
            height={250}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Heropart;
