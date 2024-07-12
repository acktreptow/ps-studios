import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import concord from "../../../../public/images/dev-pages/concord.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Firewalk Studios",
  description:
    "The history and future of Firewalk Studios, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function FirewalkStudiosPage(): JSX.Element {
  return (
    <Container>
      <Title title="Firewalk Studios" />
      <DeveloperButton
        developer="Firewalk"
        urlPath="https://firewalkstudios.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        This Washington-based developer was founded in 2018 by senior veterans
        of popular multiplayer shooters, who had previously worked on Halo and
        Destiny.
      </Paragraph>
      <Paragraph>
        With this prestige multiplayer expertise and Sony&#39;s increased focus
        on live-service games for PS5, it&#39;s therefore no surprise they
        acquired Firewalk in 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Firewalk then announced their first game, Concord, shortly after.
        It&#39;s a 70&#39;s aesthetic sci-fi live-service 5vs5 PVP shooter
        coming to PS5 and PC in 2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            It took over a year, but we finally got an in-depth look at Concord
            in May 2024 with a CG story trailer and a gameplay one - both were
            very poorly received.
          </Paragraph>
          <Paragraph>
            The story was seen as a poor clone of Marvel writing - specifically
            Guardians of the Galaxy. The hero shooter gameplay was seen as a
            poor clone of Overwatch.
          </Paragraph>
          <Paragraph>
            Despite this underwhelming deep dive though, I still have some
            confidence due to the pedigree of Firewalk&#39;s founders. They know
            how to make a good shooter, at least when it comes to gameplay.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Fortunately, we don&#39;t have to wait too long to play Concord
            ourselves. It has a beta in July and releases on August 23 for only
            $34.99. So for now, I&#39;ll be cautiously optimistic until July.
          </Paragraph>
        </div>
        <div>
          <Image
            src={concord}
            alt="Concord key art"
            id="concord"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concord" className="block text-center mb-8">
            Concord Primary Key Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Firewalk Studios" />
    </Container>
  );
}

export default FirewalkStudiosPage;
