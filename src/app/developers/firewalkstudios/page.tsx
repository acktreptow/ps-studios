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
        of popular shooters like Halo and Destiny. With this prestige multiplayer expertise and Sony&#39;s 
        increased focus on live-service games for PS5 & PC, it&#39;s therefore no surprise they
        acquired Firewalk in early 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Firewalk then announced their first game, Concord, shortly after.
        It&#39;s a sci-fi 5vs5 live-service shooter that
        released on PS5 and PC in August 2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            It wasn&#39;t until May 2024 before we actually saw Concord, via trailers that had the story and gameplay
           look like a Temu Guardians of the Galaxy and Overwatch respectively.
          </Paragraph>
          <Paragraph>
            The playable betas in July didn&#39;t help either. Character designs were universally negative 
            and the gameplay wasn&#39;t good enough to justify $40.
            Especially compared to its F2P competitors like Fortnite.
          </Paragraph>
          <Paragraph>
            This led to a historically poor launch for Sony. It&#39;s tied with
            Firewall Ultra as the worst reviewed PS Studios PS5 game on
            Metacritic at 62 and only sold 25k copies. Totalling around $1 million in revenue
            despite a $200 million+ budget.
          </Paragraph>
          <Paragraph>
            This result was so bad that on September 3rd, 11 days after Concord
            launched, PlayStation removed it off all storefronts and refunded
            all purchases. A monumental move for Sony as it&#39;s the first time
            a PlayStation Studios game has ever been refunded due to its
            reception.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Firewalk were exploring options on how to bring back Concord in a way
            that resonates, but on October 29th, Firewalk was officially shut down along with
            confirmation that Concord will not be returning.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
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
