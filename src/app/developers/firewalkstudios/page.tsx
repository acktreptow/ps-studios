import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import concord from "../../../../public/images/dev-pages/concord.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
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
      <SubTitle subtitle="History" />
      <Paragraph>
        Firewalk was founded in Washington, in 2018. Its founders are
        experienced veterans of popular multiplayer shooters, having worked on
        Halo and Destiny.
      </Paragraph>
      <Paragraph>
        With this expertise and Sony&#39;s increased focus on live-service
        multiplayer games for PS5, it&#39;s no surprise they acquired Firewalk
        in 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Firewalk then announced their first game: Concord. A live-service PVP
        shooter with an 80&#39;s sci-fi aesthetic. It launches on PS5 and PC in
        2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Everything we know about Concord is written above, so there&#39;s
            not a lot to go off. However, the pedigree of Firewalk&#39;s
            founders instills confidence.
          </Paragraph>
          <Paragraph>
            They know how to make a good shooter, so I&#39;m cautiously
            optimistic until we see something that proves otherwise. At least
            when it comes to the gameplay.
          </Paragraph>
          <Paragraph>
            Concord has recently been reconfirmed for a 2024 release, so we
            <span className="italic">should</span> see something substantial
            soon.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Update: May 30, 2024 - Firewalk released 2 trailers for Concord at
            PlayStation&#39;s State of Play. A CG story trailer and a gameplay
            trailer. Both were not well received. Firealk did also announced the
            release date of August 23 though, so it won&#39;t be long until we
            find out how good Concord is ourselves.
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
