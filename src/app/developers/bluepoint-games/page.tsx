import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import Gow from "../../../../public/images/dev-pages/cancelled-gow.png";
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
        Founded in 2006, Bluepoint Games were a Texas-based developer known for
        their excellent remasters and remakes of primarily PlayStation IP.
        Examples include the God of War Collection (PS2&#39;s GoW 1 and 2) for
        PS3, and Uncharted: The Nathan Drake Collection (PS3&#39;s Uncharted
        1-3) for PS4. In fact, Konami&#39;s Metal Gear Solid HD Collection for
        PS3 and 360 was Bluepoint&#39;s only multiplatform release.
      </Paragraph>
      <Paragraph>
        After these successful remasters, Bluepoint scaled up to full remakes
        for their final 2 projects. Both the PS4 remake of PS2&#39;s Shadow of
        the Colossus in 2018 and the remake of PS3&#39;s Demon&#39;s Souls for
        PS5&#39;s launch were even more critically acclaimed.
      </Paragraph>
      <Paragraph>
        With Bluepoint now considered the industry&#39;s premier remake studio,
        Sony, unsurprisingly, announced they had acquired them just 10 months
        after DS shipped. This was an exciting time. What PlayStation IP would
        be remade next from such a prestigious, now first-party studio, with all
        the advantages that come with it? After all, DS was the highest-rated
        PS5 launch title with a 92 on Metacritic and is still considered one of
        the best-looking games of the PS5 generation, 6 years later.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Unfortunately, DS would be Bluepoint&#39;s final game as Sony
        surprisingly closed the studio in 2026. While the hardcore PS5 base were
        crestfallen as Bluepoint were thought to be immune from this fate, the
        information that inevitably leaked in the fallout of their closure is
        the real story. No one could&#39;ve possibly predicted the train wreck
        Bluepoint had become post-acquisition.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            While Bluepoint found great success with remasters and remakes,
            studio leadership surprisingly wanted to develop original content
            after DS. At first, this was as support for Santa Monica
            Studio&#39;s God of War Ragnarok. However, once it shipped in 2022,
            Bluepoint&#39;s ambitions combined with Sony&#39;s live-service push
            resulted in the worst-case scenario - a live-service God of War.
          </Paragraph>
          <Paragraph>
            It doesn&#39;t take a genius to know a 70-person remake studio that
            mostly had expertise in art and engineering, not design,
            shouldn&#39;t have led a live-service. They hadn&#39;t even made
            their own single-player title since 2006&#39;s Blast Factor. So
            naturally, after 3-4 years wasted struggling to make progress, Sony
            did the inevitable and canceled the live-service in January 2025.
          </Paragraph>
          <Paragraph>
            Bluepoint leadership then continued to show their incompetence over
            the next year. While they did pitch a Bloodborne remake that
            couldn&#39;t be greenlit for reasons out of their control, their
            other pitches made no sense. For example, they pitched a PS5 version
            of their PS4 Shadow of the Colossus remake that already looks and
            plays great on PS5.
          </Paragraph>
          <Paragraph>
            Bluepoint also pitched new games around other PS Studios IP, like a
            Ghost of Tsushima spinoff. This was never happening, as studios like
            Sucker Punch didn&#39;t want to dedicate significant resources to
            another team&#39;s project when they were facing financial pressure
            themselves in such a poor economic climate. Sony rightfully turned
            these bad pitches down, and closed Bluepoint in February 2026, after
            a year of no greenlit projects.
          </Paragraph>
          <Paragraph>
            Given Bluepoint&#39;s track record up until DS, it was
            understandable to blame Sony when news of their closure first broke.
            However, as new information came to light, it&#39;s clear that
            Bluepoint&#39;s failures were mostly on their own leadership&#39;s
            ambition to pivot to original content by any means necessary. Sony,
            however, are still partly to blame, as they should&#39;ve never even
            entertained a live-service project from a studio they had just
            acquired for their remakes.
          </Paragraph>
          <Paragraph marginBottom={8}>
            At the very least, the PS5 got 1 great Bluepoint remake with DS.
            However, the train wreck after was so severe that this masterpiece
            will be more of a footnote in their history. That alone is the
            biggest indictment of how badly Bluepoint and Sony leadership
            mismanaged the studio in the PS5 era.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={Gow}
            alt="Leaked screenshot of Bend&#39;s cancelled God Of War"
            id="demons-souls"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="demons-souls" className="block text-center mb-8">
            Bend&#39;s Cancelled God Of War
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Bluepoint Games" />
    </Container>
  );
}

export default BluepointGamesPage;
