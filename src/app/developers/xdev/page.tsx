import games from "../../data/games.json";
import Image from "next/image";
import ds2OTB from "../../../../public/images/ds2.png";

function Xdevpage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        XDev
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Formed in 2000, XDev have a unique role in PS Studios. They don&#39;t
        develop games themselves, but instead collaborate with external studios
        to fund development of exclusive games for PlayStation.
      </p>
      <p className="mb-5 text-lg">
        Due to XDev just funding the games, it means they can work with many
        different developers simultaneously to produce an eclectic selection.
      </p>
      <p className="mb-8 text-lg">
        On PS5 alone, they&#39;ve already produced over ten games, with three
        released this year! The live service game Helldivers 2, the soulsborne
        Rise of the Ronin, and the action-adventure Stellar Blade.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis and Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            XDev have two games publicly in development. A remake of 2015&#39;s
            Until Dawn by Ballistic Moon and Death Stranding 2 by Kojima
            Productions.
          </p>
          <p className="mb-5 text-lg">
            Analytically, XDev&#39;s collaborations have been inconsistent this
            gen, with 2022&#39;s VR FPS Firewall Ultra being the biggest
            disappointment.
          </p>
          <p className="mb-5 text-lg">
            However, all three of XDev&#39;s 2024 games have been successful. In
            particular, Helldivers 2 far exceeded anyone&#39;s expectations and
            easily stands amongst PS Studios&#39;s best games.
          </p>
          <p className="mb-8 text-lg">
            Between this recent track record, Until Dawn being a remake, and DS2
            being a sequel of a critically acclaimed game, I predict both games
            will be well received and strengthen XDev&#39;s ascent as the PS5
            gen continues.
          </p>
        </div>
        <div>
          <Image
            src={ds2OTB}
            alt="Death Standing 2 On The Beach cutscene"
            width={500}
            height={500}
            id="d2s-otb"
            className="my-3 rounded-lg md:mx-auto md:max-w-xs lg:max-w-sm md:ml-5"
          />
          <label htmlFor="d2s-otb" className="block text-center mb-8">
            XDev&#39;s upcoming Death Stranding 2
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "XDev")
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

export default Xdevpage;
