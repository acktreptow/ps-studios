import { Metadata } from "next";
import gamesData from "../../data/games.json";
import Image from "next/image";
import jadeRaymond from "../../../../public/images/dev-pages/jade-raymond.png";
import fairGames from "../../../../public/images/dev-pages/fairgames.png";

export const metadata: Metadata = {
  title: "Haven Studios",
  description:
    "The history and future of Haven Studios, a first-party developer for PlayStation Studios.",
};

type Game = {
  developer: string;
  name: string;
  id: string;
  genre: string;
  releaseDate: string;
  daysBetweenReleases: number | string;
  metacritic: number | string;
};

const games: Game[] = gamesData;

function HavenStudiosPage(): JSX.Element {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Haven Studios
      </h1>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">History</span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            This Montreal-based developer was founded in 2021 by Jade Raymond -
            one of the creators of Assassin&#39;s Creed. Raymond was at Google
            beforehand, but left once they stopped supporting their cloud-based
            console &#39;Stadia&#39;.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Raymond then took this cloud infrastructure knowledge to Haven,
            which caught the attention of Sony. They immediately started funding
            their first game and acquired Haven a year later.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            This game turned out to be FairGame$. A live service competitive
            heist shooter that will launch simultaneously on PS5 and PC. It
            currently has no release date.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={jadeRaymond}
            alt="Picture of Jade Raymond"
            width={500}
            height={500}
            id="jade-raymond"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-sm"
          />
          <label
            htmlFor="jade-raymond"
            className="block text-center mb-8 lg:ml-5"
          >
            Haven Studios Founder Jade Raymond
          </label>
        </div>
      </div>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            We haven&#39;t seen Fairgame$ since the first trailer, which even
            then was only CGI. Haven is also a new studio, and the first to
            emphasize the cloud. It&#39;s therefore hard to predict how
            Fairgame$ will do, but I&#39;m optimistic.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            Mark Cerny, architect of the PS5, has taken an interest in Haven and
            is assisting with Fairgame$ and general R&D. Between his interest
            and Sony investing so quickly, I&#39;m cautiously confident despite
            a lack of concrete info.
          </p>
        </div>
        <div>
          <Image
            src={fairGames}
            alt="Fairgames CGI trailer thumbnail"
            width={500}
            height={500}
            id="fairgames"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="fairgames" className="block text-center mb-8">
            Fairgame$ Only Has A CGI Trailer
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game: Game) => game.developer === "Haven Studios")
          .map((game: Game) => (
            <div
              key={game.id}
              className="border-2 border-gray-200 rounded-lg shadow-md p-3"
            >
              <h3 className="text-xl font-bold text-center mb-1 lg:text-2xl lg:mb-3">
                {game.name}
              </h3>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Genre: {game.genre}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Release Date: {game.releaseDate}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Days Since Their Last Game: {game.daysBetweenReleases}
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

export default HavenStudiosPage;
