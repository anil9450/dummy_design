import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto sm:w-3/4 px-4 py-4 gap-8 overflow-auto mt-16 sm:mt-28">
      <h1 className="text-blue-900 text-lg text-center font-bold">
        Introduction
      </h1>
      <h2 className="text-center text-yellow-500 text-3xl">
        Migration SSRS to Power BI
      </h2>
      <p className="text-sm mt-4 text-justify">
        The migration is about upgrading reports from SSRS to Power BI.While{" "}
        SSRS is good for basic reports, it lacks interactive and visually
        appealing features Power BI.
      </p>
      <p className="sm:text-center text-sm text-justify">
        It offers better data visualisations, interactive dashboard, and advance
        analytics to overcolme there limitations.
      </p>

      <div className="flex flex-col lg:flex-row p-4 sm:mt-12">
        <div className="w-full lg:w-1/2">
          <Image
            src="/power-bi-hero.jpg"
            alt="Example Image"
            width={500}
            height={250}
            className="rounded"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-8">
          <h1 className="text-lg font-bold text-blue-900 mt-2">
            Enhanced Visualization
          </h1>
          <p className="text-gray-700 text-xs text-justify">
            Tailwind CSS makes it easy to create responsive layouts with its
            utility-first approach. This example showcases a layout where the
            left half contains an image, and the right half features a
          </p>

          <h1 className="text-lg font-bold text-blue-900 mt-8">
            User-Friendly Experience
          </h1>
          <p className="text-gray-700 text-xs text-justify">
            Tailwind CSS makes it easy to create responsive layouts with its
            utility-first approach. This example showcases a layout where the
            left half contains an image, and the right half features a
          </p>

          <h1 className="text-lg font-bold text-blue-900 mt-8">
            Scalibility & Flexibility
          </h1>
          <p className="text-gray-700 text-xs text-justify">
            Tailwind CSS makes it easy to create responsive layouts with its
            utility-first approach. This example showcases a layout where the
            left half contains an image, and the right half features a
            paragraph.
          </p>
          <p className="text-gray-700 text-xs mt-2 text-justify">
            paragraph. The layout adjusts seamlessly to different screen sizes,
            ensuring a great user experience on all devices. paragraph. The
            layout adjusts seamlessly to different screen sizes, ensuring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
