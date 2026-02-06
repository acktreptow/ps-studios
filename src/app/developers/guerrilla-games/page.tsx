import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import burningShores from "../../../../public/images/dev-pages/burning-shores.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import List from "../../components/List";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Guerrilla Games",
  description:
    "The history and future of Guerrilla Games, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function GuerrillaGamesPage(): JSX.Element {
  return (
    <Container>
      <Title title="Guerrilla Games" />
      <DeveloperButton
        developer="Guerrilla"
        urlPath="https://www.guerrilla-games.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2000, Guerrilla Games is known for its FPS Killzone and
        action RPG Horizon IP. Sony acquired the Amsterdam studio just 1 year
        after Killzone released on PS2 in 2004, making them one of the oldest
        PlayStation developers.
      </Paragraph>
      <Paragraph>
        On PS5, Guerrilla has only released Horizon Forbidden West in 2022,
        which sold 10+ million. They did work with other studios on 2023&#39;s
        Horizon Call of the Mountain, 2024&#39;s Lego Horizon Adventures, and a
        remake of Horizon Zero Dawn, but weren&#39;t the main developer.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Outside of collaborations and 2023&#39;s PS5 exclusive Burning Shores
        DLC for Forbidden West, Guerrilla had remained silent until 2026, when
        they announced Horizon Hunters Gathering. This live-service co-op
        Horizon title has its work cut out in order to win over the hardcore PS5
        base that was hoping for Horizon 3.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            The response to Horizon HG was extremely negative, with particular
            critique at its cartoony art style. If anything, Horizon Steel
            Frontiers, (a high-fidelity MMO for PC/phones by NC Soft) looks more
            like the live-service expected from Guerrilla, whereas HG looks like
            the phone title.
          </Paragraph>
          <Paragraph>
            HG&#39;s first playtest is in late Feb, so it&#39;s not too long
            before players can get hands-on. However, this playtest must be
            executed perfectly. If gameplay and presentation falls short, the
            hardcore base won&#39;t only not evangelize the project, they&#39;ll
            crucify its reputation like they did Concord. HG will then have
            little chance of finding popularity with the more
            casual/live-service PS5 audience who might try an ok game, but not
            an uncool one.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Rumors suggest Guerrilla is also working on Horizon 3. Even if
            it&#39;s a PS6 title that&#39;s years away, it would do well for
            them to showcase it now. At the very least, a high-fidelity
            singleplayer Horizon will help take the heat off yet another
            live-service from one of Sony&#39;s premier PS Studios.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={burningShores}
            alt="Horizon Burning Shores key art"
            id="burning-shores"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="burning-shores" className="block text-center mb-8">
            Horizon FW&#39;s DLC: Burning Shores
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Guerrilla Games" />
    </Container>
  );
}

export default GuerrillaGamesPage;
