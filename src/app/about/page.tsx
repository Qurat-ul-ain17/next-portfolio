import Image from 'next/image';

function About() {
  return (
    <div className="w-screen h-screen relative bg-orange-300">
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 md:ml-56">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg md:w-4/5 mx-auto md:ml-20">
            I'm Dr. Qurat-ul-ain Ali. I have done BDS from Dow University Of
            Health Sciences. I have 6 years of experience in dentistry. I have
            developed strong analytical , problem-solving, and communication
            skills. Now. I am applying these strengths to web development.
            Mastering web development technologies(HTML, CSS, Typescript,
            Node-js etc.) Building personal projects, contributing to
            open-source initiatives and continue learning from the developer
            community.
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-start">
          <Image
            src={"/images/images (3).jpeg"}
            alt="Profile Picture"
            width={300}
            height={300}
            className="h-80 w-80 rounded-full object-cover border-4 border-orange-600"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
