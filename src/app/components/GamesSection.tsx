import { Game } from "../types/Game";
import Paragraph from "./Paragraph";
import GameTitle from "./GameTitle";

type GamesSectionProps = {
  developer: string;
  games: Game[];
};

function GamesSection({ games, developer }: GamesSectionProps): JSX.Element {
  return (
    <section className="mb-5 grid gap-5 sm:grid-cols-2">
      {games
        .filter((game: Game) => game.developer === developer)
        .map((game: Game) => (
          <div
            key={game.id}
            className="border-2 border-gray-200 rounded-lg shadow-md p-3"
          >
            <GameTitle>{game.name}</GameTitle>
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
    </section>
  );
}

export default GamesSection;
