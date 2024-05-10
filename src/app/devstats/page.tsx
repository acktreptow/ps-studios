import developers from "../../app/data/developers.json";

function DevStatsPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        PS Studios Stats
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">Overview</span>
      </h2>
      <p className="mb-5 text-lg">
        Here are some stats for PS Studios over the PS5 generation.
      </p>
      <p className="mb-8 text-lg">
        There&#39;s 22 first-party developers under the PS Studios umbrella. The
        following list are their names and the number of{" "}
        <span className="font-bold">released</span> PS5 games:
      </p>
      <ul className="list-disc pl-5 mb-5 text-lg md:pl-7 lg:pl-10">
        {developers
          .filter(
            (developer) =>
              developer.name !== "PlayStation Logo" &&
              developer.name !== "PS5 Logo"
          )
          .map((developer) => (
            <li key={developer.id} className="mb-1">
              {developer.name}: {developer.ps5Games}
            </li>
          ))}
      </ul>

      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">Other Stats</span>
          </h2>
          <p className="mb-5 text-lg">
            Despite Days Gone releasing 5 years ago, we still know very little
            about their next title. But due to internal leaks and some
            investigative-reporting, here&#39;s what we do know:
          </p>
          <ul className="list-disc pl-5 mb-5 text-lg md:pl-7 lg:pl-10">
            <li>
              Bend pitched Days Gone 2, which Sony rejected due to poor critical
              reception of Days Gone.
            </li>
            <li>
              A power struggle occurred in 2020 resulting in the writer and
              creative director leaving.
            </li>
            <li>It will be a new IP under new leadership.</li>
            <li>It will be a live service game.</li>
          </ul>
          <p className="mb-5 text-lg">
            The vast majority of Days Gone&#39;s criticisms could be attributed
            to those who lost the power struggle and left Bend. Between that and
            the fact that it&#39;s already been 5 years, I believe that
            regardless of the move to live service, Bend&#39;s next game will
            fare better than Days Gone. At least critically.
          </p>
          <p className="mb-8 text-lg">
            We should expect to see something soon as Bend have gone the longest
            out of all PS Studios without releasing a game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevStatsPage;
