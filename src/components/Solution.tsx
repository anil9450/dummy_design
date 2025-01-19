import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="px-4 py-4 sm:py-24 bg-yellow-100">
        <div className="shadow-lg rounded p-2">
          <h1 className="text-center text-blue-900 text-lg">
            Solution Implemented
          </h1>
          <h1 className="text-amber-500 text-center text-3xl">
            Delivered by Our Company
          </h1>
          <p className="text-xs">
            The serene beauty of a quiet morning is unparalleled. As the golden
            rays of the rising sun gently kiss the earth, the world seems to
            pause in peaceful reflection. Birds sing melodious tunes, their
            notes weaving through the crisp, fresh air. The dew on grass
            glistens like tiny diamonds, and the faint aroma of blooming flowers
            fills the senses with delight.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center px-4 mt-4">
          {/* First Section */}
          <div className="flex-1 max-w-md flex flex-col items-center">
            <Image
              src="/power-bi-hero.jpg"
              alt="Power BI Hero"
              width={300}
              height={150}
              className="rounded mt-4"
            />
            <h2 className="text-lg font-semibold mt-4">
              Benefits of Migration
            </h2>
            <p className="mt-2 px-2 text-xs text-justify">
              The serene beauty of a quiet morning is unparalleled. As the
              golden rays of the rising sun gently kiss the earth, the world
              seems to pause in peaceful reflection.The serene beauty of a quiet
              morning is unparalleled. As the golden rays of the rising sun
              gently kiss the earth.
            </p>
          </div>

          {/* Vertical Divider with Circular Image */}
          <div className="relative hidden md:flex items-center mx-8">
            <div className="w-0.5 h-[300px] bg-gray-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                <Image
                  src="/images.png"
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
              src="/power-bi-hero.jpg"
              alt="Power BI Hero"
              width={300}
              height={150}
              className="rounded"
            />
            <h2 className="text-lg font-semibold mt-4">
              User Training and Adoption
            </h2>
            <p className="text-justify mt-2 px-2 text-xs">
              The serene beauty of a quiet morning is unparalleled. As the
              golden rays of the rising sun gently kiss the earth, the world
              seems to pause in peaceful reflection.seems to pause in peaceful
              reflection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
