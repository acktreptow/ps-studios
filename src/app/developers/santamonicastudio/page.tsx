import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gowRagnarok from "../../../../public/images/dev-pages/gow-ragnarok.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Santa Monica Studio",
  description:
    "The history and future of Santa Monica Studio, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function SantaMonicaStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Santa Monica Studio" />
      <DeveloperButton
        developer="Santa Monica"
        urlPath="https://sms.playstation.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Santa Monica Studio is an LA-based developer founded in 1999. Outside of
        its first game, 2001&#39;s Kinetica, the studio has exclusively
        developed for its popular God of War series. They did act as a
        publisher/incubator for indie game studios, like 2012&#39;s Journey from
        Thathamecompany, but this was stopped in 2016.
      </Paragraph>
      <Paragraph marginBottom={8}>
        SMS&#39;s most recent game is 2022&#39;s God of War Ragnarök - a
        cross-gen title and the only game they&#39;ve shipped on PS5. Like the
        2018 semi-reboot, it was a monumental critical and commercial success.
        It ties Astro Bot as the highest-rated first-party game PS5 game on
        Metacritic with 94 and is the fastest-selling first-party game in
        PlayStation history, selling 5.1 million units in its first week.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            While Santa Monica Studio continued to support Ragnarök with a PS5
            Pro patch, a PC version and a free Valhalla expansion, we don&#39;t
            know their next game. Currently, rumors predict a new IP, a Ragnarök
            sequel, a God of War 2005 remake, or a smaller game like SM:  Miles
            Morales.
          </Paragraph>
          <Paragraph>
            Many of these rumors could pan out to be true, but regardless of
            which comes first, there&#39;s no reason to be skeptical. For many,
            SMS&#39;s last two games were so critically acclaimed that they
            usurped Naughty Dog as PlayStation&#39;s premier studio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Ragnarök shipped 2.5 years ago, so there&#39;s a 50% chance
            SMS reveal their next game in 2025. There&#39;s many PS Studios that
            must talk first before SMS feel any pressure though.
          </Paragraph>
        </div>
        <div>
          <Image
            src={gowRagnarok}
            alt="The awards God of War Ragnarök won"
            id="gow-ragnarok"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="gow-ragnarok"
            className="block text-center mb-8 md:ml-5"
          >
            Ragnarök&#39;s 6 Game Awards Trophies
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Santa Monica Studio" />
    </Container>
  );
}

export default SantaMonicaStudioPage;
