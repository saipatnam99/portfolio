
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-2 bg-gray-700 flex flex-col items-center gap-4 text-white text-center justify-center" id="contact">
      <h2 className="text-2xl font-semibold">
        Contact Me
      </h2>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <FaPhone />
          <p className="underline text-center">+ 91 7093849229</p>
        </div>
        <div className="flex items-center gap-2">
        <MdEmail />
        <a href="mailto:saipatnam99@gmail.com" className="text-center underline">
          saipatnam99@gmail.com
        </a>
        </div>
        <div className="flex items-center gap-2">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/sai-patnam-systemengineer/" className="text-center underline">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub />
          <a href="https://github.com/saipatnam99" className="text-center underline">
            GitHub
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;