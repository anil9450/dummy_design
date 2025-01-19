import React from "react";
import Image from "next/image";

const Conclusion = () => {
  return (
    <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8">
      <div className="px-4 py-4 sm:py-24">
        <div>
          <h1 className="text-center text-blue-900 text-lg">Our</h1>
          <h1 className="text-amber-500 text-center text-3xl">Conclusion</h1>
          <p className="text-xs mt-4 text-justify">
            The migration to Power BI has effectively modernized our reporting
            infrastructure. We now benefit from improved data visualization,
            with more dynamic and interac- tive charts and dashboards that
          </p>
          <p className="text-xs sm:text-center text-justify">
            {" "}
            enhance user experience. This upgrade allows for more intuitive data
            exploration and better insights.
          </p>
        </div>

        <div className="text-4xl text-center mt-4">
          <h1 className="text-gray-500">As we continue to utilize</h1>
          <h1 className="flex items-center justify-center">
            <Image
              src="/icon-4-1.jpg"
              alt="Example Image"
              width={50}
              height={25}
            />
            <span className="ml-4">Power BI</span>
          </h1>

          <div>
            <p className="text-xs mt-4 text-justify sm:text-center">
              we are excited about the opportunities it presents for advanced
              reporting and analytics, and we look forward to fully leveraging
              its capabilities to meet our future reporting needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
