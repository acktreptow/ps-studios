import games from "../../data/games.json";
import Image from "next/image";
import mlb24 from "../../../../public/images/mlb-24.png";

function SanDiegoStudioPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        San Diego Studio
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2001, San Diego Studio is (obviously) a San Diego-based
        first-party developer that is responsible for the MLB: The Show series.
      </p>
      <p className="mb-5 text-lg">
        This annual baseball series is the only series they work on. So
        naturally, there's been 4 baseball games for the PS5 that have all come
        out around late-March/early-April over the past 4 years.
      </p>
      <p className="mb-8 text-lg">
        This generation has been different though. As despite being a Sony
        first-party developer, the MLB have forced PlayStation to develop an
        Xbox and Nintendo port since MLB 21 or they would lost the license.
        Clearly, turning the series platform was the better alternative to
        losing the license as the series has continued.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        This ones easy to predict. San Diego Studio haven't developed a non-MLB
        game for close to a decade. And with rising development costs couple
        with tighter profits for PlayStation, it's unlikely they would be
        allowed to experiment with something new, and that's assuming they even
        want to.
      </p>
      <p className="mb-5 text-lg">
        We're also 4 games deep into this series being multiplatform and nothing
        materially has changed. With there being an Xbox and Switch version,
        that was the one change that could have changed the series but didn't.
        It's therefore safe to assume San Diego will continue with a yearly
        multiplatform MLB game for the foreseeable future.
      </p>
      <Image
        src={mlb24}
        alt="MLB The Show 24 promotional material"
        width={500}
        height={500}
        id="mlb-24"
        className="my-3 rounded-lg"
      />
      <label htmlFor="mlb-24" className="block text-center mb-8">
        MLB The Show 24 promotional material
      </label>
    </div>
  );
}

export default SanDiegoStudioPage;
