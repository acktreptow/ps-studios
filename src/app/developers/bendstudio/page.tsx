import Image from "next/image";
import daysGone from "../../../../public/images/days-gone.png";

function BendStudioPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Bend Studio
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 1992, this Oregon-based developer is best known for
        developing the Syphon Filter series on PS1, PS2 and PSP. They&#39;ve
        also developed spin-off games from IP created at other first-party
        studios, like Uncharted: Golden Abyss (Naughty Dog) and Resistance:
        Retribution (Insomniac).
      </p>
      <p className="mb-8 text-lg">
        Bend&#39;s last game was 2019&#39;s Days Gone for the PS4. They&#39;ve
        therefore not released a native PS5 game yet. However, Days Gone did
        receive a 60fps patch that doubles the framerate of the PS4 application.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Despite Days Gone releasing 5 years ago, we still know very little about
        their next title. But due to internal leaks and some
        investigative-reporting, here&#39;s what we do know:
      </p>
      <ul className="list-disc pl-8 mb-5 text-lg">
        <li>
          Bend pitched Days Gone 2, which Sony rejected due to poor critical
          reception of Days Gone.
        </li>
        <li>
          A power struggle occurred in 2020 resulting in the writer and creative
          director leaving.
        </li>
        <li>It will be a new IP under new leadership.</li>
        <li>It will be a live service game.</li>
      </ul>
      <p className="mb-5 text-lg">
        The vast majority of Days Gone&#39;s criticisms could be attributed to
        those who lost the power struggle and left Bend. Between that and the
        fact that it&#39;s already been 5 years, I believe that regardless of
        the move to live service, Bend&#39;s next game will fare better than
        Days Gone. At least critically.
      </p>
      <p className="mb-5 text-lg">
        We should expect to see something soon as Bend have gone the longest out
        of all PS Studios without releasing a game.
      </p>
      <Image
        src={daysGone}
        alt="Days Gone"
        width={500}
        height={500}
        id="days-gone"
        className="my-3 rounded-lg"
      />
      <label htmlFor="days-gone" className="block text-center">
        Days Gone cover art
      </label>
    </div>
  );
}

export default BendStudioPage;
