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
        Dark Outlaw Games is a Los Angeles-based developer that was publicly
        acknowledged in 2025. However, their history goes back much further
        despite the recent announcement. Founded by Jason Blundell, who was
        co-studio head of Treyarch until 2020, he&#39;s best known for directing
        the Campaign and Zombies modes in Black Ops 3 and 4. Considering his
        pedigree on the Call of Duty IP, which dates back to 2006&#39;s COD3,
        it&#39;s not surprising we&#39;d see his new studio so quickly…
        Deviation Games.
      </Paragraph>
      <Paragraph>
        At SGF 2021, he and fellow COD veteran David Anthony announced Deviation
        along with a Sony partnership to fund their first game - a new AAA IP
        that&#39;s inspired by their COD history. However, this was the last
        time we&#39;d publicly hear from Deviation as they closed in March 2024.
      </Paragraph>
      <Paragraph>
        It was never officially stated why Deviation closed. But whatever issues
        there were, it was bad enough for Sony to pull funding. Blundell also
        left much earlier in 2022 - reportedly to form a new studio as part of
        PS Studios, which we eventually came to know as Dark Outlaw. According
        to LinkedIn profiles, the studio has been up and running since at least
        June 2023. Staffed up by a significant number of ex-Deviation employees.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Regardless of what really went wrong inside Deviation, Sony clearly
        believed Blundell was not the founder causing the issue. Especially as
        the other co-founder has been self-employed since Deviation shut in
        March 2024. Now as Dark Outlaw, the studio is almost certainly creating
        the PS5 game Sony originally wanted Deviation to make. But this time,
        Sony owns the team and IP making it.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Not much is known about Dark Outlaw&#39;s game because the developer
            has only been publicly mentioned once, in an interview primarily
            about Blundell&#39;s career history. Dark Outlaw only got a brief
            mention, but it fortunately included relevant information.
          </Paragraph>
          <Paragraph>
            Blundell stated that Dark Outlaw has been staffing up for a while,
            which makes sense considering he left Deviation in 2022. He&#39;s
            also slowly ramping up development while prioritizing getting the
            team to gel first, which allows the best ideas to naturally come to
            light. Considering the history however, I speculate that much of the
            final game will still closely resemble their original Deviation
            project. Which in turn likely took many ideas from Black Ops 3 and
            4. Finally, we know it&#39;s a live-service game, but there&#39;s
            reasons for optimism compared to most of Sony&#39;s live-service
            push.
          </Paragraph>
          <Paragraph>
            Based on Blundell&#39;s comments, the game is still years away. This
            is an advantageous position as Sony can analyze any mistakes made
            with upcoming live-service games like Fairgames/Marathon and
            (hopefully) not repeat them. Blundell also has time to reflect on
            mistakes made at Deviation and ensure these aren&#39;t repeated at
            Dark Outlaw.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Blundell&#39;s co-op-focused history with multiple COD Zombies modes
            also has his new game comparing favorably to the competitive-focused
            games just mentioned. Helldivers 2&#39;s adamance on no PVP was a
            big reason why it was the one Sony live-service game that succeeded,
            so the more he leans into the co-op blueprint, the stronger the
            chance his new game has to succeed.
          </Paragraph>
        </div>
        <div>
          <Image
            src={deviationGames}
            alt="Deviation Games Announcement"
            id="deviation-games"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="deviation-games" className="block text-center">
            Deviation Games Announcement At SGF 2021
          </label>
        </div>
      </ImageSection>{" "}
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Dark Outlaw Games" />
    </Container>
  );
}

export default DarkOutlawGamesPage;
