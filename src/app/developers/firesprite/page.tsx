import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import horizonCOTM from "../../../../public/images/dev-pages/horizon-call-of-the-mountain.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Firesprite",
  description:
    "The history and future of Firesprite, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function FirespritePage(): JSX.Element {
  return (
    <Container>
      <Title title="Firesprite" />
      <DeveloperButton
        developer="Firesprite"
        urlPath="https://firesprite.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2012, Firesprite is a Liverpool-based developer formed by
        ex-Studio Liverpool (previously Psygnosis) employees, which Sony closed
        only weeks prior to reduce headcount in the EU. Firesprite&#39;s first
        major game was 2018&#39;s The Persistence, which launched on PS4 as well
        as Xbox One and Nintendo Switch since Sony wouldn&#39;t acquire
        Firesprite until 2021.
      </Paragraph>
      <Paragraph marginBottom={8}>
        So far, Firesprite has released two PS5 games - an enhanced port of The
        Persistence in 2021, and flagship PSVR2 launch title Horizon Call of
        the Mountain in 2023. Neither was particularly well received,
        critically or commercially. In fact, Firesprite has the lowest average
        Metacritic score out of the PS Studios developers who&#39;ve
        shipped a PS5 title.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Firesprite hasn&#39;t announced anything since Horizon launched
            alongside PSVR2. Most likely due to their dire situation,
            post-acquisition.
          </Paragraph>
          <Paragraph>
            Crunch was necessary to ship Horizon VR. Additionally, all but one
            founder and many other staff left once retention bonuses were paid
            out. Layoffs then took place a year later, after reports that
            Firesprite&#39;s unannounced live-service Twisted Metal game was
            cancelled.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Since then, Firesprite has been linked to a sequel to PS4&#39;s
            Until Dawn, which was remade on PS5 in 2024 and included a new
            ending teasing it. However, between layoffs, loss of leadership,
            cancellations, the remake&#39;s poor sales, and none of
            Firesprite&#39;s games receiving above 80 on Metacritic, it&#39;s
            unlikely that Until Dawn 2 will succeed commercially or critically.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={horizonCOTM}
            alt="Horizon Call of the Mountain opening"
            id="horizon-cotm"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="horizon-cotm" className="block text-center mb-8">
            Horizon COTM On PSVR2
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Firesprite" />
    </Container>
  );
}

export default FirespritePage;
