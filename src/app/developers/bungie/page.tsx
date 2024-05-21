import { Metadata } from "next";
import gamesData from "../../data/games.json";
import Image from "next/image";
import finalShape from "../../../../public/images/dev-pages/the-final-shape.png";
import Container from "../../components/Container";
import DeveloperTitle from "../../components/DeveloperTitle";
import DeveloperSubTitle from "../../components/DeveloperSubTitle";
import Paragraph from "../../components/Paragraph";
import List from "../../components/List";

export const metadata: Metadata = {
  title: "Bungie",
  description:
    "The history and future of Bungie, a first-party developer for PlayStation Studios.",
};

type Game = {
  developer: string;
  name: string;
  id: string;
  genre: string;
  releaseDate: string;
  daysBetweenReleases: number | string;
  metacritic: number | string;
};

const games: Game[] = gamesData;

function BungiePage(): JSX.Element {
  return (
    <Container>
      <DeveloperTitle title="Bungie" />
      <DeveloperSubTitle subtitle="History" />
      <Paragraph>
        Founded in 1991, this Washington-based developer is the most unique
        first-party studio for a variety of reasons:
      </Paragraph>
      <List>
        <li>
          Microsoft used to own Bungie when they created Xbox&#39;s flagship IP
          &#39;Halo&#39;.
        </li>
        <li>
          Activision also use to own Bungie during initial work on Destiny.
        </li>
        <li>
          Sony acquired Bungie in 2022, but they&#39;re the only first-party
          developer not part of PS Studios. They&#39;re an independent Sony
          subsidiary.
        </li>
        <li>
          Bungie are the only first-party developer who can port their games to
          competing platforms like Xbox.
        </li>
      </List>
      <Paragraph>
        Why does Bungie have more freedom than all of PS Studios? Desperation.
        Sony saw the money live-service games like Destiny were making, but had
        no in-house knowledge to make their own.
      </Paragraph>
      <Paragraph marginBottom={8}>
        To get Bungie to sell, Sony overpaid at $3.6 billion and accepted all
        their terms. Bungie now advises other PS Studios on how to make a
        live-service game.
      </Paragraph>
      <div className="md:flex items-center">
        <div>
          <DeveloperSubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            On PS5, Bungie has only released a port of Destiny 2. In 2023, they
            announced a live-service extraction shooter called Marathon, but
            it&#39;s not been seen since.
          </Paragraph>
          <Paragraph>
            There&#39;s reasons to be wary of Marathon though. Sony paid a lot
            for Bungie&#39;s live-service knowledge, but Destiny 2 has been
            severely underperforming. This forced layoffs just to ensure certain
            targets were met that prevented a Sony takeover of Bungie&#39;s
            board.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Further layoffs will also likely occur once Destiny 2&#39;s last
            expansion releases, and Sony still might take over. It&#39;s hard to
            believe Marathon will succeed under those circumstances.
          </Paragraph>
        </div>
        <div>
          <Image
            src={finalShape}
            alt="Destiny 2: The Final Shape key art"
            width={500}
            height={500}
            id="final-shape"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="final-shape" className="block text-center mb-8">
            Destiny 2&#39;s Last Expansion
          </label>
        </div>
      </div>
      <DeveloperSubTitle subtitle="PS5 Games" />
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game: Game) => game.developer === "Bungie")
          .map((game: Game) => (
            <div
              key={game.id}
              className="border-2 border-gray-200 rounded-lg shadow-md p-3"
            >
              <h3 className="text-xl font-bold text-center mb-1 lg:text-2xl lg:mb-3">
                {game.name}
              </h3>
              <Paragraph marginBottom={0}>Genre: {game.genre}</Paragraph>
              <Paragraph marginBottom={0}>
                Release Date: {game.releaseDate}
              </Paragraph>
              <Paragraph marginBottom={0}>
                Days Since Their Last Game: {game.daysBetweenReleases}
              </Paragraph>
              <Paragraph marginBottom={0}>
                Metacritic Score: {game.metacritic}
              </Paragraph>
            </div>
          ))}
      </div>
    </Container>
  );
}

export default BungiePage;
