import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-teal-700 text-white shadow z-50">
      <div className="max-w-6xl mx-auto flex flex-3 justify-between items-center p-4 justify-right">
        <h1 className="text-xl font-bold text-white">
          Sai Patnam
        </h1>

        <ul className="flex gap-6">
          <li>
            <a href="#hero" className="hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;