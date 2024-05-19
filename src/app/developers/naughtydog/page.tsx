import { Metadata } from "next";
import games from "../../data/games.json";
import Image from "next/image";
import tlouFactions from "../../../../public/images/dev-pages/tlou-factions.png";

export const metadata: Metadata = {
  title: "Naughty Dog",
  description:
    "The history and future of Naughty Dog, a first-party developer for PlayStation Studios.",
};

function NaughtyDogPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Naughty Dog
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Naughty Dog are a California-based developer that was founded back in
        1984. Over a decade before the PS1!
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        They&#39;re also one of the earliest first-party developers as Sony
        acquired them in 2001. An easy decision considering the critical and
        commercial success of their Crash Bandicoot trilogy on the PS1.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Naughty Dog had a fine PS2 gen with the Jak & Daxter series. However, it
        was the PS3 gen, with the Uncharted trilogy and The Last of Us, where
        their prestige grew to the point that many consider them the premier
        PlayStation studio. This continued into the PS4 gen with sequels in both
        IP.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Like Insomniac, Naughty Dog have released four games on PS5. A
            record for first-party. Unlike Insomniac though, all four games are
            remasters/remakes of PS4 Uncharted/TLOU games.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            While remakes/remasters are nice, they were somewhat unnecessary due
            to the PS4 versions still playing great on PS5.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Furthermore, ND&#39;s only announced new game, TLOU Online, was
            cancelled four years into development. It&#39;s therefore hard to be
            confident despite the pedigree over the past two gens.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Unfortunately, it looks like ND have time for only one new game on
            PS5. A huge drop-off from previous output, although I&#39;m sure it
            will retain their premier quality.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            Regardless, first-party developers like Insomniac have already begun
            supplanting them this gen. Something unthinkable when TLOU released
            in 2013. Hopefully they&#39;re able to return to their former glory
            for the PS6.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={tlouFactions}
            alt="The Last of Us Factions"
            width={500}
            height={500}
            id="tlou-factions"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="tlou-factions" className="block text-center mb-8">
            TLOU Online&#39;s Only Public Asset
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Naughty Dog")
          .map((game) => (
            <div
              key={game.id}
              className="border-2 border-gray-200 rounded-lg shadow-md p-3 flex flex-col align-center"
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

export default NaughtyDogPage;
