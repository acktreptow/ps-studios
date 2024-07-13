import { Metadata } from "next";
import developersData from "../data/developers.json";
import { Developer } from "../types/Developer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PS5 Developers",
  description:
    "The PS5 developers section of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

const developers: Developer[] = developersData;

function DevelopersPage(): JSX.Element {
  return (
    <div className="bg-white text-center py-6 flex-grow container mx-auto md:py-10">
      <h1 className="text-3xl font-bold py-2 mb-3 md:text-5xl md:mb-10">
        PlayStation Developers
      </h1>
      <div className="bg-playstation rounded-3xl xl w-1/3 mx-auto p-4">
        <ul className="text-white text-xl leading-8 md:text-2xl">
          {developers
            .filter(
              (developer: Developer) =>
                developer.name !== "PlayStation Logo" &&
                developer.name !== "PS5 Logo"
            )
            .map((developer: Developer) => (
              <Link key={developer.id} href={`developers/${developer.urlPath}`}>
                <li className="font-semibold p-1 hover:text-blue-200 transition duration-200">
                  {developer.name}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DevelopersPage;
