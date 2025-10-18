import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import sarosConceptArt from "../../../../public/images/dev-pages/saros-concept-art.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Housemarque",
  description:
    "The history and future of Housemarque, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function HousemarquePage(): JSX.Element {
  return (
    <Container>
      <Title title="Housemarque" />
      <DeveloperButton
        developer="Housemarque"
        urlPath="https://housemarque.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1995, this Finnish-based developer has released many games
        exclusively on PlayStation, including Super Stardust and Resogun. In
        fact, the last time they released a game on Xbox or Nintendo was
        2011&#39;s Outland.
      </Paragraph>
      <Paragraph>
        So far, Housemarque has only released 2021&#39;s Returnal on PS5. It
        kept the roguelike/arcade DNA seen in their previous games, but moved to
        third-person with more focus on story. This gave Returnal more
        mainstream appeal, resulting in it becoming Housemarque&#39;s best
        selling game at 560k copies sold in 3 months and Sony acquiring them
        shortly after.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Housemarque continued to support Returnal with a PC version and co-op
        mode before announcing their next game, Saros, via a CG trailer in
        February 2025 and a gameplay reveal in September. Saros plays very
        similar to Returnal, except it&#39;s a roguelite instead of a roguelike.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            With Returnal, Housemarque proved they could repackage the arcade
            DNA of their older/smaller games into a AAA mainstream title. Saros
            being a roguelite also furthers its mainstream appeal on a much
            larger 2026 PS5 install base, which should result in even higher
            sales.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Housemarque are easily one of the bright spots for PS Studios this
            generation, especially as they were acquired during Sony&#39;s
            laser-focused live-service push. Thankfully, they weren&#39;t get
            caught up in that - making them one of the few PS Studios currently
            worth watching. Saros also ships in March 2026, so there&#39;s not
            long to wait.
          </Paragraph>
        </div>
        <div>
          <Image
            src={sarosConceptArt}
            alt="Saros concept art"
            id="saros-concept-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="saros-concept-art" className="block text-center mb-8">
            Saros Concept Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Housemarque" />
    </Container>
  );
}

export default HousemarquePage;
