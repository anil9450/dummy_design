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
              src="/post-icon-1.png"
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
              src="/post-icon-2.png"
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
              src="/post-icon-3.png"
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

      <p className="mt-8 text-justify text-xs">
        The Migration process started by listing all existing SSRS reports,
        noting their types, how often they are used, and their importance to the
        business. Also reviewed each report’s key features, like data sources,
        parameters, and formats. Then documented what need from the new Power BI
        reports, including visualizations, interactive features, and any special
        functions. We set clear goals for the Power BI migration, such as better
        interactivity, improved data visualization, and real-time data access.
        Also defined how measure success, focusing on user satisfaction, report
        accu- racy, and performance improvements.
      </p>

      <div className="mt-8">
        <h1 className="hidden sm:block relative mt-2 text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-gray-300">
          CHALLENGES
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-12 sm:h-10 bg-white"></span>
        </h1>

        <div className="mt-2 bg-gray-100 p-2 w-full">
          <h2 className="text-blue-900 text-center font-bold">
            SSRS and Power BI handle report formatting differently.
          </h2>
          <p className="text-xs mt-4 text-justify">
            SSRS and Power BI handle report formatting differently. Recreating
            complex layouts and visual styles from SSRS in Power BI required
            major adjustments. Some detailed tables and multi-level
          </p>
          <p className="text-justify text-xs sm:text-center">
            groupings had no direct equivalents in Power BI, so we had to
            rethink or simplify these elements
          </p>
          <p className="mt-4 text-xs text-justify">
            Certain custom visuals and intricate formats from SSRS didn’t exist
            in Power BI, so we either found alternatives or created custom
            visuals. We also encountered inconsistencies in data aggrega- tion
          </p>
          <p className="sm:text-center text-xs text-justify">
            and calculations during the transition. This required revising our
            data transformation logic to ensure that Power BI reports accurately
            reflect the intended metrics and KPIs…
          </p>
        </div>
      </div>
    </div>
  );
};

export default Migration;
