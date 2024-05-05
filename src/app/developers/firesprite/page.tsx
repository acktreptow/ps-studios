import games from "../../data/games.json";
import Image from "next/image";
import horizonCoTM from "../../../../public/images/horizon-call-of-the-mountain.png";

function FirespritePage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Firesprite
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2012, Firesprite is a Liverpool-based developer formed by
        ex-members of first-party developer Sony Liverpool, which closed weeks
        prior.
      </p>
      <p className="mb-5 text-lg">
        Firesprite&#39;s first major game was 2018&#39;s The Persistence. It
        also came to other platforms like Xbox, as Sony wouldn&#39;t acquire the
        studio until 2021.
      </p>
      <p className="mb-8 text-lg">
        So far, they&#39;ve released two PS5 games. An enhanced port of The
        Persistence and the flagship PSVR2 launch title Horizon Call of the
        Mountain. Neither were particularly well received.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            Firesprite hasn&#39;t announced anything since Horizon CoTM shipped
            14 months ago. Unfortunately this is because of the studio&#39;s
            dire situation, post-acquisition.
          </p>
          <p className="mb-5 text-lg">
            Crunch was apparently necessary to finish Horizon. Additionally, all
            but one founder and many other staff left once retention bonuses
            were paid out.
          </p>
          <p className="mb-5 text-lg">
            Finally, further layoffs took place a year later and it was reported
            that Firesprite&#39;s unrevealed Twisted Metal live service game had
            been cancelled.
          </p>
          <p className="mb-8 text-lg">
            Considering this toxic environment, plus the fact that their games
            weren&#39;t great beforehand, I don&#39;t see anything good coming
            out of Firesprite soon. Even if early leaks of a potential horror
            game do sound promising in a vacuum.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={horizonCoTM}
            alt="Horizon Call of the MMountain gameplay screenshot"
            width={500}
            height={500}
            id="horizon-cotm"
            className="my-3 rounded-lg md:max-w-xs lg:max-w-sm md:ml-5 "
          />
          <label htmlFor="horizon-cotm" className="block text-center mb-8">
            Horizon CoTM on PSVR2
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Firesprite")
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

export default FirespritePage;
