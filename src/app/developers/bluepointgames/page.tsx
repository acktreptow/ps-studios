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
        remasters and remakes.
      </Paragraph>
      <Paragraph>
        Even before Sony acquired Bluepoint in 2021, they mostly worked on
        PlayStation IP. For example, remastering God of War 1/2 for PS3 and
        Uncharted 1-3 for PS4. Their largest multiplatform remaster was the
        Metal Gear Solid HD Collection for PS3 and Xbox 360.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Bluepoint&#39;s most recent projects have been full remakes, such as
        2018&#39;s Shadow of the Colossus on PS4 and 2020&#39;s Demon&#39;s
        Souls. A PS5 launch title that was highly praised and still considered
        as one of the best looking games of the generation.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite Demon&#39;s Souls releasing in 2020, all we knew was that
            Bluepoint&#39;s next game was &#39;original content&#39;. In January
            2025, we found out this meant a now cancelled live-service God of
            War.
          </Paragraph>
          <Paragraph>
            Considering Bluepoint&#39;s history, most were a little disappointed
            with the pivot to original content. However, the industry was
            shocked, even insulted, that were not only co-opted into Sony&#39;s
            poorly executed live-service push, but that 4 years were now wasted
            on the cancelled game.
          </Paragraph>
          <Paragraph>
            Even if Bluepoint return to remakes, which would be the best case
            scenario, I would expect it on PS6 now. If it wasn&#39;t for
            Demon&#39;s Souls, the PS5 generation would be a completely wasted
            one for Bluepoint. But what makes the situation even more depressing
            is that this all could have been avoided. Bluepoint should never
            have dipped their toes into live-service, let alone spend years
            wasting away on one as their next game. It&#39;s hard to believe any
            but PlayStation&#39;s old leadership would allow this to happen
            because it made no sense.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Hopefully, with Sony&#39;s new leadership, this insulting set of
            events is now truly done and Bluepoint can get back to what they do
            best. Whatever it is, it&#39;s likely not seeing the light of day
            until the PS6.
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
