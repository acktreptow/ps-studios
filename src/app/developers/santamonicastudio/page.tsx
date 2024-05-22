import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gowRagnarok from "../../../../public/images/dev-pages/gow-ragnarok.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
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
      <SubTitle subtitle="History" />
      <Paragraph>
        Santa Monica Studio is an LA-based developer founded in 1999. Outside of
        its first game, 2001&#39;s Kinetica, the studio has exclusively
        developed games for its very successful God of War series.
      </Paragraph>
      <Paragraph marginBottom={8}>
        SM&#39;s most recent game was 2022&#39;s God of War Ragnarök - a
        cross-gen title and the only game they&#39;ve released on the PS5. Like
        the 2018 semi-reboot, it was a monumental critical and commercial
        success.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            As of now, we don&#39;t know what SM&#39;s next game is other than
            it being in third-person. There&#39;s rumours that predict a new IP,
            a sequel to Ragnarök, and a smaller-scoped GoW game in the vein of
            Spider-Man Miles-Morales.
          </Paragraph>
          <Paragraph>
            Regardless of what it is, there&#39;s no reason to think it
            won&#39;t be great. To many, SM&#39;s last two games were so
            critically acclaimed that they usurped Naughty Dog as Sony&#39;s
            premier studio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Ragnarök did only ship 1.5 years ago though, so don&#39;t expect to
            hear anything soon. There&#39;s A LOT of PS studios that need to
            talk before SM, as they&#39;re going on 4-5 years without a shipped
            game.
          </Paragraph>
        </div>
        <div>
          <Image
            src={gowRagnarok}
            alt="God of War Ragnarok awards won"
            width={500}
            height={500}
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
