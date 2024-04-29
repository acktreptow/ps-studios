import games from "../../data/games.json";
import Image from "next/image";
import tlouFactions from "../../../../public/images/tlou-factions.png";

function NaughtyDogPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Naughty Dog
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Naughty Dog are a California-based developer that was founded back in
        1984. Over a decade before the PS1!
      </p>
      <p className="mb-5 text-lg">
        They&#39;re also one of the earliest first-party developers as Sony
        acquired them in 2001. An easy decision considering the critical and
        commercial success of their Crash Bandicoot trilogy on the PS1.
      </p>
      <p className="mb-8 text-lg">
        Naughty Dog had a fine PS2 gen with the Jak & Daxter series. However, it
        was the PS3 gen, with the Uncharted trilogy and The Last of Us, where
        their prestige grew to the point that many consider them the premier
        PlayStation studio. This continued into the PS4 gen with sequels in both
        IP.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="mb-5 text-lg">
            Like Insomniac, Naughty Dog have released four games on PS5 - a
            record for first-party. Unlike Insomniac though, all four games are
            remasters/remakes of PS4 Uncharted/TLOU games.
          </p>
          <p className="mb-5 text-lg">
            Furthermore, Naughty Dog&#39;s only new game, TLOU Online, was
            cancelled four years into development. It&#39;s therefore hard to be
            confident despite the pedigree over the past two gens.
          </p>
          <p className="mb-5 text-lg">
            While remakes/remasters are nice, they were somewhat unnecessary due
            to the PS4 versions still playing great on PS5.
          </p>
          <p className="mb-5 text-lg">
            Unfortunately, it looks like ND have time for only one new game on
            PS5. A huge drop-off from previous output, although I&#39;m sure it
            will retain their premier quality.
          </p>
          <p className="mb-5 text-lg">
            Regardless, many first-party developers have already supplanted them
            this gen. Something unthinkable when TLOU released in 2013.
            Hopefully they return to their former glory for the PS6.
          </p>
        </div>
        <div>
          <Image
            src={tlouFactions}
            alt="The Last of Us Factions"
            width={500}
            height={500}
            id="tlou-factions"
            className="my-3 rounded-lg sm:mx-auto sm:max-w-sm md:max-w-xs md:m-auto"
          />
          <label htmlFor="tlou-factions" className="block text-center mb-8">
            The only public asset of TLOU Online
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
              <h3 className="text-xl font-bold text-center mb-1">
                {game.name}
              </h3>
              <p className="text-lg">Genre: {game.genre}</p>
              <p className="text-lg">Release Date: {game.releaseDate}</p>
              <p className="text-lg">
                Days Between Releases: {game.daysBetweenReleases}
              </p>
              <p className="text-lg">Metacritic Score: {game.metacritic}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NaughtyDogPage;
