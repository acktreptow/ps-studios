import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import marathonStolenArt from "../../../../public/images/dev-pages/marathon-stolen-art.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import List from "../../components/List";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Bungie",
  description:
    "The history and future of Bungie, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function BungiePage(): JSX.Element {
  return (
    <Container>
      <Title title="Bungie" />
      <DeveloperButton developer="Bungie" urlPath="https://www.bungie.net" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1991, this Washington-based developer is the most unique
        first-party studio for a variety of reasons:
      </Paragraph>
      <List>
        <li>
          Microsoft used to own Bungie when they created Xbox&#39;s flagship IP
          - Halo.
        </li>
        <li>
          Sony acquired Bungie in 2022, but they&#39;re the only first-party
          developer not in PS Studios. They&#39;re an independent Sony
          subsidiary.
        </li>
        <li>
          Bungie is the only first-party developer who can port their games to
          competing platforms like Xbox.
        </li>
      </List>
      <Paragraph>
        Why does Bungie have more freedom than PS Studios? Desperation. Sony saw
        the money live-services like Destiny were making, but had no in-house
        knowledge to make their own. For Bungie to sell, Sony overpaid at $3.6
        billion and accepted most terms. They were meant to advise on Sony&#39;s
        other live-service titles while raking in revenue from Destiny 2, which
        has severely underperformed post-acquisition.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Since 2023, there&#39;s been many rounds of layoffs, Sony taking board
        seats, a migration of Bungie employees to other PS Studios, and a whole
        incubation team spun out into teamLFG under PS Studios. Essentially,
        Sony are recouping what they can from Bungie once it was clear they
        wouldn&#39;t see ROI through their live-service expertise.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            On PS5, Bungie has only released a port of Destiny 2 in 2020.
            Although its final main expansion, 2024&#39;s The Final Shape, was
            critically acclaimed, its underwhelming sales led to the hollowing
            out of Bungie and further integration into PS Studios.
          </Paragraph>
          <Paragraph>
            Bungie also revealed Marathon, a live-service extraction shooter, in
            2023. It took until March 2025 to be showcased, and was delayed from
            September 2025 to March 2026 following tepid playtest opinion and a
            stolen art scandal.
          </Paragraph>
          <Paragraph marginBottom={8}>
            To call Marathon important for Bungie is an understatement. For them
            to keep any autonomy, it must do well to justify the $3.6 billion
            acquisition. However, its post-reveal issues and subsequent delay
            makes this outcome increasingly less likely, resulting in further
            changes to Bungie as Sony recoups as much as possible from the
            failed acquisition.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={marathonStolenArt}
            alt="Stolen Marathon art assets"
            id="marathon-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="marathon-art" className="block text-center mb-8">
            The Stolen Marathon Art Assets
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Bungie" />
    </Container>
  );
}

export default BungiePage;
