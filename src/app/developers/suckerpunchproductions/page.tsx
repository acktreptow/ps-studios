import games from "../../data/games.json";
import Image from "next/image";
import gotDC from "../../../../public/images/got-dc.png";

function SuckerPunchProductionsPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Sucker Punch Productions
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Sucker Punch are a Washington-based developer that was founded in 1997,
        initially to work on an N64 game called Rocket: Robot on Wheels.
      </p>
      <p className="mb-5 text-lg">
        Sony were impressed, so they funded SP&#39;s Sly Cooper trilogy for the
        PS2 and again with inFamous 1/2 on PS3. After five great games under
        this partnership, Sony acquired the studio in 2011.
      </p>
      <p className="mb-5 text-lg">
        SP have since moved on from inFamous to Ghost of Tsushima. A
        third-person samurai action-adventure that easily became the
        studio&#39;s best selling game.
      </p>
      <p className="mb-8 text-lg">
        GoT initially released for the PS4, however a PS5 Director&#39;s Cut
        that added more content was shipped in 2021. This is currently SP&#39;s
        only PS5 game.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        It&#39;s been nearly four years since SP achieved new highs, both
        commercially and critically, with GoT. It&#39;s therefore not surprising
        that a proper sequel is heavily rumoured to be their next game.
      </p>
      <p className="mb-8 text-lg">
        Considering this, I predict that not only is GoT 2 the next game any PS
        developer announces, but it will also release very shortly after. To new
        highs for Sucker Punch, critically and commercially.
      </p>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5">
        {games
          .filter((game) => game.developer === "Sucker Punch Productions")
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
        src={gotDC}
        alt="Ghost of Tsushima Director's Cut main menu screen"
        width={500}
        height={500}
        id="got-dc"
        className="my-3 rounded-lg"
      />
      <label htmlFor="got-dc" className="block text-center">
        GoT: Director&#39;s Cut main menu screen
      </label>
    </div>
  );
}

export default SuckerPunchProductionsPage;
