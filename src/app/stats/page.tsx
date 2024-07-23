import { Metadata } from "next";
import developersData from "../data/developers.json";
import { Developer } from "../types/Developer";
import Container from "../components/Container";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";
import StatsList from "../components/StatsList";

export const metadata: Metadata = {
  title: "Stats",
  description:
    "The stats section of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

const developers: Developer[] = developersData;

function StatsPage(): JSX.Element {
  return (
    <Container>
      <Title title="PS Studios Stats" />
      <SubTitle subtitle="Overview" />
      <Paragraph>
        Here are various stats across PS Studios over the PS5 generation.
      </Paragraph>
      <Paragraph>
        There&#39;s 22 first-party developers under the PS Studios umbrella. The
        following list are their names and their number of{" "}
        <span className="font-bold">released</span> games on the PS5:
      </Paragraph>
      <ul className="list-disc pl-5 mb-8 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide">
        {developers
          .filter(
            (developer: Developer) =>
              developer.name !== "PlayStation Logo" &&
              developer.name !== "PS5 Logo"
          )
          .map((developer: Developer) => (
            <li key={developer.id} className="mb-1">
              <span className="font-semibold">{developer.name}</span>:{" "}
              {developer.ps5Games}
            </li>
          ))}
      </ul>

      <div className="lg:flex items-center">
        <div>
          <SubTitle subtitle="Other Stats" marginBottom={5} />
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide">
            Game Stats:
          </h3>
          <StatsList isNumbered={false}>
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
            <li>PS5 games that are remasters/remakes: 10</li>
            <li>PS5 games that are on Xbox: 6</li>
            <li>PS5 games that are on Nintendo Switch: 4</li>
            <li>PS5 games that are on PC: 15</li>
            <li>PS5 games that originated on PS3: 2</li>
            <li>PS5 games that originated on PS4: 8</li>
            <li>PSVR2 games: 2</li>
            <li>PS5 games from JP studios: 3</li>
            <li>PS5 games from EU studios: 4</li>
            <li>PS5 games from NA studios: 29</li>
            <li>PS5 games from JP studios (only released): 2</li>
            <li>PS5 games from EU studios (only released): 4</li>
            <li>PS5 games from NA studios (only released): 23</li>
            <li>
              PS5 games that have a VR mode: 4 (The Persistence is only PSVR1)
            </li>
            <li>Unreleased announced PS5 games: 7</li>
            <li>Most recent released PS5 game: Stellar Blade (April 2024)</li>
            <li>Next PS5 game: Concord from Firewalk - August 23, 2024</li>
            <li>XDev released PS5 games: 8</li>
            <li>XDev released PS5 games: 2</li>
          </StatsList>
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide">
            Studio Stats:
          </h3>
          <StatsList isNumbered={false}>
            <li>Studios in NA: 13</li>
            <li>Studios in EU: 7</li>
            <li>Studios in JP: 2</li>
            <li>Oldest studio: Naughty Dog (founded 1984)</li>
            <li>Newest studio: Haven Studios (founded 2021)</li>
            <li className="mb-3">First acquired studio: Bend Studio (2000)</li>
            <li className="mb-1">Studios created internally: 6</li>
            <StatsList isNumbered={true}>
              <li>Polyphony (1998)</li>
              <li>San Diego Studio (2001)</li>
              <li>San Mateo Studio (1998)</li>
              <li>Santa Monica Studio (1999)</li>
              <li>Team Asobi (2021)</li>
              <li>XDev (2000)</li>
            </StatsList>
            <li className="mb-1">
              Studios acquired during the PS5 generation: 10
            </li>
            <StatsList isNumbered={true}>
              <li>Housemarque (June, 2021)</li>
              <li>Nixxes Software (July, 2021)</li>
              <li>Bluepoint Games (September, 2021)</li>
              <li>Fabrik Games (September, 2021)</li>
              <li>Firesprite (September, 2021)</li>
              <li>Valkyrie Entertainment (December, 2021)</li>
              <li>Bungie (January, 2022)</li>
              <li>Haven Studios (July, 2022)</li>
              <li>Neon Koi (August, 2022)</li>
              <li>Firewalk Studios (April, 2023)</li>
            </StatsList>
            <li className="mb-1">Studios closed in PS5 generation: 3</li>
            <StatsList isNumbered={true}>
              <li>Japan Studio (April, 2021) *</li>
              <li>Pixelopus (May, 2023)</li>
              <li>London Studio (February, 2024)</li>
            </StatsList>
            <p className="mb-3">
              * Team Asobi transitioned out of Japan Studio after its closure.
            </p>
            <li className="mb-1">Support studios: 4</li>
            <StatsList isNumbered={true}>
              <li>Fabrik Games</li>
              <li>Nixxes Software</li>
              <li>San Mateo Studio</li>
              <li>Valkyrie Entertainment</li>
            </StatsList>
            <li>Studio with most new releases: Insomniac Games (4)</li>
            <li>Studio with most remasters/remakes: Naughty Dog (3)</li>
            <li>
              Studio with the longest duration since their last release: Bend
              Studio with Days Gone (April 2019)
            </li>
            <li>
              Studio with the shortest duration since their last release:
              Insomniac Games with Spider-Man 2 (October 2023)
            </li>
            <li>
              Most recent PlayStation Studios game (including second-party):
              XDev with Shift Up&#39;s Stellar Blade (April 2024)
            </li>
            <li>Studio with most Game of the Year Awards: Naughty Dog</li>
            <li>
              Studio with highest average Metacritic score: Sony Santa Monica
              (94)
            </li>
            <li>
              Studio with highest average Metacritic score (more than 1 game):
              Insomniac Games (87.5)
            </li>
            <li className="mb-3">
              Studio with highest average Metacritic score (no
              remasters/remakes): Insomniac Games (87.67)
            </li>
            <li className="mb-1">Five studios most likely to close:</li>
            <StatsList isNumbered={true}>
              <li>Bend Studio</li>
              <li>Firewalk Studios</li>
              <li>Firesprite/Fabrik Games</li>
              <li>Media Molecule</li>
              <li>Neon Koi</li>
            </StatsList>
            <li className="mb-1">Five studios least likely to close:</li>
            <StatsList isNumbered={true}>
              <li>Guerrilla Games</li>
              <li>Insomniac Games</li>
              <li>Polyphony Digital</li>
              <li>Sony Santa Monica</li>
              <li>Sucker Punch</li>
            </StatsList>
          </StatsList>
        </div>
      </div>
    </Container>
  );
}

export default StatsPage;
