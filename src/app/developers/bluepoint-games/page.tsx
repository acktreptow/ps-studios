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
