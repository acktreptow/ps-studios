import games from "../../data/games.json";
import Image from "next/image";
import gotTrophies from "../../../../public/images/got-trophies.png";

function NixxesSoftwarePage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Nixxes Software
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 1999, this this Utrecht-based studio holds a very unique
        position among PlayStation Studios ever since they were purchased in
        2021.
      </p>
      <p className="mb-5 text-lg">
        Unlike all other PlayStation developers who are there to work on new
        games, Nixxes's sole purpose is to work on PC ports on PS5 games.
      </p>
      <p className="mb-8 text-lg">
        Since 2022, they've already released 4 ports of PS5 games with all the
        bells and whistles you'd expect to see in a PC version, with a 5th game
        coming next month. These ports have also be far more critically
        acclaimed compared to other PC ports of PS5 games that were done
        in-house such as The Last of Us Part II PC by Naughty Dog.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Nixxes are one of the most important companies for PlayStation as they
        are the way Sony finds growth for these big AAA games outside of the
        console market. Something needed as development costs continue to rise.
        I highly doubt we will see day-1 PC ports for single-player games
        however from them. Logistically, it just doesn't work as an external
        studio.
      </p>
      <p className="mb-5 text-lg">
        For PS5 fans? There's also a reason to keep an eye on them! In 2023,
        Nixxes confirmed that it would also start working on remasters as well
        as PC ports. So we should hopefully see some great PS3/PS4 games that
        could do with a fresh coat of paint, receive a definitive version by the
        expertise of this developer.
      </p>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          PC Ports of PS5 Games
        </span>
      </h2>
      <div className="mb-5 grid gap-5">
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
      <Image
        src={gotTrophies}
        alt="Ghost of Tsushima PC trophies overlay"
        width={500}
        height={500}
        id="got-trophies"
        className="my-3 rounded-lg"
      />
      <label htmlFor="got-trophies" className="block text-center">
        PlayStation&#39;s PC overlay for trophies
      </label>
    </div>
  );
}

export default NixxesSoftwarePage;
