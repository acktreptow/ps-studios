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
      <p className="mb-5 text-lg">
        There&#39;s 22 first-party developers under the PS Studios umbrella. The
        following list are their names and the number of{" "}
        <span className="font-bold">released</span> PS5 games:
      </p>
      <ul className="list-disc pl-5 mb-8 text-lg md:pl-7 lg:pl-10">
        {developers
          .filter(
            (developer) =>
              developer.name !== "PlayStation Logo" &&
              developer.name !== "PS5 Logo"
          )
          .map((developer) => (
            <li key={developer.id} className="mb-1">
              <span className="font-semibold">{developer.name}</span>:{" "}
              {developer.ps5Games}
            </li>
          ))}
      </ul>

      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">Other Stats</span>
          </h2>
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1">
            Game Stats:
          </h3>
          <ul className="list-disc pl-5 mb-5 text-lg md:pl-7 lg:pl-10">
            <li>Total PS5 games released: 29</li>
            <li>Total 90+ PS5 games on Metacritic: 4</li>
            <li>Total 80+ PS5 games on Metacritic: 21</li>
            <li>Games released in 2020: 6</li>
            <li>Games released in 2021: 8</li>
            <li>Games released in 2022: 6</li>
            <li>Games released in 2023: 4</li>
            <li>Games released in 2024: 5</li>
            <li>Unreleased announced PS5 games: 6</li>
          </ul>
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1">
            Studio Stats:
          </h3>
          <ul className="list-disc pl-5 mb-5 text-lg md:pl-7 lg:pl-10">
            <li>PS Studios in NA: 13</li>
            <li>PS Studios in EU: 7</li>
            <li>PS Studios in JP: 2</li>
            <li>PS Studios acquired in PS5 generation: 10</li>
            <li>PS Studios closed in PS5 generation: 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevStatsPage;
