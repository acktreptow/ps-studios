import games from "../../data/games.json";
import Image from "next/image";
import astroBot from "../../../../public/images/astro-bot.png";

function TeamAsobiPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Team Asobi
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Team Asobi is a Tokyo-based developer that technically, was formed in
        2021. Asobi originally formed in 2012 as part of Japan Studio, but
        became independent when Japan Studio closed in 2020.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        They&#39;re known for smaller-scoped games that focus on new PlayStation
        hardware. For example, The PlayRoom to show off the DualShock 4 and
        Astro Bot Rescue Mission for PSVR.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Their most recent game is Astro&#39;s Playroom. A free PS5 launch title
        that comes pre-installed. Its gameplay was developed in a way to show
        off the PS5&#39;s new features like haptic feedback.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Despite Astro&#39;s Playroom releasing over three years ago, we
            still haven&#39;t officially heard anything about Asobi&#39;s next
            game.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Unofficially, there are rumors that it will release shortly after
            announcement, at the end of 2024. It&#39;ll also be larger in scale,
            and playable on TVs and PSVR2.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Astro&#39;s Playroom was an incredible game that even after hundreds
            of PS5 games later, still has made the best use of the DualSense.
            It&#39;s also the reason Asobi survived the closure of Japan Studio.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            With this next game also having double the development time,
            there&#39;s every reason to believe it will be a great game that
            diversifies Sony&#39;s portfolio.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            It hopefully also showcases PSVR2 well, because that VR headset
            desperately needs a win.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={astroBot}
            alt="Team Asobi with their mascot Astro Bot"
            width={500}
            height={500}
            id="astro-bot"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="astro-bot" className="block text-center mb-8">
            Team Asobi with mascot Astro Bot
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Team Asobi")
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

export default TeamAsobiPage;
