import { Metadata } from "next";
import developers from "../data/developers.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PS5 Developers",
  description:
    "The PS5 developers section of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

function DevelopersPage() {
  return (
    <div className="text-center py-6 flex-grow container mx-auto md:py-10">
      <h1 className="text-3xl font-bold py-2 mb-3 md:text-5xl md:mb-10">
        PlayStation Developers
      </h1>
      <ul className="text-xl leading-8 md:text-2xl md:leading-10">
        {developers
          .filter(
            (developer) =>
              developer.name !== "PlayStation Logo" &&
              developer.name !== "PS5 Logo"
          )
          .map((developer) => (
            <Link key={developer.id} href={`developers/${developer.urlPath}`}>
              <li className="font-semibold p-1 hover:text-playstation transition duration-200">
                {developer.name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default DevelopersPage;
