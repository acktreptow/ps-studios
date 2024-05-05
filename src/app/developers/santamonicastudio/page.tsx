import games from "../../data/games.json";
import Image from "next/image";
import gowRagnarok from "../../../../public/images/gow-ragnarok.png";

function SantaMonicaStudioPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Santa Monica Studio
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Santa Monica Studio is an LA-based developer founded in 1999. Outside of
        its first game, 2001&#39;s Kinetica, the studio has exclusively
        developed games for its very successful God of War series.
      </p>
      <p className="mb-8 text-lg">
        SM&#39;s most recent game was 2022&#39;s God of War Ragnarök - a
        cross-gen title and the only game they&#39;ve released on the PS5. Like
        the 2018 semi-reboot, it was a big critical and commercial success.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            As of now, we don&#39;t know what SM&#39;s next game is other than
            it being in third-person. There&#39;s rumours that predict a new IP,
            a sequel to Ragnarök, and a smaller-scoped GoW game in the vein of
            Spider-Man Miles-Morales.
          </p>
          <p className="mb-5 text-lg">
            Regardless of what it is, there&#39;s no reason to think it
            won&#39;t be great. To many, SM&#39;s last two games were so
            critically acclaimed that they usurped Naughty Dog as Sony&#39;s
            premier studio.
          </p>
          <p className="mb-8 text-lg">
            Ragnarök did only ship 1.5 years ago though, so don&#39;t expect to
            hear anything soon. There&#39;s A LOT of PS studios that need to
            talk before SM, as they&#39;re going on 4-5 years without a shipped
            game.
          </p>
        </div>
        <div>
          <Image
            src={gowRagnarok}
            alt="God of War Ragnarok awards won"
            width={500}
            height={500}
            id="gow-ragnarok"
            className="my-3 rounded-lg md:mx-auto md:max-w-xs lg:max-w-sm md:ml-5"
          />
          <label htmlFor="gow-ragnarok" className="block text-center mb-8">
            The 6 awards God of War Ragnarök won at The Game Awards 2022
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Santa Monica Studio")
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

export default SantaMonicaStudioPage;
