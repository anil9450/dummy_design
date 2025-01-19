import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="bg-yellow-100">
      <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="px-4 py-4 sm:py-24">
          <div>
            <h1 className="text-center text-blue-900 text-lg">
              Solutions Implemented
            </h1>
            <h1 className="text-amber-500 text-center text-3xl">
              Delivered by Our Company
            </h1>
            <p className="text-xs text-justify">
              To fix visual issues, we used Power BI’s custom visuals library
              and developed new ones when needed. We redesigned reports to take
              advantage of Power BI’s interac- tive dashboards and
            </p>
            <p className="text-xs sm:text-center text-justify">
              dynamic filters, focusing on how to present information more
              effectively and enhance usability.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center px-4 mt-4">
            {/* First Section */}
            <div className="flex-1 max-w-md flex flex-col items-center">
              <Image
                src="/post-4-rmbg.png"
                alt="Power BI Hero"
                width={250}
                height={125}
                className="rounded mt-4"
              />
              <h2 className="text-lg font-semibold mt-4">
                Benefits of Migration
              </h2>
              <p className="mt-2 px-2 text-xs text-justify">
                Power BI provides advanced visuals like interactive charts and
                custom dashboards. It’s easier to use and accessible on mobile
                devices. It also offers Al-driven insights and real-time data
                up- dates.
              </p>
            </div>

            {/* Vertical Divider with Circular Image */}
            <div className="relative hidden md:flex items-center mx-8">
              <div className="w-0.5 h-[400px] bg-gray-300"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                  <Image
                    src="/post3-1-rmbg.png"
                    alt="Circular Image"
                    width={96} // Responsive size, you can adjust this
                    height={96}
                    className="rounded-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex-1 max-w-md flex flex-col items-center">
              <Image
                src="/post2-rmbg.png"
                alt="Power BI Hero"
                width={300}
                height={150}
                className="rounded mt-2 sm:mt-0"
              />
              <h2 className="text-lg font-semibold mt-4">
                User Training and Adoption
              </h2>
              <p className="text-justify mt-2 px-2 text-xs">
                We provided extensive training for users to help them adapt to
                Power BI and set up support and feedback systems to ensure a
                smooth transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
