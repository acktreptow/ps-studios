import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import finalShape from "../../../../public/images/dev-pages/the-final-shape.png";
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
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            On PS5, Bungie has only released a port of Destiny 2. In 2023, they
            announced a live-service extraction shooter called Marathon, but
            it&#39;s not been seen since.
          </Paragraph>
          <Paragraph>
            There&#39;s reasons to be wary of Marathon though. Sony paid a lot
            for Bungie&#39;s live-service knowledge, but D2 has been severely
            underperforming since the acquisition. This situation forced layoffs
            to ensure Bungie hit internal targets and prevent a Sony takeover of
            their board.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Since then, D2&#39;s &#39;The Final Shape&#39; released to critical
            acclaim, but we don&#39;t know how well it sold. Sony could still
            take over depending on this crucial fact. It&#39;s therefore hard to
            believe Marathon can succeed under these conditions.
          </Paragraph>
        </div>
        <div>
          <Image
            src={finalShape}
            alt="Destiny 2: The Final Shape key art"
            id="final-shape"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="final-shape" className="block text-center mb-8">
            Destiny 2&#39;s Last Expansion
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Bungie" />
    </Container>
  );
}

export default BungiePage;
