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
        Founded in 2000, Guerrilla Games are known for their FPS Killzone and
        action RPG Horizon IPs. Sony acquired the Amsterdam studio just 1 year
        after the first Killzone released on PS2 in 2004, making them one of the
        oldest PlayStation developers.
      </Paragraph>
      <Paragraph>
        On PS5, Guerrilla have released Horizon Forbidden West in 2022, which
        quickly sold 10+ million copies in part because it also came to PS4.
        They also co-developed 2023&#39;s VR action-adventure Horizon Call of
        the Mountain and 2024&#39;s remaster of Horizon Zero Dawn with fellow PS
        Studios Firesprite and Nixxes respectively. Finally, Guerrilla partnered
        with Studio Gobo on 2024&#39;s family-focused Lego Horizon Adventures,
        but as they&#39;re not a PS Studio, LHA is included on this page.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Outside of these collaborations and 2023&#39;s PS5-exclusive Burning
        Shores DLC for HFW, Guerrilla stayed silent until announcing Horizon
        Hunters Gathering in 2026. This live-service co-op title faces an uphill
        battle to win over the hardcore PS5 base that was hoping for Horizon 3.
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
