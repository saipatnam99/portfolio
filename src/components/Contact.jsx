import React from "react";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-700 px-2 py-5 text-center text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Contact Me</h2>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base lg:flex-nowrap">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-3 py-2">
            <FaPhone aria-hidden="true" />
            <p className="text-center">+ 91 7093849229</p>
          </div>

          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-3 py-2">
            <MdEmail aria-hidden="true" />
            <a href="mailto:saipatnam99@gmail.com" className="text-center underline">
              saipatnam99@gmail.com
            </a>
          </div>

          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-3 py-2">
            <FaLinkedin aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/sai-patnam-systemengineer/"
              className="text-center underline"
            >
              LinkedIn
            </a>
          </div>

          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-3 py-2">
            <FaGithub aria-hidden="true" />
            <a href="https://github.com/saipatnam99" className="text-center underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;