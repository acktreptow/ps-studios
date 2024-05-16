import { Metadata } from "next";
import games from "../../data/games.json";
import Image from "next/image";
import seleneVassos from "../../../../public/images/selene-vassos.png";

export const metadata: Metadata = {
  title: "Housemarque",
  description:
    "The history and future of Housemarque, a first-party developer for PlayStation Studios.",
};

function HousemarquePage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Housemarque
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Founded in 1995, this Finnish-based developer has released a myriad of
        games on PlayStation consoles including Super Stardust and Resogun.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Housemarque most recently released 2021&#39;s Returnal for the PS5. It
        kept the roguelike elements seen in previous games, but moved to a
        third-person perspective with more focus on story.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        This helped Returnal have a more mainstream appeal and thus became
        Housemarque&#39;s best selling game.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Clearly, Sony were happy with this pivot as they purchased Housemarque
        two months after Returnal released.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Returnal is Housemarque&#39;s only PS5 title. Yet despite releasing
            three years ago, we know nothing about the next game. Nonetheless,
            Returnal&#39;s quality is the reason to still be excited.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            With Returnal, Housemarque proved they could take the elements that
            made their older, smaller-scoped games critically acclaimed, and
            repackage them into a more mainstream title.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            With this experience under their belt, plus the backing of Sony as
            an official first-party developer, their next game should fare even
            better. It has been 3 years though, so we should (hopefully) hear
            about it soon.
          </p>
        </div>
        <div>
          <Image
            src={seleneVassos}
            alt="Returnal's Selene Vassos"
            width={500}
            height={500}
            id="selene-vassos"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="selene-vassos" className="block text-center mb-8">
            Returnal&#39;s main character, Selene Vassos
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Housemarque")
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

export default HousemarquePage;
