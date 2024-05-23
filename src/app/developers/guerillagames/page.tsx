import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import burningShores from "../../../../public/images/dev-pages/burning-shores.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import List from "../../components/List";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Guerilla Games",
  description:
    "The history and future of Guerilla Games, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function GuerillaGamesPage(): JSX.Element {
  return (
    <Container>
      <Title title="Guerrilla Games" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2000, this Amsterdam-based developer is primarily known for
        the FPS series &#39;Killzone&#39;, and third-person action RPG series
        &#39;Horizon&#39;.
      </Paragraph>
      <Paragraph>
        Sony acquired Guerilla in 2005, one year after the original Killzone
        released for the PS2 - making them one of the oldest PlayStation
        developers.
      </Paragraph>
      <Paragraph>
        On PS5, Guerilla have only released the cross-gen title &#39;Horizon
        Forbidden West&#39;, in early 2022. Its DLC &#39;Burning Shores&#39; was
        however a PS5 exclusive.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Since the 2023 DLC, Guerilla have been silent. We don&#39;t even have a
        name for their next project.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite no concrete information, I predict Guerilla&#39;s next game
            is Horizon 3 for the following reasons:
          </Paragraph>
          <List>
            <li>
              Horizon FW&#39;s ending sets up a sequel that serves as the final
              act of a trilogy.
            </li>
            <li>Netflix is working on a live action Horizon TV series.</li>
            <li>
              A remake of the first Horizon is likely being developed at Nixxes.
            </li>
            <li>
              A Horizon online MMO is almost certainly being worked on at
              NCSoft.
            </li>
            <li>A lego Horizon game has been leaked.</li>
          </List>
          <Paragraph>
            Clearly, Sony are bullish on Horizon with so many projects in
            development. It would therefore be nonsensical for Guerilla to move
            on right now.
          </Paragraph>
          <Paragraph marginBottom={8}>
            You can expect &#39;Horizon 3&#39; in roughly 2027 that plays
            similar to the first two. It&#39;s only been two years since
            Forbidden West though, so don&#39;t expect to see anything until
            2025 at the earliest.
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

export default GuerillaGamesPage;
