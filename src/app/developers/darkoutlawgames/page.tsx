import { Metadata } from "next";
import Image from "next/image";
import deviationGames from "../../../../public/images/dev-pages/deviation-games.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Dark Outlaw Games",
  description:
    "The history and future of Dark Outlaw Games, a first-party developer for PlayStation Studios.",
};

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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        expedita facere libero voluptates veniam recusandae dolor, harum ad?
        Quidem eaque unde distinctio nam eos necessitatibus laborum inventore
        ducimus. Amet, ex!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        expedita facere libero voluptates veniam recusandae dolor, harum ad?
        Quidem eaque unde distinctio nam eos necessitatibus laborum inventore
        ducimus. Amet, ex!
      </Paragraph>
      <Paragraph marginBottom={8}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        expedita facere libero voluptates veniam recusandae dolor, harum ad?
        Quidem eaque unde distinctio nam eos necessitatibus laborum inventore
        ducimus. Amet, ex!
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
      </ImageSection>
    </Container>
  );
}

export default DarkOutlawGamesPage;
