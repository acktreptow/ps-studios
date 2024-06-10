import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import astroBot from "../../../../public/images/dev-pages/astro-bot.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Team Asobi",
  description:
    "The history and future of Team Asobi, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function TeamAsobiPage(): JSX.Element {
  return (
    <Container>
      <Title title="Team Asobi" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Team Asobi is a Tokyo-based developer that technically, was formed in
        2021. Asobi originally formed in 2012 as part of Japan Studio, but
        became independent when Japan Studio closed in 2020.
      </Paragraph>
      <Paragraph>
        They&#39;re known for smaller-scoped games that focus on new PlayStation
        hardware. For example, The PlayRoom to show off the DualShock 4 and
        Astro Bot Rescue Mission for PSVR.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Their most recent game is Astro&#39;s Playroom. A free PS5 launch title
        that comes pre-installed. Its gameplay was developed in a way to show
        off the PS5&#39;s new features like haptic feedback.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite Astro&#39;s Playroom releasing over three years ago, it took
            until May 2024 for Team Asobi to announce their next game - simply
            called Astro Bot.
          </Paragraph>
          <Paragraph>
            The rumors of its scope and quick release also proved to be true.
            Astro Bot is their biggest game yet and is releasing on September 6.
          </Paragraph>
          <Paragraph>
            Astro&#39;s Playroom was an incredible game that even after hundreds
            of PS5 games later, still has made the best use of the DualSense.
            It&#39;s why Asobi survived the Japan Studio closure.
          </Paragraph>
          <Paragraph>
            With Astro Bot also having double the development time, there&#39;s
            every reason to believe it will be a great game that diversifies
            Sony&#39;s portfolio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Pour one out for PSVR2 though - Astro Bot is confirmed to not have a
            VR mode. A very bad sign for the future of PSVR2.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={astroBot}
            alt="Team Asobi with their mascot Astro Bot"
            id="astro-bot"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="astro-bot" className="block text-center mb-8">
            Team Asobi With Mascot Astro Bot
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Team Asobi" />
    </Container>
  );
}

export default TeamAsobiPage;
