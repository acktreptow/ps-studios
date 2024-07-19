"use client";

import { Game } from "../types/Game";
import { useState } from "react";
import gamesData from "../data/games.json";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";
import GameTitle from "../components/GameTitle";

const games: Game[] = gamesData;

function PS5GamesClient(): JSX.Element {
  const [metacritic, setMetacritic] = useState<boolean>(false);

  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 md:mb-14 tracking-wide md:leading-relaxed">
        Every PlayStation Studios PS5 Game
      </h1>
      <div className="flex flex-col items-center align-middle md:flex-row lg:text-lg">
        <button
          onClick={() => setMetacritic(false)}
          className="border p-4 mb-5 font-semibold md:mb-8 md:mr-3 lg:mr-6 bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full  hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation"
        >
          Sort by Release Date
        </button>
        <button
          onClick={() => setMetacritic(true)}
          className="border p-4 mb-8 font-semibold bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation"
        >
          Sort by Metacritic Score
        </button>
      </div>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .sort((a: Game, b: Game) => {
            if (metacritic) {
              if (a.metacritic === "N/A") return 1;
              if (b.metacritic === "N/A") return -1;
              return (
                ((a.metacritic as number) || 0) -
                ((b.metacritic as number) || 0)
              );
            } else {
              if (a.releaseDate === "Unreleased") return 1;
              if (b.releaseDate === "Unreleased") return -1;
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
              <GameTitle>{game.name}</GameTitle>
              <Paragraph marginBottom={0}>
                Developer: {game.developer}
              </Paragraph>
              <Paragraph marginBottom={0}>Genre: {game.genre}</Paragraph>
              <Paragraph marginBottom={0}>
                Release Date: {game.releaseDate}
              </Paragraph>
              <Paragraph marginBottom={0}>
                Metacritic Score: {game.metacritic}
              </Paragraph>
            </div>
          ))}
      </div>
    </Container>
  );
}

export default PS5GamesClient;
