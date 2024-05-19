"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import psStudiosLogo from "../../../public/images/logos/ps-studios-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Developers", path: "/developers" },
    { name: "PS5 Games", path: "/ps5games" },
    { name: "Stats", path: "/stats" },
  ];

  return (
    <header
      className={`container mx-auto bg-playstation text-white flex sm:px-10 items-center ${
        isOpen ? "justify-center" : "justify-between"
      }`}
    >
      <div>
        <Link href="/">
          <Image
            src={psStudiosLogo}
            alt="PS Studios Logo"
            className={`${
              isOpen ? "hidden" : "w-32 sm:w-60 sm:-ml-16 lg:-ml-14"
            }`}
          />
        </Link>
      </div>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? "hidden" : "sm:hidden flex flex-col mr-10"}`}
        >
          <div className="w-6 mb-1 border-t-2 border-white"></div>
          <div className="w-6 mb-1 border-t-2 border-white"></div>
          <div className="w-6 border-t-2 border-white"></div>
        </button>
        <ul
          className={`gap-5 font-semibold sm:flex md:text-lg ${
            isOpen ? "flex flex-col items-center my-3 gap-3" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className={`hover:text-gray-200 ${
                activeLink === link.path ? "border-b-2 border-white" : ""
              }`}
              onClick={() => {
                setIsOpen(!open);
                setActiveLink(link.path);
              }}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          <li className="hover:text-gray-200" onClick={() => setIsOpen(!open)}>
            <Link
              href="https://github.com/acktreptow/ps-studios"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
