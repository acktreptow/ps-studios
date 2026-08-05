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
        Dark Outlaw Games were an LA-based developer first revealed in 2025, but
        their history started years prior. DO was founded by Jason Blundell, who
        was co-studio head of Treyarch until 2020. He&#39;s best known for
        directing Campaign and Zombies modes in Black Ops 3/4, but his history
        with the IP began with 2006&#39;s COD3. Due to this pedigree, he was
        able to set up his own studio, Deviation Games.
      </Paragraph>
      <Paragraph>
        At Summer Game Fest 2021, he and fellow COD veteran David Anthony
        announced Deviation and a Sony partnership to fund their new AAA shooter
        IP. However, this was the last we&#39;d hear from Deviation, which
        closed in March 2024. Sony pulled funding around when Blundell left in
        2022, likely so he could form DO within PS Studios. Poaching from
        Deviation then began around early 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        As DO, Blundell&#39;s studio (Anthony has been self-employed since
        Deviation closed) was almost certainly creating the PS5 title Sony
        wanted from Deviation. However, the studio was closed in
        March 2026, before they even announced the name of their game.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Little is known about Dark Outlaw as it&#39;s only been briefly
            discussed by Blundell. They&#39;re hiring up, while slowly ramping
            development and prioritizing team cohesion so the best ideas
            naturally rise. Considering the history, DO&#39;s title will likely
            resemble Deviation&#39;s game, which based on its sci-fi concept art
            and leaked gameplay, was inspired by COD Zombies, but in 3rd-person.
          </Paragraph>
          <Paragraph>
            While it&#39;s a GaaS, there&#39;s also still reasons for optimism
            compared to other Sony live-service titles. DO&#39;s title is still
            years away, which is advantageous because Sony can analyze mistakes
            made with upcoming live-services like Fairgames/Marathon and not
            repeat them. Blundell also has time to reflect on Deviation and
            ensure those mistakes aren&#39;t repeated.
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
    </Container>
  );
}

export default DarkOutlawGamesPage;
