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
        Founded in 1995, Housemarque are a Finnish developer that, prior to PS5,
        were primarily known for critically acclaimed arcade shooters like Super
        Stardust and Resogun. Most of Housemarque&#39;s games in their 30+ year
        history were also exclusively on PlayStation, with their last
        multiplatform title being 2011&#39;s Outland, shipping on both PS3 and
        Xbox 360.
      </Paragraph>
      <Paragraph>
        In 2017, Housemarque decreed &#39;arcade is dead&#39; after the poor
        commercial performance of their PS4 titles, despite continued critical
        acclaim, and moved away from typical arcade titles. This was first
        realized with 2021&#39;s Returnal on PS5, which kept the
        roguelike/arcade DNA for its gameplay, but moved to third-person, with
        far more emphasis on story and production value. This pivot gave
        Returnal more mainstream appeal, resulting in it becoming
        Housemarque&#39;s fastest-selling game at 560,000 copies in 3 months,
        and later surpassing 1 million units.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Due to this improved commercial success, it&#39;s unsurprising that Sony
        acquired Housemarque shortly after while they continued to support
        Returnal with a PC version and co-op mode. Housemarque then announced
        Saros as a spiritual sequel to Returnal in 2025, before shipping it in
        2026 to a surprising reception.
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
            Housemarque is easily one of the bright spots for PS Studios this
            generation, especially as they were acquired during Sony&#39;s
            live-service push. Thankfully, they weren&#39;t caught up in that -
            making them one of the few PS Studios currently worth watching.
            Saros also ships in April 2026, so there&#39;s not long to wait.
            Though it&#39;s likely the last Housemarque title on PS5.
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
