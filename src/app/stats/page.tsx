import { Metadata } from "next";
import developers from "../data/developers.json";

export const metadata: Metadata = {
  title: "Stats",
  description:
    "The stats section of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

function StatsPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        PS Studios Stats
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">Overview</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Here are various stats across PS Studios over the PS5 generation.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        There&#39;s 22 first-party developers under the PS Studios umbrella. The
        following list are their names and their number of{" "}
        <span className="font-bold">released</span> games on the PS5:
      </p>
      <ul className="list-disc pl-5 mb-8 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide">
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
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide">
            Game Stats:
          </h3>
          <ul className="list-disc pl-5 mb-5 text-lg md:pl-7 lg:pl-10 leading-8 md:leading-10 lg:text-xl lg:tracking-wide lg:space-y-2">
            <li>Total PS5 games released: 29</li>
            <li>
              Game with highest Metacritic score: God of War: Ragnarök (94)
            </li>
            <li>Game with lowest Metacritic score: Firewall Ultra (61)</li>
            <li>Total 90+ PS5 games on Metacritic: 4</li>
            <li>Total 80+ PS5 games on Metacritic: 21</li>
            <li>PS5 games released in 2020: 6</li>
            <li>PS5 games released in 2021: 8</li>
            <li>PS5 games released in 2022: 6</li>
            <li>PS5 games released in 2023: 4</li>
            <li>PS5 games released in 2024 so far: 5</li>
            <li>Unreleased announced PS5 games: 6</li>
            <li>Most recent released PS5 game: Stellar Blade (April 2024)</li>
            <li>
              Next PS5 game: N/A. There&#39;s no exact dates for upcoming PS5
              titles.
            </li>
          </ul>
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide">
            Studio Stats:
          </h3>
          <ul className="list-disc pl-5 mb-5 text-lg md:pl-7 lg:pl-10 leading-8 md:leading-10 lg:text-xl lg:tracking-wide lg:space-y-2">
            <li>Studios in NA: 13</li>
            <li>Studios in EU: 7</li>
            <li className="mb-3">Studios in JP: 2</li>
            <li className="mb-1">
              Studios acquired during the PS5 generation: 10
            </li>
            <ul className="list-decimal leading-8 mb-3 pl-10 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide lg:space-y-1">
              <li>Bluepoint Games (September, 2021)</li>
              <li>Bungie (January, 2022)</li>
              <li>Fabrik Games (September, 2021)</li>
              <li>Firesprite (September, 2021)</li>
              <li>Firewalk Studios (April, 2023)</li>
              <li>Haven Studios (July, 2022)</li>
              <li>Housemarque (June, 2021)</li>
              <li>Neon Koi (August, 2022)</li>
              <li>Nixxes Software (July, 2021)</li>
              <li>Valkyrie Entertainment (December, 2021)</li>
            </ul>
            <li className="mb-1">Studios closed in PS5 generation: 3</li>
            <ul className="list-decimal leading-8 pl-10 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide lg:space-y-1">
              <li>Japan Studio (April, 2021) *</li>
              <li>Pixelopus (May, 2023)</li>
              <li>London Studio (February, 2024)</li>
            </ul>
            <p className="mb-3">
              * Team Asobi transitioned out of Japan Studio after its closure.
            </p>
            <li>Studio with most new releases: Insomniac Games (4)</li>
            <li>Studio with most remasters/remakes: Naughty Dog (3)</li>
            <li>
              Studio with the longest duration since their last release: Bend
              Studio with Days Gone (April 2019)
            </li>
            <li className="mb-3">
              Studio with most Game of the Year Awards: Naughty Dog
            </li>
            <li className="mb-1">Five studios most likely to close:</li>
            <ul className="list-decimal leading-8 mb-3 pl-10 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide lg:space-y-1">
              <li>Bend Studio</li>
              <li>Fabrik Games</li>
              <li>Firesprite</li>
              <li>Media Molecule</li>
              <li>Neon Koi</li>
            </ul>
            <li className="mb-1">Five studios least likely to close:</li>
            <ul className="list-decimal leading-8 mb-3 pl-10 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide lg:space-y-1">
              <li>Guerilla Games</li>
              <li>Insomniac Games</li>
              <li>Polyphony Digital</li>
              <li>Sony Santa Monica</li>
              <li>Sucker Punch</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
