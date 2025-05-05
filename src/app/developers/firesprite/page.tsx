import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import horizonCoTM from "../../../../public/images/dev-pages/horizon-call-of-the-mountain.png";
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
        ex-members of first-party developer Sony Liverpool, which closed weeks
        prior.
      </Paragraph>
      <Paragraph>
        Firesprite&#39;s first major game was 2018&#39;s The Persistence. It
        also came to other platforms like Xbox, as Sony wouldn&#39;t acquire the
        studio until 2021.
      </Paragraph>
      <Paragraph marginBottom={8}>
        So far, they&#39;ve released two PS5 games. An enhanced port of The
        Persistence and the flagship PSVR2 launch title Horizon Call of the
        Mountain. Neither were particularly well received.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Firesprite hasn&#39;t announced anything since Horizon CoTM launched
            alongside PSVR2 in February 2023. Most likely because of their dire
            situation, post-acquisition.
          </Paragraph>
          <Paragraph>
            Crunch was apparently necessary to finish Horizon VR. Additionally,
            all but one founder and many other staff left once retention bonuses
            were paid out.
          </Paragraph>
          <Paragraph>
            Finally, further layoffs took place a year later after it was
            reported that Firesprite&#39;s unannounced live-service Twisted
            Metal game was cancelled.
          </Paragraph>
          <Paragraph>
            Since then, Firesprite has been linked to a sequel to 2015&#39;s
            Until Dawn. A horror/interactive drama that was remade in 2024 and
            included a new ending teasing the project.
          </Paragraph>
          <Paragraph marginBottom={8}>
            However, between the layoffs, loss of leadership, cancellations, and
            none of Firesprite&#39;s games getting above 80 on Metacritic,
            it&#39;s hard to put faith in them that they&#39;ll get Until Dawn 2
            right.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={horizonCoTM}
            alt="Horizon Call of the MMountain gameplay screenshot"
            id="horizon-cotm"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="horizon-cotm" className="block text-center mb-8">
            Horizon CoTM On PSVR2
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Firesprite" />
    </Container>
  );
}

export default FirespritePage;
