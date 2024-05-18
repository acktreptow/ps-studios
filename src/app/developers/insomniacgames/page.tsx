import { Metadata } from "next";
import games from "../../data/games.json";
import Image from "next/image";
import insomniacPortfolio from "../../../../public/images/insomniac-portfolio.png";

export const metadata: Metadata = {
  title: "Insomniac Games",
  description:
    "The history and future of Insomniac Games, a first-party developer for PlayStation Studios.",
};

function InsomniacGamesPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Insomniac Games
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Founded in 1994, this California-based studio had been developing
        PlayStation exclusives decades before being officially acquired by Sony
        in 2019.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        These exclusives include the Spyro the Dragon (PS1) and Resistance (PS3)
        trilogies, as well as Ratchet & Clank on PS2/3. All funded by Sony.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        In the early 2010s, the latter two IP started to flounder which caused
        Insomniac to branch out. Developing games funded by EA, Xbox and Oculus.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Insomniac would however find solid ground again with 2018&#39;s
        Spider-Man for the PS4. It was not only their highest selling game ever,
        but was also the highest selling PS4 first-party game.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Naturally Sony, after seeing this success, acquired them the following
        year. They&#39;ve been on fire ever since!
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Most people agree that Insomniac have been the most important
            PlayStation studio this generation. That&#39;s because they&#39;ve
            already shipped four games to critical and commercial success.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Furthermore, even though Insomniac have already released more titles
            than most developers will this entire generation, we know their next
            game - Marvel&#39;s Wolverine in (likely) 2025.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Between Insomniac&#39;s current track record and what&#39;s already
            out there about Wolverine, it&#39;s an easy prediction to say that
            it will be a hit.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            I really can&#39;t see them not surpassing Naughty Dog and Santa
            Monica as the most important first-party developer for the PS5 when
            all is said and done.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={insomniacPortfolio}
            alt="Insomniac's PS5 portfolio"
            width={500}
            height={500}
            id="insomniac-portfolio"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="insomniac-portfolio"
            className="block text-center mb-8"
          >
            Insomniac&#39;s PS5 Portfolio
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Insomniac Games")
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

export default InsomniacGamesPage;
