import React from "react";
import Image from "next/image";

const Conclusion = () => {
  return (
    <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8">
      <div className="px-4 py-4 sm:py-24">
        <div className="shadow-lg rounded p-2">
          <h1 className="text-center text-blue-900 text-lg">Our</h1>
          <h1 className="text-amber-500 text-center text-3xl">Conclusion</h1>
          <p className="text-xs mt-4 text-justify">
            The serene beauty of a quiet morning is unparalleled. As the golden
            rays of the rising sun gently kiss the earth, the world seems to
            pause in peaceful reflection. Birds sing melodious tunes.
          </p>
          <p className="text-xs sm:text-center text-justify">
            notes weaving through the crisp, fresh air. The dew on grass
            glistens like tiny diamonds, and the faint aroma of blooming flowers
            fills the senses with delight.
          </p>
        </div>

        <div className="text-4xl text-center mt-4">
          <h1 className="text-gray-500">As we continue to utilize</h1>
          <h1 className="flex items-center justify-center">
            <Image
              src="/logo_bi.png"
              alt="Example Image"
              width={50}
              height={25}
            />
            <span className="ml-4">Power BI</span>
          </h1>

          <div className="shadow-lg p-2">
            <p className="text-xs mt-4 text-justify">
              notes weaving through the crisp, fresh air. The dew on grass
              glistens like tiny diamonds, and the faint aroma of blooming
              flowers fills the senses with delight. notes weaving through the
              crisp.
            </p>
            <p className="sm:text-center text-justify text-xs">
              {" "}
              fresh air. The dew on grass glistens like tiny diamonds, and the
              faint aroma of blooming flowers fills the senses with delight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
