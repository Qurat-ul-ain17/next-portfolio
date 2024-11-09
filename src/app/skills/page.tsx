import React from "react";

function Skills() {
  return (
    <div className="bg-orange-300 w-screen h-screen flex justify-center items-center">
      <div className="bg-orange-400 p-36 rounded-lg shadow-lg w-[60%] h-[60%]">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-5">
          {/* Skill Item */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/html-icon.png"
                alt="HTML"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-6 text-lg font-medium">HTML</p>
          </div>
          {/* Skill Item */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img src="/images/css-icon.png" alt="CSS" className="w-16 h-16" />
            </div>
            <p className="mt-6 text-lg font-medium">CSS</p>
          </div>
          {/* Skill Item */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/tailwind-icon.jpeg"
                alt="Tailwind CSS"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-6 text-lg font-medium">Tailwind CSS</p>
          </div>
          {/* Skill Item */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/typescript-icon.png"
                alt="TypeScript"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-6 text-lg font-medium">TypeScript</p>
          </div>
          {/* Skill Item */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full">
              <img
                src="/images/nextjs-icon.png"
                alt="Next.js"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-6 text-lg font-medium">Next.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
