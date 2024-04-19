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
    <main className="text-center py-6">
      <h1 className="text-2xl font-bold py-2">PlayStation Studios</h1>
      <p className="py-2">
        Everything you need to know about Sonys first-party content during the
        PS5 generation.
      </p>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedDeveloper}
          onChange={(e) => setSelectedDeveloper(e.target.value)}
        >
          <option value="">Select developer</option>
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
        <button type="submit" className="block m-auto">
          Go to developer
        </button>
      </form>
      <div className="grid grid-cols-3 mx-2 mt-10 mb-4">
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
