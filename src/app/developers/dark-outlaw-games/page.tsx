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
        wanted from Deviation. However, the studio was closed in March 2026,
        before they even announced the name of their debut game.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Bluepoint&#39;s closure 2 months prior came with a lengthy internal
            message from PS Studios boss Hermen Hulst explaining why. For DO,
            Sony couldn&#39;t even dignify them with that, instead just stating
            it was for &#39;long-term sustainability&#39; when pressed for
            comment. Blundell, however, went on a livestream shortly after and
            confirmed they weren&#39;t developing a live-service, that the
            20-person studio were blindsided by the closure, and it was due to a
            shift in Sony&#39;s strategy.
          </Paragraph>
          <Paragraph>
            Fortunately, the inevitable post-closure leaks gave us real answers.
            DO&#39;s Project Ignite had a single-player campaign that was
            heavily inspired by the recent Doom trilogy&#39;s gameplay and level
            design, but it could also be played in co-op. Ignite had a horde
            mode too that utilized Blundell&#39;s COD Zombies DNA, and also
            likely took notes from Deviation&#39;s canceled game, Draconis,
            which was a third-person co-op shooter against ooze-like enemies.
          </Paragraph>
          <Paragraph>
            Unfortunately, of the 9 PS Studios closed during the PS5 era,
            DO&#39;s closure is the hardest to analyze due to their brief 1-year
            history, combined with how little Sony mentioned them. Based on the
            above, though, it&#39;s clear that Sony are now even reluctant to
            invest in titles that emphasize co-op modes, let alone live
            services, given how many of these failures they&#39;ve had on PS5,
            and want to cut their losses before a multiplayer project can become
            a Concord-level mistake.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Furthermore, while it&#39;s easy to see why DO were targeted in this
            economic climate, as they were one of the smallest sunk costs due to
            Ignite&#39;s 1-year development, this mistake really dates back to
            Deviation in 2021. Taken as a whole then, DO are still further
            evidence that Sony&#39;s acquisition spree and willingness to pursue
            inorganic growth during the PS5 era was ill-fated.
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
