import { Metadata } from "next";
import gamesData from "../../data/games.json";
import Image from "next/image";
import ds2OTB from "../../../../public/images/dev-pages/ds2.png";

export const metadata: Metadata = {
  title: "XDev",
  description:
    "The history and future of XDev, a first-party developer for PlayStation Studios.",
};

type Game = {
  developer: string;
  name: string;
  id: string;
  genre: string;
  releaseDate: string;
  daysBetweenReleases: number | string;
  metacritic: number | string;
};

const games: Game[] = gamesData;

function XDevpage(): JSX.Element {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        XDev
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Formed in 2000, XDev have a unique role in PS Studios. They don&#39;t
        develop games themselves, but instead collaborate with external studios
        to fund development of exclusive games for PlayStation.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Due to XDev just funding the games, it means they can work with many
        different developers simultaneously to produce an eclectic selection.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        On PS5 alone, they&#39;ve already produced over 7 games, with 3 released
        this year! The live service shooter &#39;Helldivers 2&#39;, the
        soulsborne &#39;Rise of the Ronin&#39;, and the action-adventure
        &#39;Stellar Blade&#39;.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            XDev have two games publicly in development. A remake of 2015&#39;s
            Until Dawn by Ballistic Moon and Death Stranding 2 by Kojima
            Productions.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Analytically, XDev&#39;s collaborations have been inconsistent this
            gen, with 2022&#39;s VR FPS &#39;Firewall Ultra&#39; being the
            biggest disappointment. It&#39;s actually the lowest rated PS5 game
            by all of PS Studios.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            However, all three of XDev&#39;s 2024 games have been successful.
            Helldivers 2 in particular far exceeded anyone&#39;s expectations
            and easily stands amongst PS Studios&#39;s best games.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            Between this recent track record, Until Dawn being a remake, and DS2
            being a sequel of a critically acclaimed game, I predict both games
            will be well received and strengthen XDev&#39;s ascent as the PS5
            gen continues.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={ds2OTB}
            alt="Death Standing 2 On The Beach cutscene"
            width={500}
            height={500}
            id="d2s-otb"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="d2s-otb" className="block text-center mb-8">
            XDev&#39;s Upcoming Death Stranding 2
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game: Game) => game.developer === "XDev")
          .map((game: Game) => (
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

export default XDevpage;
