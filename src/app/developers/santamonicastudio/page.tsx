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
            While Santa Monica Studio continued to support Ragnarok with a PS5
            Pro patch, a PC version and free Valhalla epilogue expansion, we
            don&#39;t know what SM&#39;s next game is other than it being in
            third-person. There&#39;s rumors that predict a new IP, a sequel to
            Ragnarök, and a smaller-scoped GoW game in the vein of Spider-Man
            Miles-Morales.
          </Paragraph>
          <Paragraph>
            Regardless of what it is, there&#39;s no reason to be skeptical. For
            many, SMS&#39;s last two games were so critically acclaimed that
            they usurped Naughty Dog as PlayStation&#39;s premier studio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Ragnarök did only ship 2.5 years ago though, with Valhalla coming
            1.5 years ago so it&#39;s unlikely they&#39;ll be talking about
            their next game any time soon. There&#39;s many PS Studios that need
            to talk first before SMS feel any pressure.
          </Paragraph>
        </div>
        <div>
          <Image
            src={gowRagnarok}
            alt="God of War Ragnarok awards won"
            id="gow-ragnarok"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="gow-ragnarok"
            className="block text-center mb-8 md:ml-5"
          >
            Ragnarök&#39;s 6 The Game Awards Trophies
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Santa Monica Studio" />
    </Container>
  );
}

export default SantaMonicaStudioPage;
