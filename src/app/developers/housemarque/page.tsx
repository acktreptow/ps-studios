import games from "../../data/games.json";
import Image from "next/image";
import seleneVassos from "../../../../public/images/selene-vassos.png";

function HousemarquePage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Housemarque
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 1995, this Finnish-based developer has released over 10
        different IP on PlayStation consoles since 2007. This includes Super
        Stardust, Resogun, and Matterfall.
      </p>
      <p className="mb-5 text-lg">
        Their most recent game is 2021's Returnal for the PS5, which took many
        of the rouge-like elements seen in their previous titles, but were able
        to now reach more mainstream demographic with a change to a third-person
        shooter and more emphasis on a high-production value story.
      </p>
      <p className="mb-8 text-lg">
        Clearly Sony were happy with the outcome as they purchased Housemarque
        within 2 month's of Returnal's release.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Returnal is the only game Housemarque have released on the PS5, and
        despite it releasing over 3 years ago, we don't even have a title for
        their next game.
      </p>
      <p className="mb-5 text-lg">
        Nonetheless, there's every reason to be excited about whatever it is.
        Housemarque proved they could put their difficult rouge-like bona fides
        into a more mainstream package with Returnal. Now with this new
        experience under their belt, plus the backing of Sony as an official
        first-party developer, their next game should improve on this new
        formula. It has been 3 years though, so we should (hopefully) hear about
        it soon.
      </p>
      <Image
        src={seleneVassos}
        alt="Returnal's Selene Vassos"
        width={500}
        height={500}
        id="selen-vassos"
        className="my-3 rounded-lg"
      />
      <label htmlFor="selen-vassos" className="block text-center">
        Returnal&#39;s main character, Selene Vassos
      </label>
    </div>
  );
}

export default HousemarquePage;
