import games from "../../data/games.json";
import Image from "next/image";
import horizonCoTM from "../../../../public/images/horizon-call-of-the-mountain.png";

function FirespritePage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Firesprite
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2012, Firesprite is a UK-based developer that has worked on a
        variety of games across multiple genres. They've developed games for
        PlayStation, Xbox, PC and mobile platforms.
      </p>
      <p className="mb-8 text-lg">
        The developers of Horizon: Call of the Mountain
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Firesprite is a relatively unknown studio, but they've worked on some
        high-profile games. They've also worked on some VR titles, which could
        be a sign of what's to come.
      </p>
      <Image
        src={horizonCoTM}
        alt="Horizon Call of the MMountain gameplay screenshot"
        width={500}
        height={500}
        id="horizon-cotm"
        className="my-3 rounded-lg"
      />
      <label htmlFor="horizon-cotm" className="block text-center">
        Horizon CoTM&#39;s excellent graphics
      </label>
    </div>
  );
}

export default FirespritePage;
