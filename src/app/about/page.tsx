function About() {
    return (
      <div className="w-screen h-screen relative bg-orange-300">
        <div className="h-full w-full flex items-center">
          <div className="text-center">
          <h1 className="text-5xl font-bold ">About Me</h1><br/>
          <div className="ml-60">
          <p>I'm Dr. Qurat-ul-ain Ali. I have done BDS from Dow University Of Health Sciences. I have 6 years of experience in dentistry. I have developed strong analytical , problem-solving, and communication skills. Now. I am applying these strengths to web development. Mastering web development technologies(HTML, CSS, Typescript, Node-js etc.) Building personal projects, contributing to open-source initiatives and continue learning from the developer community.
          </p>
          </div>
          </div>

          <div className="w-full flex justify-center mr-60">
            <img src='/images/images (3).jpeg'
            alt="Profile Picture"
            width={300} height={300}
      className="h-80 w-80 rounded-full object-cover border-4 border-orange-600"/>
          </div>
        </div>
      </div>
    )
  }
  
  export default About