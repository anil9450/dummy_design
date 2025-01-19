import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto sm:w-3/4 px-4 py-4 gap-8 overflow-auto mt-16 sm:mt-28">
      <div>
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
          It offers better data visualisations, interactive dashboard, and
          advance analytics to overcolme there limitations.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row sm:mt-12">
        <div className="w-full lg:w-1/2">
          <Image
            src="/image-ins-rmbg.png"
            alt="Example Image"
            width={500}
            height={250}
            className="rounded"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-16 lg:pr-24 sm:mt-16">
          <h1 className="text-lg font-bold text-blue-900 mt-2">
            Enhanced Visualization
          </h1>
          <p className="text-gray-700 text-xs text-justify">
            Power BI’s advanced, interactive visuals will make data easier to
            understand, helping us create more engaging reports for better
            decision-making.
          </p>

          <h1 className="text-lg font-bold text-blue-900 mt-8">
            User-Friendly Experience
          </h1>
          <p className="text-gray-700 text-xs text-justify">
            Power BI’s intuitive interface and interactive features will
            simplify data interaction, allowing us to customize reports and gain
            insights more quickly.
          </p>

          <h1 className="text-lg font-bold text-blue-900 mt-8">
            Scalibility & Flexibility
          </h1>
          <p className="text-gray-700 text-xs text-justify">
            Power BI’s cloud-based platform will make it easier to update and
            expand our reporting system, ensuring it can handle growing data and
            user needs in the future.
          </p>
          <p className="text-gray-700 text-xs mt-2 text-justify">
            By achieving these goals, aim to significantly improve reports,
            boost user satisfaction, and enhance decision-making across the
            organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
