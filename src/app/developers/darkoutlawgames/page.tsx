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
        urlPath="https://www.playstation.com/en-gb/corporate/playstation-studios/dark-outlaw-games/"
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
        March 2024. Now as Dark Outlaw, the studio is now almost certainly
        creating the PS5 game Sony originally wanted Deviation to make. But this
        time, Sony owns the team and IP making it.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Not much is known about Dark Outlaw&#39;s game as the developer
            itself has barely been brought up. In fact, since DO&#39;s
            formation, Blundell has only done one interview with an industry
            legend in a relatively niche sphere, not even an IGN, let alone a
            GQ. It was actually this interview where Dark Outlaw was officially
            announced, but the interview itself was far more focused on his
            overall career and not DO. There were some relevant remarks though.
          </Paragraph>
          <Paragraph>
            In the interview, Blundell did state that Dark Outlaw has been
            staffing up for a while, which makes sense considering people have
            been working there since at least June 2023. However, he is
            purposely slowly ramping up the game&#39;s development that will be
            AAA - instead focusing and prioritizing getting the team to gel
            first and see which of their ideas rise to the top. Considering
            Deviation&#39;s history, however. I&#39;d speculate that much of
            their final game will share a lot of the DNA of what was done with
            Deviation, which in turn probably took a lot of inspiration from
            their Black Ops work. A live-service game that will also be a new
            PlayStation IP. Based off his comments, it also seems like the game
            is a ways off, which is probably a good thing. Considering how
            PlayStation&#39;s live-service strategy has gone so far, Sony
            themselves need as much time as possible to figure out the mistakes
            made and correct them. DO also need to make sure they don&#39;t
            repeat Deviation&#39;s mistakes.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Unfortunately, considering just how bad Sony&#39;s live-service
            strategy has been executed, there&#39;s just as good of a chance
            that Dark Outlaw goes the way of Deviation and closes before
            launching their debut game than it is coming out to both positive
            critical and commercial reception. What gives me slightly more hope
            for DO over Haven&#39;s Fairgames or Bungie&#39;s Marathon however
            is Blundell&#39;s history. As Blundell led the co-op focused
            well-received Zombies modes when working on various CODs, he knows
            how to make a good co-op experience. Hopefully, he can utilize this
            history and follow the blueprint of fellow co-op live-service game
            Helldivers 2&#39;s success. This would give DO&#39;s game the best
            chance of success in the wasteland that is Sony&#39;s live-service -
            especially in the competitive multiplayer sphere.
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
            Blundell (right) announcing his previous dev/game at SGF 21
          </label>
        </div>
      </ImageSection>{" "}
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Dark Outlaw Games" />
    </Container>
  );
}

export default DarkOutlawGamesPage;
