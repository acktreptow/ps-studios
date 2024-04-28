import games from "../../data/games.json";
import Image from "next/image";
import burningShores from "../../../../public/images/burning-shores.png";

function GuerillaGamesPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Guerilla Games
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2000, this Amsterdam-based developer is primarily known for
        the FPS series &#39;Killzone&#39;, and third-person action-adventure
        series &#39;Horizon&#39;.
      </p>
      <p className="mb-5 text-lg">
        Sony acquired Guerilla in 2005, one year after the original Killzone
        released for the PS2. Making them one of the oldest PlayStation
        developers.
      </p>
      <p className="mb-5 text-lg">
        On PS5, Guerilla have only released the cross-gen title &#39;Horizon
        Forbidden West&#39;, in early 2022. Its DLC &#39;Burning Shores&#39; was
        however a PS5 exclusive.
      </p>
      <p className="mb-8 text-lg">
        Since the 2023 DLC, Guerilla have been silent. We don&#39;t even have a
        name for their next project.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Despite no concrete information, I predict Guerilla&#39;s next game is
        Horizon 3 for the following reasons:
      </p>
      <ul className="list-disc pl-5 mb-5 text-lg">
        <li>
          Horizon FW&#39;s ending sets up a sequel that serves as the final act
          of a trilogy.
        </li>
        <li>Netflix is working on a live action Horizon TV series.</li>
        <li>
          A remake of the first Horizon is likely being developed at Nixxes.
        </li>
        <li>
          A Horizon online MMO is almost certainly being worked on at NCSoft.
        </li>
      </ul>
      <p className="mb-5 text-lg">
        Clearly, Sony are bullish on Horizon with so many projects in
        development. It would therefore be nonsensical for Guerilla to move on
        right now.
      </p>
      <p className="mb-8 text-lg">
        You can expect &#39;Horizon 3&#39; in roughly 2027 that plays similar to
        the first two. It&#39;s only been two years since Forbidden West though,
        so don&#39;t expect to see anything until 2025 at the earliest.
      </p>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5">
        {games
          .filter((game) => game.developer === "Guerrilla Games")
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
        src={burningShores}
        alt="Horizon Burning Shores key art"
        width={500}
        height={500}
        id="burning-shores"
        className="my-3 rounded-lg"
      />
      <label htmlFor="burning-shores" className="block text-center">
        Key art for Horizon FW&#39;s DLC: Burning Shores
      </label>
    </div>
  );
}

export default GuerillaGamesPage;
