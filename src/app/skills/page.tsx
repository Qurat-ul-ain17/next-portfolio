import React from "react";

function Skills() {
  return (
    <div className="bg-orange-300 w-screen h-screen flex justify-center items-center">
      <div className="bg-orange-400 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg sm:h-3/4 lg:h-[60%] w-full sm:w-2/3 lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-5 ">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/html-icon.png"
                alt="HTML"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <p className="mt-6 text-sm md:text-md font-medium">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img src="/images/css-icon.png" alt="CSS" className="w-10 h-10 md:w-14 md:h-14" />
            </div>
            <p className="mt-6 text-sm md:text-md font-medium">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/tailwind-icon.jpeg"
                alt="Tailwind CSS"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <p className="mt-6 text-sm md:text-md font-medium">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/typescript-icon.png"
                alt="TypeScript"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <p className="mt-6 text-sm md:text-md font-medium">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/nextjs-icon.png"
                alt="Next.js"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <p className="mt-6 text-sm md:text-md font-medium">Next.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
