import Link from "next/link";
import Image from "next/image";
import psStudiosLogo from "../../../public/images/ps-studios-logo.svg";

function Header() {
  return (
    <header className="bg-blue-400 flex px-6 py-4 justify-between items-center">
      <h1>Sony First Party</h1>
      <Image src={psStudiosLogo} alt="PS Studios Logo" className="w-8" />
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/developers">Developers</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
