import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-teal-700 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-bold tracking-wide sm:text-xl">
          Sai Patnam
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="rounded-md border border-white/60 p-2 text-white sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-3 bg-teal-700 px-4 pb-4 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-6 sm:p-0`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-md px-2 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-blue-100 sm:inline-block sm:px-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;