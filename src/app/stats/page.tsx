import { Metadata } from "next";
import developersData from "../data/developers.json";
import { Developer } from "../types/Developer";
import Container from "../components/Container";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";
import StatsList from "../components/StatsList";
import Link from "next/link";

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
      <div className="flex flex-col items-center align-middle md:flex-row lg:text-lg">
        <button className="border p-4 mb-5 font-semibold md:mb-8 md:mr-3 lg:mr-6 bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full  hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation">
          <Link href="#gamestats">PS5 Game Stats</Link>
        </button>
        <button className="border p-4 mb-5 font-semibold md:mb-8 md:mr-3 lg:mr-6 bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full  hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation">
          <Link href="#studiostats">PS Studios Stats</Link>
        </button>
        <button className="border p-4 mb-8 font-semibold bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation">
          <Link href="#psplusstats">PS+ Premium Stats</Link>
        </button>
      </div>
      <SubTitle subtitle="Overview" />
      <Paragraph>
        Here are a variety of stats across PS Studios and their
        released/upcoming games over the PS5 generation.
      </Paragraph>
      <Paragraph>
        There&#39;s 22 (announced) first-party developers under the PS Studios
        umbrella. The following list are their names and their number of
        <span className="font-bold">released</span> games on PS5:
      </Paragraph>
      <ul className="list-disc pl-5 mb-8 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide">
        {developers
          .filter((developer: Developer) => developer.hasClosed === false)
          .map((developer: Developer) => (
            <li key={developer.id} className="mb-1">
              <span className="font-semibold">{developer.name}</span>:{" "}
              {developer.ps5Games}
            </li>
          ))}
      </ul>
      <h3
        className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide"
        id="gamestats"
      >
        Closed Developers:
      </h3>
      <ul className="list-disc pl-5 mb-8 text-lg md:pl-7 lg:pl-10 lg:text-xl lg:tracking-wide">
        {developers
          .filter((developer: Developer) => developer.hasClosed === true)
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
          <h3
            className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide"
            id="gamestats"
          >
            Game Stats:
          </h3>
          <StatsList isNumbered={false}>
            <li>Total PS5 games released: 30</li>
            <li>
              Game with highest Metacritic score: God of War: Ragnarök (Sony
              Santa Monica) & Astro Bot (Team Asobi) - 94
            </li>
            <li>Game with lowest Metacritic score: Concord (Firewalk) - 62</li>
            <li>
              Game with highest Metacritic score (second-party): The Nioh
              Collection (Team Ninja) - 87
            </li>
            <li>
              Game with lowest Metacritic score (second-party): Firewall Ultra
              (First Contact) - 62
            </li>
            <li>Total 90+ PS5 games on Metacritic: 5</li>
            <li>Total 80+ PS5 games on Metacritic: 21</li>
            <li>Total 70-79 PS5 games on Metacritic:6</li>
            <li>Total 70- PS5 games on Metacritic: 3</li>
            <li>Total 60- PS5 games on Metacritic: 0</li>
            <li>PS5 games released in 2020: 6</li>
            <li>PS5 games released in 2021: 8</li>
            <li>PS5 games released in 2022: 6</li>
            <li>PS5 games released in 2023: 4</li>
            <li>PS5 games released in 2024 so far: 7</li>
            <li>PS5 games that are remasters/remakes: 10</li>
            <li>PS5 games that are on Xbox: 6</li>
            <li>PS5 games that are on Nintendo Switch: 4</li>
            <li>PS5 games that are on PC: 16</li>
            <li>PS5 games that originated on PS3: 2</li>
            <li>PS5 games that originated on PS4: 8</li>
            <li>PSVR2 games: 2</li>
            <li>PS5 games from JP studios: 4</li>
            <li>PS5 games from EU studios: 4</li>
            <li>PS5 games from NA studios: 30</li>
            <li>PS5 games from JP studios (only released): 3</li>
            <li>PS5 games from EU studios (only released): 4</li>
            <li>PS5 games from NA studios (only released): 23</li>
            <li>Unreleased announced PS5 games: 6</li>
            <li>Most recent released PS5 game: Astro Bot (September 2024)</li>
            <li>Next PS5 game: Lego Horizon Adventures - Date currently N/A</li>
            <li>XDev released PS5 games: 8</li>
          </StatsList>
          <h3
            className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide"
            id="studiostats"
          >
            Studio Stats:
          </h3>
          <StatsList isNumbered={false}>
            <li>Studios in NA: 13</li>
            <li>Studios in EU: 7</li>
            <li>Studios in JP: 2</li>
            <li>Oldest studio: Naughty Dog (founded 1984)</li>
            <li>Newest studio: Haven Studios (founded 2021)</li>
            <li>First acquired studio: Bend Studio (2000)</li>
            <li className="mb-3">
              Last acquired studio: Firewalk Studios (2023)
            </li>
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
              <li>Bungie v2 (TBA)</li>
            </StatsList>
            <li className="m-1">Studios closed in PS5 generation: 3</li>
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
            <li>Number of studios with 0 PS5 games: 8</li>
            <li>
              Studio with the longest duration since their last release: Bend
              Studio with Days Gone (April 2019)
            </li>
            <li>
              Studio with the shortest duration since their last release: Team
              Asobi with Astro Bot (September 2024)
            </li>
            <li>Largest studio by headcount: Bungie (850+)</li>
            <li>Smallest studio by headcount: Neon Koi most likely (50-)</li>
            <li>
              Most recent PlayStation Studios game: Team Asobi with Astro Bot
              (September 2024) (prev Firewalk Studios with Concord) (August
              2024)
            </li>
            <li>
              Most recent second-party game: Shift Up with Stellar Blade (April
              2024) (prev Team Ninja with Rise of the Ronin) (March 2024)
            </li>
            <li>Studio with most Game of the Year Awards: Naughty Dog</li>
            <li>
              Studio with highest average Metacritic score: Sony Santa Monica &
              Team Asobi (94)
            </li>
            <li>
              Studio with highest average Metacritic score (more than 1 game):
              Team Asobi (88.5)
            </li>
            <li>
              Studio with highest average Metacritic score (no
              remasters/remakes): Team Asobi (88.5)
            </li>
            <li className="mb-3">
              Studio with lowest average Metacritic score (no
              remasters/remakes): Firewalk Studios (62)
            </li>
            <li className="mb-1">
              Five studios most likely to close (no particular order):
            </li>
            <StatsList isNumbered={true}>
              <li>Firewalk Studios</li>
              <li>Bend Studio</li>
              <li>Firesprite/Fabrik Games</li>
              <li>Media Molecule</li>
              <li>Neon Koi</li>
            </StatsList>
            <li className="mb-1">
              Five studios least likely to close (no particular order):
            </li>
            <StatsList isNumbered={true}>
              <li>Guerrilla Games</li>
              <li>Insomniac Games</li>
              <li>Polyphony Digital</li>
              <li>Sony Santa Monica</li>
              <li>Sucker Punch</li>
            </StatsList>
            <li className="mb-1">Studios waiting to be announced:</li>
            <StatsList isNumbered={true}>
              <li>
                The Southern California team who is working on the next
                Uncharted.
              </li>
              <li>
                Jason Blundell&#39;s team (COD Zombies creator, ex-Deviation).
              </li>
              <li>
                The team of ex-Bungie employees who were spun out of the
                developer to create a new studio.
              </li>
            </StatsList>
            <li className="mb-1">Studios most likely to be acquired:</li>
            <StatsList isNumbered={true}>
              <li>Arrowhead Game Studios (Helldivers 2 developer)</li>
              <li>SHIFT UP (Stellar Blade developer)</li>
              <li>Ballistic Moon (Until Dawn Remake developer)</li>
              <li>Ember Lab (Kena: Bridge of Spirits developer)</li>
              <li>Ironwood Studios (Pacific Drive developer)</li>
            </StatsList>
            <li>
              Publisher most likely to be acquire: Square Enix (still very
              unlikely).
            </li>
          </StatsList>
          <span id="psplusstats">
            <SubTitle subtitle="PS+ Premium Stats" marginBottom={5} />
          </span>
          <Paragraph>
            Many PS1/2/3/PSP games from PS Studios now have a PS5 port that are
            included with a PS+ Premium subscription or bought a la carte.
            Although it makes no sense to include them in other pages due to
            their retro nature, there&#39;s still some interesting facts, so
            here they are!
          </Paragraph>
          <h3
            className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide"
            id="studiostats"
          >
            Defunct PS Studios Games:
          </h3>
          <StatsList isNumbered={false}>
            <li>Bigbig Studios:</li>
            <StatsList isNumbered={true}>
              <li>Pursuit Force (PSP)</li>
              <li>Pursuit Force: Extreme Justice (PSP)</li>
            </StatsList>
            <li>SCE Studio Cambridge</li>
            <StatsList isNumbered={true}>
              <li>Ghosthunter (PS2)</li>
              <li>MediEvil (PS1)</li>
              <li>MediEvil: Resurrection (PSP)</li>
            </StatsList>
            <li>Sony Interactive Studios America</li>
            <StatsList isNumbered={true}>
              <li>2Xtreme (PS1)</li>
              <li>Cool Boarders (PS1)</li>
              <li>Jet Moto (PS1)</li>
              <li>Jet Moto 2 (PS1)</li>
              <li>Key of Heaven (PSP)</li>
              <li>Rally Cross (PS1)</li>
              <li>Twisted Metal (PS1)</li>
              <li>Twisted Metal World Tour (PS1)</li>
            </StatsList>
            <li>Japan Studio</li>
            <StatsList isNumbered={true}>
              <li>Ape Escape (PS1)</li>
              <li>Ape Escape Academy (PSP)</li>
              <li>Ape Escape Academy 2 (PSP)</li>
              <li>Ape Escape: On the Loose (PSP)</li>
              <li>Blade Dancer: Lineage of Light (PSP)</li>
              <li>Echochrome (PSP)</li>
              <li>Echoshift (PSP)</li>
              <li>Everybody&#39;s Golf (PS1)</li>
              <li>Everybody&#39;s Golf 2 (PS1)</li>
              <li>Intelligent Qube (PS1)</li>
              <li>Intelligent Qube: Final (PS1)</li>
              <li>Jeanne d&#39;Arc (PSP)</li>
              <li>Jumping Flash! (PS1)</li>
              <li>LocoRoco Midnight Carnival (PSP)</li>
              <li>No Heroes Allowed (PSP)</li>
              <li>The Legend of Dragoon (PS1)</li>
              <li>Wild Arms (PS1)</li>
              <li>Wild Arms 2 (PS1)</li>
            </StatsList>
            <li>Psygnosis</li>
            <StatsList isNumbered={true}>
              <li>G-Police (PS1)</li>
            </StatsList>
            <li>Second-party</li>
            <StatsList isNumbered={true}>
              <li>Daxter (PSP)</li>
              <li>Gravity Crash Portable (PSP)</li>
              <li>Jak & Daxter: The Lost Frontier (PSP)</li>
              <li>Pinball Heroes (PSP)</li>
              <li>Ratchet & Clank: Size Matters (PSP)</li>
              <li>Sly Racoon (PS2)</li>
            </StatsList>
            <li>Incognito</li>
            <StatsList isNumbered={true}>
              <li>War of the Monsters (PS2)</li>
            </StatsList>
          </StatsList>
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide">
            Current PS Studios Legacy Games:
          </h3>
          <StatsList isNumbered={false}>
            <li>Bend Studio</li>
            <StatsList isNumbered={true}>
              <li>Resistance Retribution (PSP)</li>
              <li>Syphon Filter (PS1)</li>
              <li>Syphon Filter 2 (PS1)</li>
              <li>Syphon Filter 3 (PS1)</li>
              <li>Syphon Filter: Dark Mirror (PSP)</li>
              <li>Syphon Filter: Logan&#39;s Shadow (PSP)</li>
            </StatsList>
          </StatsList>
          <StatsList isNumbered={false}>
            <li>Guerrilla Games</li>
            <StatsList isNumbered={true}>
              <li>Killzone: Liberation (PSP)</li>
            </StatsList>
          </StatsList>
          <StatsList isNumbered={false}>
            <li>Housemarque</li>
            <StatsList isNumbered={true}>
              <li>Super Stardust Portable (PSP)</li>
            </StatsList>
          </StatsList>
          <StatsList isNumbered={false}>
            <li>San Diego Studio</li>
            <StatsList isNumbered={true}>
              <li>The Mark of Kri (PS2)</li>
            </StatsList>
          </StatsList>
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide">
            Takeaways:
          </h3>
          <StatsList isNumbered={false}>
            <li>
              The majority of games that have been ported over from defunct
              studios like BigBig and SCE Cambridge
            </li>
            <li>
              It seems like when a game is chosen, Sony like to finish off the
              whole series before moving on to another.
            </li>
            <li>
              For example, getting all the Pursuit Force and Syphon Filter games
              ported before moving to others games from those respective
              developers.
            </li>
            <li>
              Even if a game didn&#39;t initially release in a particular
              region, they still received the PS+ port.
            </li>
            <li>
              For example, NA regions received the second Intelligent Qube and
              Ape Academy 2
            </li>
          </StatsList>
          <h3 className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide">
            Different names for the same games:
          </h3>
          <Paragraph>
            The less globalized world was different in the 90s and early 2000s.
            The internet was in its infancy, let alone broadband-enabled online
            gaming, and game development pipelines were also more closed off. As
            a result, many games not only released months/sometimes years apart
            in different regions, but also under different names. Here are the
            legacy games that had multiple names depending on the region:
          </Paragraph>
          <StatsList isNumbered={true}>
            <li>
              Ape Escape Academy (NA) / Ape Academy (EU) / Piposaru Academia:
              Dossari! Sarugē Daizenshū (JP)
            </li>
            <li>
              Ape Academy 2 (EU) / Piposaru Academia 2: Aiai Sarugē Janken
              Battle! (JP)
            </li>
            <li>
              Ape Escape: On the Loose (NA) / Ape Escape P (EU) / Saru Get You
              P! (JP)
            </li>
            <li>Ape Escape (NA/EU) / Saru Get You (JP)</li>
            <li>Ape Escape 2 (NA/EU) / Saru Get You 2 (JP)</li>
            <li>
              Blade Dancer: Lineage of Light (NA/EU) / Blade Dancer:
              Thousand-Year Promise (JP)
            </li>
            <li>
              Intelligent Qube (NA) / Kurushi (EU) / I.Q: Intelligent Qube (JP)
            </li>
            <li>
              Hot Shots Golf (NA) / Everybody&#39;s Golf (EU) / Minna no Golf
              (JP)
            </li>
            <li>
              Hot Shots Golf 2(NA) / Everybody&#39;s Golf 2(EU) / Minna no Golf
              2 (JP)
            </li>
            <li>Jet Moto (NA/JP) / Jet Rider (EU)</li>
            <li>Jet Moto 2 (NA/JP) / Jet Rider 2 (EU)</li>
            <li>
              Jumping Flash! 2 (NA/EU) / Jumping Flash! 2: Big Trouble in Little
              Muu (JP)
              <li>
                Kingdom of Paradise (NA) / Key of Heaven (EU) / Tenchi no Mon
                (JP)
              </li>
              <li>Kurushi Final: Mental Blocks (EU) / IQ: Final (JP)</li>
            </li>
            <li>
              Sly Cooper and the Thievius Raccoonus (NA) / Sky Racoon (EU) /
              Kaitou Sly Cooper (JP)
            </li>
          </StatsList>
          <Paragraph>
            As you can see with games such as Kurushi Final, it was also much
            more likely back then for game to not be localized for every region.
          </Paragraph>
        </div>
      </div>
    </Container>
  );
}

export default StatsPage;
