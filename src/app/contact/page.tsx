import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function page() {
  return (
    <div className="bg-orange-300 h-screen w-screen flex items-center justify-center pt-32">
      <div className="bg-orange-400 h-auto w-full sm:w-[70%] md:w-[60%] lg:w=[50%] relative rounded-xl border-orange-500 border-4">
        <div className="space-y-8">
          <h2 className="tex-3xl sm:text-5xl text-center">GET IN TOUCH</h2>
          <form>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name:"
                className="w-full px-3 py-2 placeholder-black bg-orange-300 border-0 border-orange-400 rounded shadow"
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email:"
                className="w-full px-3 py-2 placeholder-black bg-orange-300 border-0 border-orange-400 rounded shadow"
              />
            </div>
            <br />
            <div className="mb-3">
              <textarea
                placeholder="Your Message:"
                name="message"
                className="w-full px-3 py-2 placeholder-black bg-orange-300 border-0 border-orange-400 rounded shadow"
              />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-black px-6 mb-10 py-3 font-bold border-0 rounded-xl shadow">
              SEND YOUR FEEDBACK
            </Button>
          </form>

          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 pb-4 pl-6">
            <a href="https://github.com/Qurat-ul-ain17" target="_blank"
            rel="noopener noreference"
            className='text-3xl sm:text-4xl hover:uppercase'>
              <FaGithub />
              <span className="sm:block hidden">Github</span>
            </a>

            <a href="www.linkedin.com/in/quratulain-ali-b97a07131"
            target="_blank"
            rel="noopener noreference"
            className="text-3xl sm:text-4xl hover:uppercase">
              <FaLinkedin/>
              <span className="sm:block hidden">Linkedin</span>
            </a>
            <a href="mailto:someone@gmail.com"
            className="text-3xl sm:text-4xl hover:uppercase">
            <MdOutgoingMail size={30} />
            <span className="sm:block hidden">Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
