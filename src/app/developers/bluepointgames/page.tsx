import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import demonsSouls from "../../../../public/images/dev-pages/demons-souls.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Bluepoint Games",
  description:
    "The history and future of Bluepoint Games, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function BluepointGamesPage(): JSX.Element {
  return (
    <Container>
      <Title title="Bluepoint Games" />
      <DeveloperButton
        developer="Bluepoint"
        urlPath="https://www.bluepointgames.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2006, this Texas-based developer is known for its excellent
        remasters and remakes. Even before Sony acquired Bluepoint in 2021, they
        mostly worked on PlayStation IP. For example, remastering God of War 1/2
        for PS3 and Uncharted 1-3 for PS4. Their largest multiplatform remaster
        was the Metal Gear Solid HD Collection for PS3 and Xbox 360.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Bluepoint&#39;s most recent projects have been full remakes, such as
        2018&#39;s Shadow of the Colossus on PS4, and 2020&#39;s Demon&#39;s
        Souls - a highly praised PS5 launch title that&#39;s still considered
        one of the best-looking games of the generation.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            After Demon&#39;s Souls, all we knew was that Bluepoint&#39;s next
            game would be original content. In 2025, we found out this meant a
            now-cancelled live-service God of War set back in Greece.
          </Paragraph>
          <Paragraph>
            Considering Bluepoint&#39;s history, most were disappointed with the
            pivot to original content. However, the industry was shocked that
            they were not only co-opted into Sony&#39;s poorly executed
            live-service push, but that 4 years were now wasted on a cancelled
            game.
          </Paragraph>
          <Paragraph>
            Bluepoint is currently hiring for a 3rd-person melee action game,
            but it&#39;s unknown whether it&#39;s a live-service. Even if
            it&#39;s a remake (the best scenario), it&#39;s likely a PS6 title
            due to how long game development takes. Therefore outside of launch,
            Bluepoint has been wasted on PS5. A worst case outcome, easily
            avoided if not for ex-PlayStation leadership incompetence.
          </Paragraph>
          <Paragraph marginBottom={8}>
            If there was one PS Studio that should never have entered the
            live-service arena, it&#39;s Bluepoint. It doesn&#39;t take a genius
            to not greenlight a live-service game out of a remake studio.
            Hopefully, Sony&#39;s new leadership clears that very low bar.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={demonsSouls}
            alt="Demons's Souls cover art"
            id="demons-souls"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="demons-souls" className="block text-center mb-8">
            Demon&#39;s Souls Cover Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Bluepoint Games" />
    </Container>
  );
}

export default BluepointGamesPage;
