import Link from "next/link";
import Image from "next/image";
import psStudiosLogo from "../../../public/images/ps-studios-logo.png";

function Header() {
  return (
    <header className="bg-playstation text-white flex sm:px-10 justify-between items-center container mx-auto">
      <div>
        <Link href="/">
          <Image
            src={psStudiosLogo}
            alt="PS Studios Logo"
            className=" w-32 sm:w-40"
          />
        </Link>
      </div>
      <div>
        <ul className="flex gap-5 font-semibold lg:text-lg">
          <li className="hover:text-gray-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link href="/developers">Developers</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link href="/ps5games">PS5 Games</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link href="/stats">Stats</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
