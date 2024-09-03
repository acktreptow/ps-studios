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
        of popular multiplayer shooters like Halo and Destiny.
      </Paragraph>
      <Paragraph>
        With this prestige multiplayer expertise and Sony&#39;s increased focus
        on live-service games for PS5 & PC, it&#39;s therefore no surprise they
        acquired Firewalk in early 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Firewalk then announced their first game, Concord, shortly after.
        It&#39;s a 70&#39;s aesthetic sci-fi live-service 5vs5 shooter that
        released on PS5 and PC in August 2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            It wasn&#39;t until May 2024 before we actually saw Concord with a
            story and a gameplay trailer - both were horrendously received. The
            story was seen as a poor clone of Guardians of the Galaxy and the
            hero shooter gameplay was seen as a worse Overwatch.
          </Paragraph>
          <Paragraph>
            The playable betas in July then worsened this perception. The story
            and design of the characters were universally negative and the
            gameplay, though fun, was not good enough to justify its $40 price
            tag. Especially compared to its F2P competitors like Fortnite and
            Overwatch 2.
          </Paragraph>
          <Paragraph>
            This led to a historically poor launch for Sony. It&#39;s tied with
            Firewall Ultra as the worst reviewed PS Studios PS5 game on
            Metacritic at 62, and its commercial failure is even larger.
          </Paragraph>
          <Paragraph>
            Concord peaked at 697 concurrent players on Steam and can&#39;t even
            crack 200 concurrent players a week after launch. It&#39;s estimated
            to have sold 25k copies between PC and PS5, totalling less than $1
            million in revenue despite a roughly $200 million budget.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Concord is not only already completely DOA, but it might go down as
            PlayStation Studios&#39; worst selling AAA game of all time.
            Firewalk will need to find a way to pivot fast if it hopes to
            survive.
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
