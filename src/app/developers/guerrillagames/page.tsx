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
        Founded in 2000, Guerrilla Games is known for its FPS series
        &#39;Killzone&#39; and third-person action RPG series &#39;Horizon&#39;.
        Sony acquired the Amsterdam studio just one year after Killzone released
        on PS2 in 2004, which makes them one of the oldest PlayStation
        developers.
      </Paragraph>
      <Paragraph>
        On PS5, Guerrilla have only released the cross-gen title &#39;Horizon
        Forbidden West&#39; in early 2022. They did work with other studios on
        2023&#39;s &#39;Horizon Call of the Mountain&#39;, 2024&#39;s &#39;Lego
        Horizon Adventures&#39; and a remake of &#39;Horizon Zero Dawn&#39;, but
        they weren&#39;t the primary developer.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Outside of collaborations and 2023&#39;s PS5 exclusive &#39;Burning
        Shores&#39; DLC for Forbidden West, Guerrilla have been silent about
        their next project.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite no concrete information, I predict Guerrilla&#39;s next game
            is Horizon 3 due to the following:
          </Paragraph>
          <List>
            <li>
              Horizon FW&#39;s ending sets up a sequel that serves as the final
              act of a trilogy.
            </li>
            <li>
              Horizon CotM was co-developed with Firesprite and launched
              alongside PSVR2 in 2023.
            </li>
            <li>
              Lego Horizon Adventures was co-developed with Studio Gobo and
              released in 2024.
            </li>
            <li>
              A Horizon Zero Dawn remake was co-developed with Nixxes and
              released in 2024.
            </li>
            <li>
              A Horizon MMO is almost certainly being worked on at NCSoft.
            </li>
            <li>
              Columbia Pictures and PlayStation Productions are adapting Horizon
              Zero Dawn into a movie.
            </li>
            <li>
              A Horizon TV series was going to be produced by Netflix, and its
              cancellation were for reasons outside of Sony&#39;s control.
            </li>
          </List>
          <Paragraph>
            Clearly, Sony are bullish on the Horizon IP with so many projects
            across different mediums being greenlit. Horizon FW also sold over
            10 million copies. It would therefore be nonsensical for Guerrilla
            to move on right now.
          </Paragraph>
          <Paragraph marginBottom={8}>
            I predict &#39;Horizon 3&#39; will launch around 2027 and that it
            plays similar to the first two. It&#39;s also been over 3 years
            since Forbidden West launched so we might see something this year,
            but it&#39;s unlikely.
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
