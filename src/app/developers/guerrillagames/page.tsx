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
        Founded in 2000, Guerrilla Games is known for its FPS &#39;Killzone&#39;
        and third-person action RPG &#39;Horizon&#39; series. Sony acquired the
        Amsterdam studio just 1 year after Killzone released on PS2 in 2004,
        making them one of the oldest PlayStation developers.
      </Paragraph>
      <Paragraph>
        On PS5, Guerrilla has only released &#39;Horizon Forbidden West&#39; in
        2022. They did work with other studios on 2023&#39;s &#39;Horizon Call
        of the Mountain&#39;, 2024&#39;s &#39;Lego Horizon Adventures&#39; and a
        remake of &#39;Horizon Zero Dawn&#39;, but they weren&#39;t the main
        developer.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Outside of collaborations and 2023&#39;s PS5 exclusive &#39;Burning
        Shores&#39; DLC for Forbidden West, Guerrilla have been silent about
        their next project. Yet despite the scilence, we know that it&#39;s
        almost certainly Horizon 3.
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
              Horizon COTM was co-developed with Firesprite and launched
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
              Columbia Pictures and PS Productions are adapting Horizon Zero
              Dawn into a movie for 2027.
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
            to walk away from the series right now.
          </Paragraph>
          <Paragraph marginBottom={8}>
            I predict Horizon 3 launches around late 2027 as a cross-gen PS5/PS6
            title and it&#39;ll play similar to the first 2. It&#39;s also been
            over 3 years since Forbidden West so we might see something in 2025,
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
