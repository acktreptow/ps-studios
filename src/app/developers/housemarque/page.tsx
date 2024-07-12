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
        Founded in 1995, this Finnish-based developer has released a myriad of
        games on PlayStation consoles including Super Stardust and Resogun.
      </Paragraph>
      <Paragraph>
        Housemarque most recently released 2021&#39;s Returnal for the PS5. It
        kept the roguelike elements seen in previous games, but moved to a
        third-person perspective with more focus on story.
      </Paragraph>
      <Paragraph>
        This helped Returnal have a more mainstream appeal and thus became
        Housemarque&#39;s best selling game.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Clearly, Sony were happy with this pivot as they purchased Housemarque
        two months after Returnal released.
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
