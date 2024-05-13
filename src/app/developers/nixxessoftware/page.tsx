import games from "../../data/games.json";
import Image from "next/image";
import gotTrophies from "../../../../public/images/got-trophies.png";

function NixxesSoftwarePage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Nixxes Software
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 1999, this Utrecht-based studio holds a unique position
        within PlayStation Studios ever since being acquired in 2021.
      </p>
      <p className="mb-5 text-lg">
        Unlike all other first-party studios who develop new PS5 games, remakes,
        and remasters, Nixxes have exclusively worked on PC ports of them.
      </p>
      <p className="mb-5 text-lg">
        Since 2022, they&#39;ve already released 4 ports with all the bells and
        whistles you&#39;d expect to see in a PC version, with a 5th port
        shipping this month.
      </p>
      <p className="mb-8 text-lg">
        Nixxes PC ports have also been far more critically acclaimed compared to
        others that were done by the game&#39;s actual developer. For example,
        The Last of Us Part 2&#39;s PC port by Naughty Dog.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            Nixxes are an incredibly important studio for PlayStation as this is
            the easiest way Sony finds growth outside of the console market.
            Something needed as AAA game development costs continue to rise.
          </p>
          <p className="mb-5 text-lg">
            I highly doubt we&#39;ll see Nixxes PC ports ship simultaneously
            with the PS5 version however. Logistically, this is a nightmare for
            an external studio to do so effectively. Unless the PS5 version is
            held until their PC port is ready.
          </p>
          <p className="mb-5 text-lg">
            What if you don&#39;t play on PC? Well, there&#39;s still a reason
            to keep an eye on them! In 2023, Nixxes confirmed that it&#39;s
            started working on remasters too.
          </p>
          <p className="mb-8 text-lg">
            Hopefully that means we get some great PS5 remasters of marque
            PS3/PS4 games that deserve a fresh coat of paint from this expert
            developer!
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gotTrophies}
            alt="Ghost of Tsushima PC trophies overlay"
            width={500}
            height={500}
            id="got-trophies"
            className="my-3 rounded-lg md:max-w-xs lg:max-w-sm md:ml-5"
          />
          <label htmlFor="got-trophies" className="block text-center mb-8">
            PlayStation&#39;s PC overlay for trophies
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PC Ports</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Nixxes Software")
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

export default NixxesSoftwarePage;
