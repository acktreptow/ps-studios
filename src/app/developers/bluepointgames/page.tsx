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
        2018&#39;s Shadow of the Colossus on PS4 and 2020&#39;s Demon&#39;s
        Souls. A PS5 launch title that was highly praised and still considered
        as one of the best looking games of the generation.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite Demon&#39;s Souls shipping in 2020, all we knew was that
            Bluepoint&#39;s next game was original content. In January 2025, we
            found out this meant a now cancelled live-service God of War.
          </Paragraph>
          <Paragraph>
            Considering Bluepoint&#39;s history, most were disappointed with the
            pivot to original content. However, the industry was shocked that
            they were not only co-opted into Sony&#39;s poorly executed
            live-service push, but that 4 years were now wasted on a cancelled
            game.
          </Paragraph>
          <Paragraph>
            Even if Bluepoint return to remakes, which would be the best case
            scenario, it&#39;s likely a PS6 title given how long it takes to
            ship a game. Therefore outside of PS5&#39;s launch, Bluepoint has
            completely wasted the generation. A worst case outcome that was
            easily avoided if not for the incompetence of ex-PlayStation
            leadership.
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
