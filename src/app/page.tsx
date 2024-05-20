"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import developersData from "../app/data/developers.json";

type Developer = {
  id: number;
  name: string;
  urlPath: string;
  img: string;
};

const developers: Developer[] = developersData as Developer[];

function Homepage(): JSX.Element {
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (selectedDeveloper) {
      window.location.href = `/developers/${selectedDeveloper}`;
    }
  };

  return (
    <main className="bg-white text-center p-5 container mx-auto flex-grow">
      <h1 className="text-4xl font-bold py-2 my-5 lg:text-6xl">
        PS Studios for PS5
      </h1>
      <p className="text-xl py-2 mb-6 lg:text-2xl lg:tracking-wide">
        Everything you need to know about Sony&#39;s first-party games for the
        PS5.
      </p>
      <form onSubmit={handleSubmit} className="text-lg lg:tracking-wide">
        <select
          className="block mx-auto border-4 border-gray-500 rounded-lg p-2 mb-4 hover:border-playstation transition-colors duration-200 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-playstation"
          value={selectedDeveloper}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedDeveloper(e.target.value);
            setHidden(true);
          }}
        >
          <option value="" className={`${hidden ? "hidden" : ""}`}>
            Select PS5 Developer
          </option>
          {developers
            .filter(
              (developer: Developer) =>
                developer.name !== "PlayStation Logo" &&
                developer.name !== "PS5 Logo"
            )
            .map((developer: Developer) => (
              <option key={developer.id} value={developer.urlPath}>
                {developer.name}
              </option>
            ))}
        </select>
        <button
          type="submit"
          className="block mx-auto border p-4 mb-8 bg-playstation text-white rounded-full hover:bg-blue-900 transition-colors duration-200 shadow-md shadow-playstation"
        >
          Go To Developer
        </button>
      </form>
      <div className="grid grid-cols-3 mb-6 md:grid-cols-4 lg:grid-cols-6">
        {developers.map((developer: Developer) => (
          <Link
            key={developer.id}
            href={
              developer.name === "PlayStation Logo"
                ? `${developer.urlPath}`
                : `/developers/${developer.urlPath}`
            }
          >
            <Image
              src={developer.img}
              width={500}
              height={500}
              alt={`${developer.name} Logo`}
              className="transform scale-90 rounded-lg"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Homepage;
