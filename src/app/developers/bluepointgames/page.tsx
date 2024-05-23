import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import demonsSouls from "../../../../public/images/dev-pages/demons-souls.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
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
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2006, this Texas-based developer is known for its excellent
        remasters and remakes.
      </Paragraph>
      <Paragraph>
        Even before Sony acquired them in 2021, the majority of these reworks
        were PlayStation IP. For example, remastering God of War 1 and 2 for PS3
        and Uncharted 1-3 for PS4.
      </Paragraph>
      <Paragraph>
        Their largest non-PlayStation remaster was the Metal Gear Solid HD
        Collection for PS3 and Xbox 360.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Bluepoint&#39;s most recent projects have been remakes such as
        2018&#39;s Shadow of the Colossus on the PS4 and 2020&#39;s Demon&#39;s
        Souls. A PS5 launch title that was highly praised.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite Demon&#39;s Souls releasing over 3 years ago, we don&#39;t
            even have the name for Bluepoint&#39;s next game. All we know is
            that it&#39;ll be &#39;original content&#39;.
          </Paragraph>
          <Paragraph>
            Considering this is Bluepoint&#39;s first non-remaster/remake,
            it&#39;s not too surprising that development is taking longer than
            their previous games. I&#39;m also optimistic due to their excellent
            track record.
          </Paragraph>
          <Paragraph marginBottom={8}>
            That outlook might change if we go another year without any news
            though. 4 years is too long for Bluepoint to go without an
            announcement.
          </Paragraph>
        </div>
        <div>
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
