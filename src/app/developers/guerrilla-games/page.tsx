import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import huntersGathering from "../../../../public/images/dev-pages/hunters-gathering.png";
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
            The initial response to HHG was extremely negative, with particular
            criticism for its cartoony art style. If anything, Horizon Steel
            Frontiers (the NCSoft-developed MMO for PC/phones) looks more like
            the live-service expected from Guerrilla, whereas HHG looks like the
            phone title.
          </Paragraph>
          <Paragraph>
            Fortunately, sentiment around HHG&#39;s gameplay and presentation
            was mostly positive across its 2 closed playtests, which needed to
            happen. Otherwise, the hardcore base wouldn&#39;t just fail to
            evangelize HHG, they&#39;d crucify its reputation like they did
            Concord. HHG would then have little chance to connect with the more
            casual live-service PS5 audience who might try an okay game, but not
            an uncool one. However, this is only a positive start that needs to
            continue.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Rumors suggest Guerrilla are also working on Horizon 3. Even if
            it&#39;s a cross-gen PS6 title that&#39;s years away, Guerrilla
            should announce it. At the very least, confirming a high-fidelity
            singleplayer Horizon will take some heat off yet another
            live-service from a premier PS Studio.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={huntersGathering}
            alt="Horizon Hunters Gathering key art"
            id="hunters-gathering"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="hunters-gathering" className="block text-center mb-8">
            Hunters Gathering Cartoony Art Style
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Guerrilla Games" />
    </Container>
  );
}

export default GuerrillaGamesPage;
