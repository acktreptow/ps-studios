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
        Dark Outlaw Games is a Los Angeles-based studio that was technically
        first announced in 2025. However, their history goes deeper than one
        would expect from a developer that is less than a year old.
      </Paragraph>
      <Paragraph>
        Dark Outlaw was founded by Jason Blundell, who was the co-studio head of
        Treyarch, but before that worked on the Black Ops 1/2 campaign before
        becoming the director of Call of Duty&#39;s very popular zombies mode
        for Black Ops 3/4. However, he left Activision/Treyarch all the way back
        in 2020 to found Deviation Games with fellow COD Veteran, David Anthony.
        A year later at SGF 2021, they announced a partnership at with Sony to
        fund their first game, which would be a new IP. This would be the last
        time we saw Deviation.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Blundell left Deviation in 2022, which then followed its closure in
        2024, just after mass layoffs in 2023. During this time however, there
        were rumors that Blundell left to form an internal studio within PS
        Studios and had begun poaching Deviation employees to form what became
        Day Outlaw Games. LinkedIn profiles suggest Dark Outlaw was already up
        and running as early as June 2023.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Not much is known about Dark Outlaw as Blundell has only done one
            interview which is where the developer and its name were officially
            announced. Blundell did state that they have been staffing up for a
            while now, getting the team to gel and seeing which ideas rise to
            the top.
          </Paragraph>
          <Paragraph>
            Considering Deviation&#39;s history, however. It seems likely that
            they&#39;ll be picking up where they left off. A live-service game
            that will also be a new PlayStation IP. Based off his comments, it
            seems like the game is a ways off, which is probably a good thing.
            Considering how PlayStation&#39;s live-service strategy has gone so
            far, they need as much time as possible to figure out the mistakes
            made and react to them. Based off job lsitings, we know it is a AAA
            game.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Considering just how bad this live-service strategy has gone
            hwowever, there&#39;s just as good of a chance that Dark Outlaw goes
            the way of Deviation and closes before launching their debut game
            than it is coming out to both positive critical and commercial
            reception. As Blundell worked on the co-op focused Zombies mode
            however, hopefully they follow the blueprint of fellow co-op
            live-service game Helldivers 2 to actual success in this arena.
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
