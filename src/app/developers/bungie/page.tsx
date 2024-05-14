import games from "../../data/games.json";
import Image from "next/image";
import finalShape from "../../../../public/images/the-final-shape.png";

function BungiePage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Bungie
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Founded in 1991, this Washington-based developer is the most unique
        first-party studio for a variety of reasons:
      </p>
      <ul className="list-disc pl-5 mb-5 text-lg md:pl-7 lg:text-xl lg:tracking-wide lg:pl-10">
        <li>
          Microsoft used to own Bungie when they created Xbox&#39;s flagship IP
          &#39;Halo&#39;.
        </li>
        <li>
          Activision also use to own Bungie during initial work on Destiny.
        </li>
        <li>
          Sony acquired Bungie in 2022, but they&#39;re the only first-party
          developer not part of PS Studios. They&#39;re an independent Sony
          subsidiary.
        </li>
        <li>
          Bungie are the only first-party developer who can port their games to
          competing platforms like Xbox.
        </li>
      </ul>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Why does Bungie have more freedom than all of PS Studios? Desperation.
        Sony saw the money live-service games like Destiny were making, but had
        no in-house knowledge to make their own.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        To get Bungie to sell, Sony overpaid at $3.6 billion and accepted all
        their terms. Bungie now advises other PS Studios on how to make a
        live-service game.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            On PS5, Bungie has only released a port of Destiny 2. In 2023, they
            announced a live-service extraction shooter called Marathon, but
            it&#39;s not been seen since.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            There&#39;s reasons to be wary of Marathon though. Sony paid a lot
            for Bungie&#39;s live-service knowledge, but Destiny 2 has been
            severely underperforming. This forced layoffs just to ensure certain
            targets were met that prevented a Sony takeover of Bungie&#39;s
            board.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            Further layoffs will also likely occur once Destiny 2&#39;s last
            expansion releases, and Sony still might take over. It&#39;s hard to
            believe Marathon will succeed under those circumstances.
          </p>
        </div>
        <div>
          <Image
            src={finalShape}
            alt="Destiny 2: The Final Shape key art"
            width={500}
            height={500}
            id="final-shape"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="final-shape" className="block text-center mb-8">
            Destiny 2&#39;s last expansion
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Bungie")
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

export default BungiePage;
