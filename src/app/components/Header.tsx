"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import psStudiosLogo from "../../../public/images/logos/ps-studios-logo.png";

function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  interface LinkI {
    name: string;
    path: string;
  }

  const links: LinkI[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Developers", path: "/developers" },
    { name: "PS5 Games", path: "/ps5games" },
    { name: "Stats", path: "/stats" },
  ];

  return (
    <header
      className={`bg-gradient-to-b from-blue-700 to-playstation text-white flex items-center sm:flex-col sm:pb-4 ${
        isOpen ? "justify-center" : "justify-between"
      } border-b-8 border-amber-300`}
    >
      <div>
        <Link href="/">
          <Image
            src={psStudiosLogo}
            alt="PS Studios Logo"
            className={`${isOpen ? "hidden" : "w-32 sm:w-48"}`}
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
          className={`gap-5 font-semibold sm:flex md:text-lg lg:text-xl lg:space-x-2 ${
            isOpen ? "flex flex-col items-center my-3 gap-3" : "hidden"
          }`}
        >
          {links.map((link: LinkI) => (
            <li
              key={link.name}
              className={`hover:text-gray-200 ${
                activeLink === link.path ? "border-b-2 border-white" : ""
              } `}
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
