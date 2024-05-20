import { Metadata } from "next";
import games from "../../data/games.json";
import Image from "next/image";
import gotDC from "../../../../public/images/dev-pages/got-dc.png";

export const metadata: Metadata = {
  title: "Sucker Punch",
  description:
    "The history and future of Sucker Punch, a first-party developer for PlayStation Studios.",
};

function SuckerPunchProductionsPage(): JSX.Element {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Sucker Punch Productions
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Sucker Punch are a Washington-based developer that was founded in 1997,
        initially to work on an N64 game called Rocket: Robot on Wheels.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Sony were impressed, so they funded SP&#39;s Sly Cooper trilogy for the
        PS2 and inFamous 1/2 on the PS3. After five great games under this
        partnership, Sony acquired the studio in 2011.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        SP have since moved on from inFamous to Ghost of Tsushima. A
        third-person samurai action-adventure that quickly became the
        studio&#39;s best selling game.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        GoT initially released on PS4 in 2020, followed by a PS5 Director&#39;s
        Cut in 2021 that added around 10 more hours of gameplay via a new island
        to explore. It&#39;s currently SP&#39;s only PS5 game.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            It&#39;s been nearly four years since SP achieved new highs, both
            commercially and critically, with GoT. It&#39;s therefore not
            surprising that a proper sequel is heavily rumoured to be their next
            game.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            Considering this, I predict that not only is GoT 2 the next game ANY
            PS developer announces, but it will also release very shortly after
            to new highs for Sucker Punch, critically and commercially.
          </p>
        </div>
        <div>
          <Image
            src={gotDC}
            alt="Ghost of Tsushima Director's Cut main menu screen"
            width={500}
            height={500}
            id="got-dc"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="got-dc" className="block text-center mb-8">
            GoT: Director&#39;s Cut Main Menu Screen
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Sucker Punch Productions")
          .map((game) => (
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

export default SuckerPunchProductionsPage;
