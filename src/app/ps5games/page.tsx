"use client";
import { useState } from "react";
import games from "../data/games.json";

function PS5Games() {
  const [metacritic, setMetacritic] = useState(false);

  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Every PlayStation Studios PS5 Game
      </h1>
      <button
        onClick={() => setMetacritic(false)}
        className="mx-auto border p-4 mb-8 bg-playstation text-white rounded-full"
      >
        Sort by Release Date
      </button>
      <button
        onClick={() => setMetacritic(true)}
        className="mx-auto border p-4 mb-8 bg-playstation text-white rounded-full"
      >
        Sort by Metacritic score
      </button>
      <div className="mb-5 grid gap-5 sm:grid-cols-2 ">
        {games
          .sort((a, b) =>
            metacritic
              ? a.metacritic - b.metacritic
              : new Date(a.releaseDate) - new Date(b.releaseDate)
          )
          .filter((game) => game.developer !== "Nixxes Software")
          .map((game) => (
            <div
              key={game.id}
              className="border-2 border-gray-200 rounded-lg shadow-md p-3"
            >
              <h3 className="text-xl font-bold text-center mb-1">
                {game.name}
              </h3>
              <p className="text-lg">Developer: {game.developer}</p>
              <p className="text-lg">Genre: {game.genre}</p>
              <p className="text-lg">Release Date: {game.releaseDate}</p>
              <p className="text-lg">Metacritic Score: {game.metacritic}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PS5Games;
