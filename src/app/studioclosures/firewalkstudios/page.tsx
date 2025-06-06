import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
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
        of popular shooters like Halo and Destiny. With this prestige
        multiplayer expertise and Sony&#39;s increased focus on live-service
        games for PS5 & PC, it&#39;s therefore no surprise they acquired
        Firewalk in early 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Firewalk then announced their first game, Concord, shortly after.
        It&#39;s a sci-fi 5vs5 live-service shooter that released on PS5 and PC
        in August 2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            It wasn&#39;t until May 2024 before we actually saw Concord, via
            trailers that had the story and gameplay resemble a Temu Guardians
            of the Galaxy and Overwatch respectively.
          </Paragraph>
          <Paragraph>
            The playable betas in July didn&#39;t help either. Character designs
            were universally negative and the gameplay wasn&#39;t good enough to
            justify $40. Especially compared to its F2P competitors like
            Fortnite.
          </Paragraph>
          <Paragraph>
            This all led to a historically poor launch for Sony. It&#39;s tied
            with Firewall Ultra as the worst reviewed PS Studios PS5 game on
            Metacritic at 62 and only sold 25k copies. Totalling around $1
            million in revenue despite a $200 million+ budget.
          </Paragraph>
          <Paragraph>
            It was so bad that Sony removed Concord from sale and refunded all
            purchases just 11 days later. Firewalk explored options on how to
            bring back Concord in a way that resonates, but on October 29th,
            Firewalk was shut down along with confirmation that Concord
            won&#39;t return.
          </Paragraph>
          <Paragraph marginBottom={8}>
            This was the first time Sony refunded a game due to its reception.
            It also resulted in over $200 million in losses and led to Firewalk
            closing. Concord and Firewalk are therefore easily the biggest PS
            Studios disappointment of the PS5 era.
          </Paragraph>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Firewalk Studios" />
    </Container>
  );
}

export default FirewalkStudiosPage;
