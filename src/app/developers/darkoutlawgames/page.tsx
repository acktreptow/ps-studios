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
        founded in 2025. However, their history goes deeper than one would
        expect from a developer that is less than a year old.
      </Paragraph>
      <Paragraph>
        Dark Outlaw was founded by Jason Blundell, who is well known for his
        work on Call of Duty&#39;s very popular zombies mode. However, he left
        Activision/Treyarch all the way back in 2020 to found Deviation Games
        with fellow COD Veteran, David Anthony. A year later at SGF 2021, they
        announced a partnership at with Sony to fund their first game, which
        would be a new IP. This would be the last time we saw Deviation.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Blundell left Deviation in 2022, which then followed its unofficial
        closure in 2024. During this time however, there were rumors that
        Blundell left to form an internal studio within PS Studios and had begun
        poaching Deviation employees to form what became Day Outlaw Games.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
          </Paragraph>
          <Paragraph marginBottom={8}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
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
