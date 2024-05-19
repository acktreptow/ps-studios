import { Metadata } from "next";
import games from "../../data/games.json";
import Image from "next/image";
import demonsSouls from "../../../../public/images/dev-pages/demons-souls.png";

export const metadata: Metadata = {
  title: "Bluepoint Games",
  description:
    "The history and future of Bluepoint Games, a first-party developer for PlayStation Studios.",
};

function BluepointGamesPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Bluepoint Games
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Founded in 2006, this Texas-based developer is known for its excellent
        remasters and remakes.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Even before Sony acquired them in 2021, the majority of these reworks
        were PlayStation IP. For example, remastering God of War 1 and 2 for PS3
        and Uncharted 1-3 for PS4.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Their largest non-PlayStation remaster was the Metal Gear Solid HD
        Collection for PS3 and Xbox 360.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Bluepoint&#39;s most recent projects have been remakes such as
        2018&#39;s Shadow of the Colossus on the PS4 and 2020&#39;s Demon&#39;s
        Souls. A PS5 launch title that was highly praised.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Despite Demon&#39;s Souls releasing over 3 years ago, we don&#39;t
            even have the name for Bluepoint&#39;s next game. All we know is
            that it&#39;ll be &#39;original content&#39;.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Considering this is Bluepoint&#39;s first non-remaster/remake,
            it&#39;s not too surprising that development is taking longer than
            their previous games. I&#39;m also optimistic due to their excellent
            track record.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            That outlook might change if we go another year without any news
            though. 4 years is too long for Bluepoint to go without an
            announcement.
          </p>
        </div>
        <div>
          <Image
            src={demonsSouls}
            alt="Demons's Souls cover art"
            width={500}
            height={500}
            id="demons-souls"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="demons-souls" className="block text-center mb-8">
            Demon&#39;s Souls Cover Art
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Bluepoint Games")
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

export default BluepointGamesPage;
