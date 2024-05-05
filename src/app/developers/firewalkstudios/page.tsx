import games from "../../data/games.json";
import Image from "next/image";
import concord from "../../../../public/images/concord.png";

function FirewalkStudiosPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Firewalk Studios
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Firewalk was founded in Washington, in 2018. Its founders are
        experienced veterans of popular multiplayer shooters, having worked on
        Halo and Destiny.
      </p>
      <p className="mb-5 text-lg">
        With this expertise and Sony&#39;s increased focus on live-service
        multiplayer games for PS5, it&#39;s no surprise they acquired Firewalk
        in 2023.
      </p>
      <p className="mb-8 text-lg">
        Firewalk then announced their first game: Concord. A live-service PVP
        shooter with an 80&#39;s sci-fi aesthetic. It launches on PS5 and PC in
        2024.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            Everything we know about Concord is written above, so there&#39;s
            not a lot to go off. However, the pedigree of Firewalk&#39;s
            founders instills confidence.
          </p>
          <p className="mb-5 text-lg">
            They know how to make a good shooter, so I&#39;m cautiously
            optimistic until we see something that proves otherwise.
          </p>
          <p className="mb-8 text-lg">
            Concord has recently been reconfirmed for a 2024 release, so we
            <span className="italic">should</span> see something substantial
            soon.
          </p>
        </div>
        <div>
          <Image
            src={concord}
            alt="Concord key art"
            width={500}
            height={500}
            id="concord"
            className="my-3 rounded-lg md:mx-auto md:max-w-xs lg:max-w-sm md:ml-5"
          />
          <label htmlFor="concord" className="block text-center mb-8">
            Concord primary key art
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Firewalk Studios")
          .map((game) => (
            <div
              key={game.id}
              className="border-2 border-gray-200 rounded-lg shadow-md p-3"
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

export default FirewalkStudiosPage;
