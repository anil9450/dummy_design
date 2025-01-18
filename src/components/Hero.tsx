import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8 py-4 gap-8">
      <h1 className="text-blue-900 text-lg text-center">Introduction</h1>
      <h2 className="text-center text-yellow-500 text-3xl">
        Migration SSRS to Power BI
      </h2>
      <p className="text-sm mt-4">
        The migration is about upgrading reports from SSRS to Power BI.While{" "}
        SSRS is good for basic reports, it lacks interactive and visually
        appealing features.Power BI
      </p>
      <p className="text-center">
        offers better data visualisations, interactive dashboard, and advance
        analytics to overcolme there limitations.
      </p>
    </div>
  );
};

export default Hero;
