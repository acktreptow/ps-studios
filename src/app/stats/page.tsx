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
        There&#39;s 24 (announced) first-party developers under the PS Studios
        umbrella. The following list provides their names and their number of{" "}
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
            <li>Total PS5 games released: 37</li>
            <li>
              Game(s) with highest Metacritic score: God of War: Ragnarök (Sony
              Santa Monica) & Astro Bot (Team Asobi) - 94
            </li>
            <li>
              Game(s) with lowest Metacritic score: Concord (Firewalk) - 62
            </li>
            <li>
              Game with highest Metacritic score (second-party): Death Stranding
              2: On The Beach (Kojima Productions) - 90
            </li>
            <li>
              Game with lowest Metacritic score (second-party): Destruction
              AllStars (Lucid Games) & Firewall Ultra (First Contact) - 62
            </li>
            <li>
              Most awarded PS5 Game: Team Asobi&#39;s Astro Bot with 195,
              including Game of the Year at The Game Awards 2024
            </li>
            <li>
              Most awarded PS5 Game (including remasters/remakes): Naughty
              Dog&#39;s The Last of Us Part II with 320 including Game of the
              Year at The Game Awards 2020 (includes awards from PS4 version)
            </li>
            <li>Total 90+ PS5 games on Metacritic: 6</li>
            <li>Total 80-89 PS5 games on Metacritic: 20</li>
            <li>Total 70-79 PS5 games on Metacritic: 9</li>
            <li>Total 60-69 PS5 games on Metacritic: 2</li>
            <li>Total 59- PS5 games on Metacritic: 0</li>
            <li>PS5 games released in 2020: 6</li>
            <li>PS5 games released in 2021: 8</li>
            <li>PS5 games released in 2022: 6</li>
            <li>PS5 games released in 2023: 4</li>
            <li>PS5 games released in 2024: 10</li>
            <li>PS5 games released in 2025 so far: 3</li>
            <li>Released PS5 games that are remasters/remakes: 12</li>
            <li>
              Released PS5 games that are on Xbox: 9 (4 excluding MLB The Show
              21-25)
            </li>
            <li>
              Released PS5 games that are on Nintendo: 6 (2 excluding MLB 22-25)
            </li>
            <li>Released PS5 games that are on PC: 23</li>
            <li>Released PS5 games that originated on PS3: 2</li>
            <li>Released PS5 games games that originated on PS4: 10</li>
            <li>
              Released PSVR2 games: 4 (2 excluding Gran Turismo games where
              it&#39;s optional)
            </li>
            <li>Unreleased announced PS5 games: 10</li>
            <li>
              Most recent released PS5 game: Death Stranding 2: On The Beach
              (June 26, 2025)
            </li>
            <li>Next PS5 game: Lost Soul Aside - August 29, 2025</li>
          </StatsList>
          <h3
            className="mb-1 text-gray-800 text-xl font-semibold pb-1 lg:text-xl lg:tracking-wide"
            id="studiostats"
          >
            Studio Stats:
          </h3>
          <StatsList isNumbered={false}>
            <li>Studios in NA: 14 (excluding XDev US)</li>
            <li>Studios in EU: 7 (excluding XDev Liverpool)</li>
            <li>Studios in Asia: 3 (excluding XDev Tokyo)</li>
            <li>PS5 games from NA studios: 25</li>
            <li>PS5 games from EU studios: 11</li>
            <li>PS5 games from Asia studios: 11</li>
            <li>Released PS5 games from NA studios: 18</li>
            <li>Released PS5 games from EU studios: 10</li>
            <li>Released PS5 games from Asia studios: 9</li>
            <li>Oldest studio: Naughty Dog (founded 1984)</li>
            <li>Newest studio: teamLFG (founded May, 2025)</li>
            <li>First acquired studio: Bend Studio (2000)</li>
            <li className="mb-3">
              Last acquired studio: Haven Studios (March, 2022)
            </li>
            <li className="mb-1">
              Studios created internally: 9 (4 during the PS5 generation)
            </li>
            <StatsList isNumbered={true}>
              <li>Polyphony Digital (Tokyo, 1998)</li>
              <li>San Mateo Studio (California, 1998)</li>
              <li>Santa Monica Studio (California, 1999)</li>
              <li>XDev ((Liverpool, 2000) & (Tokyo, 2020))</li>
              <li>San Diego Studio (California, 2001)</li>
              <li>Malaysia Studio (Kuala Lumpur, 2020)</li>
              <li>Team Asobi (Tokyo, 2021)</li>
              <li>Dark Outlaw Games (Los Angeles (CA), 2025)</li>
              <li>teamLFG (Bellevue (WA), 2025)</li>
            </StatsList>
            <li className="mb-1">
              Studios acquired during the PS5 generation: 10 (italics denotes a
              closed studio)
            </li>
            <StatsList isNumbered={true}>
              <li>Housemarque (Helsinki, Finland - June, 2021)</li>
              <li>Nixxes Software (Utrecht, Netherlands - July, 2021)</li>
              <li>Bluepoint Games (Austin, TX - September, 2021)</li>
              <li>Fabrik Games (Manchester, UK - September, 2021)</li>
              <li>Firesprite (Liverpool, UK - September, 2021)</li>
              <li>Valkyrie Entertainment (Seattle, WA - December, 2021)</li>
              <li>Bungie (Bellevue, WA - January, 2022)</li>
              <li>Haven Studios (Montreal, Quebec - March, 2022)</li>
              <li className="italic">
                Neon Koi (Berlin, Germany & Helsinki, Finland - August, 2022)
              </li>
              <li className="italic">
                Firewalk Studios (Bellevue, WA - April, 2023)
              </li>
            </StatsList>
            <li className="m-1">Studios closed since PS5 release year: 6</li>
            <StatsList isNumbered={true}>
              <li>Manchester Studio (Manchester, UK - February, 2020)</li>
              <li>Japan Studio (Tokyo - April, 2021)</li>
              <li>Pixelopus (San Mateo, CA - May, 2023)</li>
              <li>London Studio (London, UK - February, 2024)</li>
              <li>Firewalk Studios (Bellevue, WA - October, 2024)</li>
              <li>
                Neon Koi (Berlin, Germany & Helsinki, Finland - October, 2024)
              </li>
            </StatsList>
            <li className="mb-1">Support studios: 7</li>
            <StatsList isNumbered={true}>
              <li>Fabrik Games</li>
              <li>Malaysia Studio</li>
              <li>Nixxes Software</li>
              <li>San Mateo Studio</li>
              <li>Valkyrie Entertainment</li>
              <li>Visual Arts Services Group</li>
              <li>XDev</li>
            </StatsList>
            <li>
              Studio with most new releases: Insomniac Games - 4 (excluding San
              Diego Studio&#39;s 5 MLB The Show games){" "}
            </li>
            <li>Studio with most remasters/remakes: Naughty Dog (3)</li>
            <li>Number of studios with 0 released PS5 games: 9</li>
            <li>
              Number of studios who have announced their debut PS5 which has yet
              to release: 3 (Dark Outlaw, Haven, teamLFG)
            </li>
            <li>
              Studio with the longest duration since their last release
              (excluding remasters/remakes): Bungie with Destiny 2 (September,
              2017)
            </li>
            <li>
              Studio with the longest duration since their last release
              (including remasters/remakes): Media Molecule with Dreams
              (February, 2020)
            </li>
            <li>
              Studio with the shortest duration since their last release
              (excluding MLB The Show, XDev and remakes/remasters): Team Asobi
              with Astro Bot (September, 2024)
            </li>
            <li>
              Studio with the shortest duration since their last release
              (excluding MLB The Show & XDev, but including remakes/remasters):
              Bend Studio with Days Gone Remastered (April, 2025)
            </li>
            <li>
              Studio with the shortest duration since their last release
              (excluding MLB The Show, but including XDev & remakes/remasters):
              XDev/Kojima Productions with Death Stranding 2: One the Beach
              (June, 2025)
            </li>
            <li>
              Most recent second-party/XDev game: Kojima Productions with Death
              Stranding 2: On the Beach - June, 2025 (prev Ballistic Moon with
              Until Dawn Remake - October, 2024)
            </li>
            <li>
              Largest studio by headcount: Bungie (Approx 850+ even
              post-layoffs)
            </li>
            <li>
              Smallest studio by headcount: Most likely either Fabrik Games, San
              Mateo Studio or Valkyrie Entertainment (fewer than 50)
            </li>
            <li>Studio with most Game of the Year Awards: Naughty Dog</li>
            <li>
              Studio with highest average Metacritic score (including devs with
              just 1 game): Sony Santa Monica (1 game averaging 94)
            </li>
            <li>
              Studio with highest average Metacritic score (excluding devs with
              just 1 game): Team Asobi (2 games averaging 88.5)
            </li>
            <li>
              Studio with highest average Metacritic score (including
              remakes/remasters): Naughty Dog (3 remasters/remakes averaging to
              88.67)
            </li>
            <li>
              Studio with lowest average Metacritic score (including devs with
              just 1 game): Firesprite (2 games averaging 75)
            </li>
            <li>
              Studio with lowest average Metacritic score (excluding devs with
              just 1 game): Firesprite (2 games averaging 75)
            </li>
            <li className="mb-3">
              Studio with lowest average Metacritic score (including
              remakes/remasters): Firesprite (2 games averaging 75)
            </li>
            <li className="mb-1">
              Five studios most likely to close (in rough order of likeliness):
            </li>
            <StatsList isNumbered={true}>
              <li>Media Molecule</li>
              <li>Bend Studio</li>
              <li>Haven Studio</li>
              <li>Firesprite/Fabrik Games</li>
              <li>Bungie</li>
            </StatsList>
            <li className="mb-1">
              Five studios least likely to close (in rough order of likeliness):
            </li>
            <StatsList isNumbered={true}>
              <li>Sony Santa Monica</li>
              <li>Naughty Dog</li>
              <li>Guerrilla Games</li>
              <li>Polyphony Digital</li>
              <li>Sucker Punch</li>
            </StatsList>
            <li className="mb-1">Studios waiting to be announced:</li>
            <StatsList isNumbered={true}>
              <li>
                The Southern California team who is working with Naughty
                Dog/Visual Arts on the next Uncharted.
              </li>
            </StatsList>
            <li className="mb-1">
              Studios most likely to be acquired (in rough order of likeliness,
              all of which are increasingly unlikely as time goes on):
            </li>
            <StatsList isNumbered={true}>
              <li>Arc System Works (Guilty Gear, BlazeBlue, Marvel Tōkon)</li>
              <li>Ultizero Games (Lost Soul Aside)</li>
              <li>SHIFT UP (Stellar Blade)</li>
              <li>Arrowhead Game Studios (Helldivers 2)</li>
              <li>Ember Lab (Kena: Bridge of Spirits)</li>
            </StatsList>
            <li className="mb-1">
              Publishers most likely to be acquire (all of which are incredibly
              unlikely)
            </li>
            <StatsList isNumbered={true}>
              <li>Square Enix (Final Fantasy, Dragon Quest)</li>
              <li>Nexon (The First Descendant, The First Beserker)</li>
              <li>MiHoYo (Genshin Impact, Zenless Zone Zero)</li>
            </StatsList>
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
