import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gummyBears from "../../../../public/images/dev-pages/gummy-bears.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "teamLFG",
  description:
    "The history and future of teamLFG, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function TeamLFGPage(): JSX.Element {
  return (
    <Container>
      <Title title="teamLFG" />
      <DeveloperButton
        developer="teamLFG"
        urlPath="https://www.playstation.com/corporate/playstation-studios/teamlfg/"
      />
      <SubTitle subtitle="History" />
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
      <ImageSection flexOnMdScreens={false}>
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
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gummyBears}
            alt="Gummy Bears concept art"
            id="gummy-bears"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="gummy-bears" className="block text-center mb-8">
            The Only Concept Art Of Project Gummy Bears Currently
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="teamLFG" />
    </Container>
  );
}

export default TeamLFGPage;
