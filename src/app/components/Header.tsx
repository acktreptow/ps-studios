import Link from "next/link";
import Image from "next/image";
import psStudiosLogo from "../../../public/images/ps-studios-logo.png";

function Header() {
  return (
    <header className="bg-playstation text-white flex px-10  justify-between items-center container mx-auto">
      <h1 className="hover:text-gray-200">
        <Link href="/">PS5 First-Party Fiesta</Link>
      </h1>
      <Image src={psStudiosLogo} alt="PS Studios Logo" className="w-40" />
      <ul className="flex gap-2">
        <li className="hover:text-gray-200">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link href="/developers">Developers</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link href="/ps5gameslist">PS5 Games</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
