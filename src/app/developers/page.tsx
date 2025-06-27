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
      <h1 className="text-4xl font-bold py-2 mt-2 mb-8 lg:text-6xl md:mb-10">
        PS Developers
      </h1>
      <div className="md:flex md:items-center md:justify-center md:space-x-8">
        <div className="bg-gradient-to-r from-blue-800 to-playstation p-4 rounded-3xl xl mx-auto mb-8 w-3/4 md:w-2/5 lg:w-1/3 md:mx-0">
          <ul className="text-white text-xl leading-6 md:leading-7 md:text-2xl lg:left-8">
            {developers
              .filter((developer: Developer) => developer.hasClosed === false)
              .map((developer: Developer) => (
                <Link
                  key={developer.id}
                  href={`developers/${developer.urlPath}`}
                >
                  <li className="font-semibold p-1 hover:text-amber-300 transition duration-200">
                    {developer.name}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-playstation p-4 rounded-3xl xl mx-auto w-3/4 md:w-2/5 lg:w-1/3 md:mx-0">
          <ul className="text-white text-xl leading-6 md:leading-7 md:text-2xl lg:left-8">
            {developers
              .filter((developer: Developer) => developer.hasClosed === true)
              .map((developer: Developer) => (
                <Link
                  key={developer.id}
                  href={`developers/${developer.urlPath}`}
                >
                  <li className="font-semibold p-1 hover:text-amber-300 transition duration-200">
                    {developer.name}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevelopersPage;
