import games from "../../data/games.json";
import Image from "next/image";
import mlb24 from "../../../../public/images/mlb-24.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Diego Studio",
  description:
    "The history and future of San Diego Studio, a first-party developer for PlayStation Studios.",
};

function SanDiegoStudioPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        San Diego Studio
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Founded in 2001, San Diego Studio is (obviously) a San Diego-based
        first-party developer that is responsible for the MLB: The Show series.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        This annual baseball series is the only IP they work on. So naturally,
        there&#39;s been four MLB games for the PS5 that have come out in
        March/April since 2021.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        This generation has been different in one aspect though. Despite being a
        Sony first-party developer, the MLB have forced PlayStation to develop
        an Xbox and Nintendo port since MLB 21, or they would lose the license.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Clearly, turning the series multiplatform was the better alternative to
        losing the license as the series has continued.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            This ones easy to predict. SD Studio haven&#39;t developed a non-MLB
            game for close to a decade. And with rising development costs
            coupled with tighter profits for PlayStation, it&#39;s unlikely they
            would be allowed to experiment with something new, even if they want
            to.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            We&#39;re also four games deep into the series being multiplatform
            and nothing has materially changed. That was the one change that
            could have altered SD Studio&#39;s trajectory, but didn&#39;t.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            It&#39;s therefore safe to assume they&#39;ll continue with MLB: The
            Show for the foreseeable future.
          </p>
        </div>
        <div>
          <Image
            src={mlb24}
            alt="MLB The Show 24 promotional material"
            width={500}
            height={500}
            id="mlb-24"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="mlb-24" className="block text-center mb-8">
            The Show 24 promotional material
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "San Diego Studio")
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

export default SanDiegoStudioPage;
