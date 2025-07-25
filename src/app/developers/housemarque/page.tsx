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
        mainstream appeal, resulting in it becoming their best selling game at
        560k copies sold in 3 months and Sony acquiring them very shortly after.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Housemarque continued to support Returnal with a PC version and co-op
        mode before announcing their next game, Saros, in February 2025 via a CG
        trailer. Saros will play very similar to Returnal, except this time,
        it&#39;ll be a roguelite instead of a roguelike.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            With Returnal, Housemarque proved they could repackage the arcade
            DNA of their older/smaller games into a AAA mainstream title. Saros
            being a roguelite also furthers its mainstream appeal on a much
            larger 2026 PS5 install base, resulting in even higher sales.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Housemarque are easily one of the bright spots for PS Studios this
            generation, especially as they were acquired during the frenzy when
            Sony were laser focused on live-service. Thankfully, they
            weren&#39;t get caught up in that. Saros also ships in 2026 meaning
            we should see more very soon. Housemarque are therefore one of the
            few PS Studios most worth watching currently.
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
