import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import seleneVassos from "../../../../public/images/dev-pages/selene-vassos.png";
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
        fact, that last time they released a game on Xbox/Nintendo was
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
        Housemarque continued to support Returnal with a PC version and a new
        co-op mode before announcing their next game, Saros, in February 2025
        via a CG trailer. Saros will play very similar to Returnal, except this
        time, it will be a roguelite instead of a roguelike.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Returnal is Housemarque&#39;s only PS5 title. Yet despite releasing
            three years ago, we know nothing about the next game. Nonetheless,
            Returnal&#39;s quality is the reason to still be excited.
          </Paragraph>
          <Paragraph>
            With Returnal, Housemarque proved they could take the elements that
            made their older, smaller-scoped games critically acclaimed, and
            repackage them into a more mainstream title.
          </Paragraph>
          <Paragraph marginBottom={8}>
            With this experience under their belt, plus the backing of Sony as
            an official first-party developer, their next game should fare even
            better. It has been 3 years though, so we should (hopefully) hear
            about it soon.
          </Paragraph>
        </div>
        <div>
          <Image
            src={seleneVassos}
            alt="Returnal's Selene Vassos"
            id="selene-vassos"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="selene-vassos" className="block text-center mb-8">
            Returnal&#39;s Main Character, Selene Vassos
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Housemarque" />
    </Container>
  );
}

export default HousemarquePage;
