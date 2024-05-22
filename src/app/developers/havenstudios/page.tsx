import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import jadeRaymond from "../../../../public/images/dev-pages/jade-raymond.png";
import fairGames from "../../../../public/images/dev-pages/fairgames.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Haven Studios",
  description:
    "The history and future of Haven Studios, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function HavenStudiosPage(): JSX.Element {
  return (
    <Container>
      <Title title="Haven Studios" />
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="History" />
          <Paragraph>
            This Montreal-based developer was founded in 2021 by Jade Raymond -
            one of the creators of Assassin&#39;s Creed. Raymond was at Google
            beforehand, but left once they stopped supporting their cloud-based
            console &#39;Stadia&#39;.
          </Paragraph>
          <Paragraph>
            Raymond then took this cloud infrastructure knowledge to Haven,
            which caught the attention of Sony. They immediately started funding
            their first game and acquired Haven a year later.
          </Paragraph>
          <Paragraph marginBottom={8}>
            This game turned out to be FairGame$. A live service competitive
            heist shooter that will launch simultaneously on PS5 and PC. It
            currently has no release date.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={jadeRaymond}
            alt="Picture of Jade Raymond"
            width={500}
            height={500}
            id="jade-raymond"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-sm"
          />
          <label
            htmlFor="jade-raymond"
            className="block text-center mb-8 lg:ml-5"
          >
            Haven Studios Founder Jade Raymond
          </label>
        </div>
      </ImageSection>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            We haven&#39;t seen Fairgame$ since the first trailer, which even
            then was only CGI. Haven is also a new studio, and the first to
            emphasize the cloud. It&#39;s therefore hard to predict how
            Fairgame$ will do, but I&#39;m optimistic.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Mark Cerny, architect of the PS5, has taken an interest in Haven and
            is assisting with Fairgame$ and general R&D. Between his interest
            and Sony investing so quickly, I&#39;m cautiously confident despite
            a lack of concrete info.
          </Paragraph>
        </div>
        <div>
          <Image
            src={fairGames}
            alt="Fairgames CGI trailer thumbnail"
            width={500}
            height={500}
            id="fairgames"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="fairgames" className="block text-center mb-8">
            Fairgame$ Only Has A CGI Trailer
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Haven Studios" />
    </Container>
  );
}

export default HavenStudiosPage;
