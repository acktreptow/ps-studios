import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import astroBot from "../../../../public/images/dev-pages/astro-bot.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
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
      <DeveloperButton developer="Asobi" urlPath="https://www.teamasobi.com/" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Team Asobi is a Tokyo-based developer that technically, was formed in
        2021. Asobi originally formed in 2012 as part of Japan Studio, but
        became independent when Japan Studio closed in 2020.
      </Paragraph>
      <Paragraph>
        Asobi are primarily known for smaller-scoped games that focus on new
        PlayStation hardware. For example, The PlayRoom to show off the
        DualShock 4 and Astro Bot Rescue Mission for PSVR. They&#39;re are also
        one of the smallest PS Studios with a headcount at around 65.
      </Paragraph>
      <Paragraph>
        So far, Asobi has released 2 PS5 games, the first being 2020&#39;s
        Astro&#39;s Playroom - a free PS5 launch title that&#39;s pre-installed.
        Its gameplay was primarily developed to show off the PS5&#39;s new
        features like haptic feedback and was very well received. Even after 4
        years, it&#39;s still one of the best uses of the DualSense and the
        game&#39;s positive reception is why Asobi survived the Japan Studio
        closure.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Asobi&#39;s next game, Astro Bot, came out very recently in September
        2024. Its nearly 4-year development cycle resulted in it being
        Asobi&#39;s biggest game to date. But most importantly, it led to an
        excellent 94 on Metacritic, making Astro Bot the highest rated game of
        2024 and tying with God of War: Ragnarök as the highest rated
        first-party PS5 game.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Astro Bot&#39;s monumental success must have come as a surprise to
            Sony. Outside of Metacritic Astro Bot also topped OpenCritic in 2024
            at 99%. Astro Bot is also officially the most awarded platform of
            all time with 195 Game of the Year nominations and wins, including
            winning Game of the Year at the 2024 Game Awards. The game has also
            sold close to 2.5 million copies and is now part of numerous PS5
            bundles. Considering its poultry development budget of around $50
            million, the game has also returned a significant profit.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Considering the unprecedented critical success, and still very good
            commercial success, the world is truly Asboi&#39;s oyster. Whatever
            they want to do next, I can&#39;t imagine Sony says no. Astro Bot
            was the blueprint for them to be successful in the current games
            market, so I just hope they stick to the gameplan and we get an
            excellent follow-up close to the end of the PS5&#39;s lifecycle in
            2027/28.
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
