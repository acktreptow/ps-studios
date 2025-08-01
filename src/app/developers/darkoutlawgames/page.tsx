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
        Dark Outlaw Games is a LA-based developer that was publicly acknowledged
        in 2025. However, its history starts years before the recent
        announcement. Founded by Jason Blundell, who was co-studio head of
        Treyarch until 2020, he&#39;s best known for directing the Campaign and
        Zombies modes in Black Ops 3 and 4. Considering his pedigree on Call of
        Duty, which dates back to 2006&#39;s COD3, it&#39;s not surprising
        we&#39;d see his new studio so quickly… Deviation Games.
      </Paragraph>
      <Paragraph>
        At SGF 2021, he and fellow COD veteran David Anthony announced Deviation
        along with a Sony partnership to fund their first game - a new AAA
        shooter IP. However, this was the last time we&#39;d publicly hear from
        Deviation, which closed in March 2024. While reasons for closure were
        never made public, it was serious enough for Sony to pull funding.
        Blundell also left much earlier, in 2022 - reportedly to form Dark
        Outlaw as part of PS Studios. LinkedIn profiles suggest that he poached
        many ex-Deviation employees and has been operating since early 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Regardless of what really went wrong inside Deviation, Sony clearly
        believes Blundell wasn&#39;t the founder causing the issue. Especially
        as the other co-founder has been self-employed since Deviation closed.
        Now as Dark Outlaw, the studio is almost certainly creating the PS5 game
        Sony originally wanted Deviation to make. But this time, Sony owns the
        team and IP.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Little is known about Dark Outlaw&#39;s game because they&#39;ve
            only been publicly mentioned once, in an interview primarily about
            Blundell&#39;s career history. The studio just got a brief mention,
            but it fortunately included relevant information.
          </Paragraph>
          <Paragraph>
            Blundell stated that Dark Outlaw has been staffing up for a while,
            slowly ramping up development, and prioritizing team cohesion to
            ensure the best ideas naturally come to light. Considering his
            history, I speculate that much of the final game will closely
            resemble the original Deviation project, which likely took
            inspiration from Black Ops 3 and 4. Finally, while it&#39;s a
            live-service game, there are reasons for optimism compared to most
            of Sony&#39;s live-service push.
          </Paragraph>
          <Paragraph>
            Based on Blundell&#39;s comments, the game is still years away. This
            is an advantageous position as Sony can analyze any mistakes made
            with upcoming live-service games like Fairgames/Marathon and
            (hopefully) not repeat them. Blundell also has time to reflect on
            mistakes made at Deviation and ensure they aren&#39;t repeated at
            Dark Outlaw.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Blundell&#39;s co-op-focused career with COD Zombies also compares
            favorably to the competitive-focused games just mentioned.
            Helldivers 2&#39;s adamance on no PvP was a big reason why it&#39;s
            the one Sony live-service game that succeeded, so the more he leans
            into the co-op blueprint, the stronger the chance his new game has
            to succeed.
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
