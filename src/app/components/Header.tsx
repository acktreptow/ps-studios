"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import psStudiosLogo from "../../../public/images/ps-studios-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto bg-playstation text-white flex sm:px-10 justify-between items-center ">
      <div>
        <Link href="/">
          <Image
            src={psStudiosLogo}
            alt="PS Studios Logo"
            className={"w-32 sm:w-40" + (isOpen ? " hidden" : "")}
          />
        </Link>
      </div>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`sm:hidden flex flex-col ${isOpen ? "hidden" : ""}`}
        >
          <div className="w-6 mb-1 border-t-2 border-white"></div>
          <div className="w-6 mb-1 border-t-2 border-white"></div>
          <div className="w-6 border-t-2 border-white"></div>
        </button>
        <ul
          className={`gap-5 font-semibold lg:text-lg ${
            isOpen ? "flex flex-col items-center mt-10" : "hidden"
          } sm:flex sm:flex-row`}
        >
          <li className="hover:text-gray-200">
            <Link href="/" onClick={() => setIsOpen(!open)}>
              Home
            </Link>
          </li>
          <li className="hover:text-gray-200" onClick={() => setIsOpen(!open)}>
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-200" onClick={() => setIsOpen(!open)}>
            <Link href="/developers">Developers</Link>
          </li>
          <li className="hover:text-gray-200" onClick={() => setIsOpen(!open)}>
            <Link href="/ps5games">PS5 Games</Link>
          </li>
          <li className="hover:text-gray-200" onClick={() => setIsOpen(!open)}>
            <Link href="/stats">Stats</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
