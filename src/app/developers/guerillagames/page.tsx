import { Metadata } from "next";
import games from "../../data/games.json";
import Image from "next/image";
import burningShores from "../../../../public/images/burning-shores.png";

export const metadata: Metadata = {
  title: "Guerilla Games",
  description:
    "The history and future of Guerilla Games, a first-party developer for PlayStation Studios.",
};

function GuerillaGamesPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Guerilla Games
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Founded in 2000, this Amsterdam-based developer is primarily known for
        the FPS series &#39;Killzone&#39;, and third-person action RPG series
        &#39;Horizon&#39;.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Sony acquired Guerilla in 2005, one year after the original Killzone
        released for the PS2 - making them one of the oldest PlayStation
        developers.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        On PS5, Guerilla have only released the cross-gen title &#39;Horizon
        Forbidden West&#39;, in early 2022. Its DLC &#39;Burning Shores&#39; was
        however a PS5 exclusive.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Since the 2023 DLC, Guerilla have been silent. We don&#39;t even have a
        name for their next project.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Despite no concrete information, I predict Guerilla&#39;s next game
            is Horizon 3 for the following reasons:
          </p>
          <ul className="list-disc space-y-2 pl-5 mb-5 text-lg md:pl-7 lg:text-xl lg:tracking-wide lg:pl-10">
            <li>
              Horizon FW&#39;s ending sets up a sequel that serves as the final
              act of a trilogy.
            </li>
            <li>Netflix is working on a live action Horizon TV series.</li>
            <li>
              A remake of the first Horizon is likely being developed at Nixxes.
            </li>
            <li>
              A Horizon online MMO is almost certainly being worked on at
              NCSoft.
            </li>
            <li>A lego Horizon game has been leaked.</li>
          </ul>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Clearly, Sony are bullish on Horizon with so many projects in
            development. It would therefore be nonsensical for Guerilla to move
            on right now.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            You can expect &#39;Horizon 3&#39; in roughly 2027 that plays
            similar to the first two. It&#39;s only been two years since
            Forbidden West though, so don&#39;t expect to see anything until
            2025 at the earliest.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={burningShores}
            alt="Horizon Burning Shores key art"
            width={500}
            height={500}
            id="burning-shores"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="burning-shores" className="block text-center mb-8">
            Horizon FW&#39;s DLC: Burning Shores
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Guerrilla Games")
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

export default GuerillaGamesPage;
