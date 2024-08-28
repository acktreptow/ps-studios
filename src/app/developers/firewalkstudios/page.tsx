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
        It&#39;s a 70&#39;s aesthetic sci-fi live-service 5vs5 PVP shooter that
        released on PS5 and PC in August 2024.
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
            Unfortunately for Firewalk, the beta in July actually worsened this
            perception. The story and design of the characters were mostly
            negative and the gameplay, though fun, was not good enough to
            justify its $40 price tag. Especially comapared to its F2P
            competitors like Fortnite and Apex Legends.
          </Paragraph>
          <Paragraph marginBottom={8}>
            All this led to historically poor launch for Sony, both commercially
            and critically. It currently has the lowest Metacritic score for a
            first-party PS5 game at 65. But its sales are even worse, peaking at
            just 697 concurrent players on Steam and now can even crack over 250
            players less than a week after launch. The game is already
            completely DOA and Firewalk will need to find a way to pivot fast if
            it hopes to survive.
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
