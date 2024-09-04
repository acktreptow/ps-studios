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
            and character design were universally negative and the gameplay,
            though fun, was not good enough to justify its $40 price tag.
            Especially compared to its F2P competitors like Fortnite.
          </Paragraph>
          <Paragraph>
            This led to a historically poor launch for Sony. It&#39;s tied with
            Firewall Ultra as the worst reviewed PS Studios PS5 game on
            Metacritic at 62, and its commercial failure is even larger.
          </Paragraph>
          <Paragraph>
            Concord peaked at 697 concurrent players on Steam and sold roughly
            25k copies between PC and PS5, totalling less than $1 million in
            revenue despite an estimated $200 million budget. This result was so
            bad that PlayStation decided to take the game off the PS Store and
            refund all purchases on September 3rd. Only 11 days after Concord
            launched.
          </Paragraph>
          <Paragraph marginBottom={8}>
            This was a monumental move for PlayStation as it&#39;s the first
            time a PlayStation Studios game has ever been delisted so close to
            its launch. Firewalk claims they are exploring options on how to
            bring back Concord in a way that resonates, but there is no
            guarantee it comes back at all. Regardless, Firewalk needs to find a
            way to pivot fast if it hopes to survive.
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
