import Link from "next/link";

function Header() {
  return (
    <header className="bg-blue-400 flex px-6 py-4 justify-between">
      <h1>Sony First Party</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/developers">Developers</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
