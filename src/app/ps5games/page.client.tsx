"use client";

import { Metadata } from "next";
import { useState } from "react";
import gamesData from "../data/games.json";

export const metadata: Metadata = {
  title: "Stats",
  description:
    "The stats section of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

type Game = {
  id: string;
  name: string;
  developer: string;
  genre: string;
  releaseDate: string;
  metacritic: number | string;
};

const games: Game[] = gamesData as Game[];

function PS5GamesClient(): JSX.Element {
  const [metacritic, setMetacritic] = useState<boolean>(false);

  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 md:mb-14 tracking-wide md:leading-relaxed">
        Every PlayStation Studios PS5 Game
      </h1>
      <div className="flex flex-col items-center align-middle md:flex-row lg:text-lg">
        <button
          onClick={() => setMetacritic(false)}
          className="border p-4 mb-5 md:mb-8 md:mr-3 lg:mr-6 bg-playstation text-white rounded-full  hover:bg-blue-900 transition-colors duration-200 shadow-md shadow-playstation"
        >
          Sort by Release Date
        </button>
        <button
          onClick={() => setMetacritic(true)}
          className="border p-4 mb-8 bg-playstation text-white rounded-full hover:bg-blue-900 transition-colors duration-200 shadow-md shadow-playstation"
        >
          Sort by Metacritic Score
        </button>
      </div>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .sort((a: Game, b: Game) => {
            if (metacritic) {
              return (
                ((a.metacritic as number) || 0) -
                ((b.metacritic as number) || 0)
              );
            } else {
              return (
                (a.releaseDate ? new Date(a.releaseDate).getTime() : 0) -
                (b.releaseDate ? new Date(b.releaseDate).getTime() : 0)
              );
            }
          })
          .filter((game: Game) => game.developer !== "Nixxes Software")
          .map((game: Game) => (
            <div
              key={game.id}
              className="border-2 border-gray-200 rounded-lg shadow-md p-3"
            >
              <h3 className="text-xl font-bold text-center mb-1 lg:text-2xl lg:mb-3">
                {game.name}
              </h3>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Developer: {game.developer}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Genre: {game.genre}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Release Date: {game.releaseDate}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Metacritic Score: {game.metacritic}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PS5GamesClient;
