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
        2021. They actually formed in 2012 within Japan Studio, but became
        independent when JS closed. With a small headcount of around 65, Asobi
        develop smaller games that showcase new PlayStation hardware. Like
        2013&#39;s The PlayRoom for DualShock 4 and 2018&#39;s Astro Bot Rescue
        Mission for PSVR.
      </Paragraph>
      <Paragraph>
        So far, Asobi has released 2 PS5 games. 2020&#39;s Astro&#39;s Playroom
        was a free, pre-installed PS5 launch title with gameplay showcasing new
        PS5 features like haptic feedback. Even after 4 years, it&#39;s still
        one of the best uses of the DualSense. The game&#39;s positive reception
        is also why Asobi survived Japan Studio&#39;s closure.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Asobi&#39;s next game, Astro Bot, launched in September 2024. This near
        4-year development cycle resulted in it being Asobi&#39;s biggest game
        to date. But most importantly, it led to monumental critical and
        commercial success that no one saw coming.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Critically, Astro Bot achieved a 94 on Metacritic, making it the
            highest rated game of 2024 and tying GoW: Ragnarök as the highest
            rated first-party PS5 game. Astro Bot is also the most awarded
            platformer of all time, including winning Game of the Year at the
            2024 Game Awards. Commercially, it&#39;s sold 2.5 million copies and
            is now part of PS5 bundles. Considering its $50 million budget,
            Astro Bot has returned tens of millions in profit.
          </Paragraph>
          <Paragraph marginBottom={8}>
            The world is Asboi&#39;s oyster after this unprecedented success. So
            whatever they want to do next, it&#39;s unlikely Sony says no. With
            Astro Bot as the blueprint, I predict Asobi sticks to it and release
            a worthy follow-up near the end of the PS5&#39;s lifecycle in
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
