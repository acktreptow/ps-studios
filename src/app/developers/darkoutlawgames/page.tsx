import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import deviationGames from "../../../../public/images/dev-pages/deviation-games.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Dark Outlaw Games",
  description:
    "The history and future of Dark Outlaw Games, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function DarkOutlawGamesPage(): JSX.Element {
  return (
    <Container>
      <Title title="Dark Outlaw Games" />
      <DeveloperButton
        developer="Dark Outlaw"
        urlPath="https://www.playstation.com/corporate/playstation-studios/dark-outlaw-games/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Dark Outlaw Games is a LA-based developer that was first acknowledged in
        2025, but its history starts years prior. DO was founded by Jason
        Blundell, who was co-studio head of Treyarch until 2020. He&#39;s best
        known for directing Campaign and Zombies modes in Black Ops 3/4, but his
        history with the IP began with 2006&#39;s COD3. Due to this pedigree, he
        was able set up his own studio within 1 year... Deviation Games.
      </Paragraph>
      <Paragraph>
        At SGF 2021, he and fellow COD veteran David Anthony announced Deviation
        and a Sony partnership to fund their new AAA shooter IP. However, this
        was the last time we&#39;d hear from Deviation, which closed in March
        2024. Sony pulled funding around the time Blundell left in 2022 - likely
        to form Dark Outlaw within PS Studios. According to LinkedIn, poaching
        of Deviation employees then began around early 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Regardless of what happened at Deviation for Sony to pull funding, they
        clearly believed Blundell wasn&#39;t the founder causing an issue.
        Especially as Anthony has been self-employed since Deviation closed. Now
        as Dark Outlaw, Blundell&#39;s studio is almost certainly creating the
        PS5 game Sony originally wanted from Deviation. But this time, Sony owns
        both the team and IP.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Little is known about Dark Outlaw as it&#39;s only been discussed
            once, in an interview about Blundell&#39;s whole career. They&#39;re
            hiring up, while slowly ramping development and prioritizing team
            cohesion so the best ideas naturally rise. Considering the history,
            DO&#39;s title will likely resemble Deviation&#39;s game, which
            based off its futuristic sci-fi concept art, was inspired by Black
            Ops 3/4.
          </Paragraph>
          <Paragraph>
            While it&#39;s a GaaS, there&#39;s also still reasons for optimism
            compared to other Sony live-service titles. DO&#39;s title is still
            years away, which is advantageous because Sony can analyze any
            mistakes made with upcoming live-services like Fairgames/Marathon
            and not repeat them. Blundell also has time to reflect on Deviation
            and ensure mistakes aren&#39;t repeated at Dark Outlaw.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Blundell&#39;s recent co-op-focused career with COD Zombies also
            compares favorably to the competitive games just mentioned.
            Helldivers 2&#39;s adamance on no PvP was a big reason why it&#39;s
            Sony&#39;s one live-service that succeeded. So the more DO leans
            into the co-op blueprint, the stronger the chance their game has to
            succeed.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={deviationGames}
            alt="Deviation Games SGF 2021 announcement"
            id="deviation-games"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="deviation-games" className="block text-center mb-8">
            Deviation Games At SGF 2021
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Dark Outlaw Games" />
    </Container>
  );
}

export default DarkOutlawGamesPage;
