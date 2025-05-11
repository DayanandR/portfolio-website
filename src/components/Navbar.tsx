"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const navLinks = [
  { title: "About", path: "#about" },
  { title: "Stack", path: "#stack" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-bold">
      <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="transform hover:text-white/50 transition duration-300 ease-in-out"
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col h-full justify-center items-center space-y-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="transform hover:text-white/50 transition duration-300 ease-in-out"
                href={item.path}
                onClick={closeNav}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
