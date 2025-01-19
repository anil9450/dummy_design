import React from "react";
import Image from "next/image";

const Migration = () => {
  return (
    <div className="mx-auto sm:w-3/4 px-4 sm:px-6 lg:px-8 mt-2 sm:mt-20">
      <h1 className="text-xl text-center text-blue-900">Our</h1>
      <h1 className="text-3xl text-center text-amber-500">
        Migration Strategy
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 sm:mt-10">
        <div className="flex flex-col items-center bg-amber-200 w-full h-48 rounded-lg shadow-lg p-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src="/images.png"
              alt="Assessment and Planning"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mt-4 text-center text-black text-sm">
            Assessment and Planning
          </h2>
        </div>

        <div className="flex flex-col items-center bg-amber-100 w-full h-48 rounded-lg shadow-lg p-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src="/images.png"
              alt="Tools and Techniques"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mt-4 text-center text-black text-sm">
            Tools and Techniques
          </h2>
        </div>

        <div className="flex flex-col items-center bg-amber-100 w-full h-48 rounded-lg shadow-lg p-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src="/images.png"
              alt="Data Mapping & Transformation"
              width={96}
              height={96}
            />
          </div>
          <h2 className="mt-4 text-center text-black text-sm">
            Data Mapping & Transformation
          </h2>
        </div>
      </div>

      <p className="mt-8 text-justify text-xs shadow-lg rounded p-2">
        A migration strategy is essential for organizations transitioning to new
        systems, platforms, or technologies. It involves careful assessment,
        planning, and execution to ensure minimal disruption and maximum
        efficiency. Key steps include evaluating current processes, identifying
        potential risks, and creating a roadmap for seamless integration.
        Leveraging tools and techniques, businesses can optimize data mapping,
        transformation, and validation. Effective communication among
        stakeholders ensures clarity and alignment throughout the migration
        process.
      </p>

      <div>
        <h1 className="mt-2 text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-gray-300">
          CHALLENGES
        </h1>

        <div className="mt-2 bg-gray-100 rounded p-4 w-full shadow-lg">
          <h2 className="text-blue-900 text-center font-bold">
            SSRS and Power BI handle report formatting differently.
          </h2>
          <p className="text-xs mt-4 text-justify">
            A migration strategy is essential for organizations transitioning to
            new systems, platforms, or technologies. It involves careful
            assessment, planning, and execution ensure minimal disruption and
            maximum efficiency with assessment, planning, and execution.
          </p>
          <p className="mt-4 text-xs text-justify">
            Effective communication among stakeholders ensures clarity and
            alignment throughout the migration process. It is important to
            address these differences early in the planning phase to ensure that
            the formatting.planning phase to ensure that the formatting is
            properly migrated across platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Migration;
