import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gotDC from "../../../../public/images/dev-pages/got-dc.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Sucker Punch",
  description:
    "The history and future of Sucker Punch, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function SuckerPunchProductionsPage(): JSX.Element {
  return (
    <Container>
      <Title title="Sucker Punch Productions" />
      <DeveloperButton
        developer="Sucker Punch"
        urlPath="https://www.suckerpunch.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Sucker Punch are a Washington-based developer that was founded in 1997,
        initially to work on an N64 game called Rocket: Robot on Wheels. Sony
        were impressed, so they funded SP&#39;s Sly Cooper trilogy for the PS2
        and inFamous 1/2 on the PS3. After five great games under this
        partnership, Sony acquired the studio in 2011.
      </Paragraph>
      <Paragraph marginBottom={8}>
        SP have since moved on from inFamous to 2020&#39;s Ghost of Tsushima.
        This third-person samurai action-adventure is the PS4&#39;s
        fastest-selling first-party debut at 2.4 million copies sold in 3 days.
        Tsushima then got a PS5 Director&#39;s Cut in 2021, which is currently
        SP&#39;s only released PS5 game. It added around 10 more hours of
        gameplay via a new island to explore and was even better critically
        received. A PS5 native version also helped sell 13 million copies by
        September 2024, making Tsushima extremely profitable.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Tsushima is Sucker Punch&#39;s best selling game, so it&#39;s not
            surprising that they&#39;ve stuck with the IP for Ghost of Yōtei - a
            standalone sequel taking place 329 years later. Despite its recent
            September 2024 reveal, Yōtei is already coming out in October 2025.
          </Paragraph>
          <Paragraph marginBottom={8}>
            As it&#39;s SP&#39;s second time with the IP, I predict Yōtei
            surpasses Tsushima critically because they can now refine the
            already successful formula. The larger PS5 install base means Yōtei
            will surpass the Tsushima DC commercially too. Finally, due to the
            length of game development with how far we&#39;re into the PS5
            lifecycle, I also imagine Yōtei is SP&#39;s final PS5 game.
          </Paragraph>
        </div>
        <div>
          <Image
            src={gotDC}
            alt="Ghost of Tsushima Director's Cut start screen"
            id="got-dc"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="got-dc" className="block text-center mb-8 md:ml-5">
            GoT: Director&#39;s Cut Start Screen
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Sucker Punch Productions" />
    </Container>
  );
}

export default SuckerPunchProductionsPage;
