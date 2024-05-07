"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import developers from "../app/data/developers.json";

function Homepage() {
  const [selectedDeveloper, setSelectedDeveloper] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDeveloper) {
      window.location.href = `/developers/${selectedDeveloper}`;
    }
  };

  return (
    <main className="text-center p-5 container mx-auto flex-grow">
      <h1 className="text-4xl font-bold py-2 my-5 lg:text-6xl">
        PS Studios for PS5
      </h1>
      <p className="text-xl py-2 mb-6">
        Everything you need to know about Sony&#39;s first-party games for the
        PS5.
      </p>
      <form onSubmit={handleSubmit} className="text-lg">
        <select
          className="block mx-auto border border-gray-500 rounded-lg p-2 mb-4"
          value={selectedDeveloper}
          onChange={(e) => setSelectedDeveloper(e.target.value)}
        >
          <option value="">Select Developer</option>
          {developers
            .filter(
              (developer) =>
                developer.name !== "PlayStation Logo" &&
                developer.name !== "PS5 Logo"
            )
            .map((developer) => (
              <option key={developer.id} value={developer.urlPath}>
                {developer.name}
              </option>
            ))}
        </select>
        <button
          type="submit"
          className="block mx-auto border p-4 mb-8 bg-playstation text-white rounded-full"
        >
          Go To Developer
        </button>
      </form>
      <div className="grid grid-cols-3 mb-4 md:grid-cols-4 lg:grid-cols-6">
        {developers.map((developer) => (
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
