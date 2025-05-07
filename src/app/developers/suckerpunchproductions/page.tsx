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
        initially to work on an N64 game called Rocket: Robot on Wheels.
      </Paragraph>
      <Paragraph>
        Sony were impressed, so they funded SP&#39;s Sly Cooper trilogy for the
        PS2 and inFamous 1/2 on the PS3. After five great games under this
        partnership, Sony acquired the studio in 2011.
      </Paragraph>
      <Paragraph>
        SP have since moved on from inFamous to 2020&#39;s Ghost of Tsushima.
        This third-person samurai action-adventure is the PS4&#39;s
        fastest-selling first-party debut at 2.4 million copies sold in 3 days.
      </Paragraph>
      <Paragraph marginBottom={8}>
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
            GoT was Sucker Punch&#39;s highest selling game of all time.
            It&#39;s therefore not surprising that they&#39;ve stuck with the IP
            for their next game in Ghost of Yōtei. It&#39;s a standalone sequel
            that takes place 329 years after Tsushima and despite only being
            revealed in September 2024, is coming out very soon, on October 2,
            2025.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Considering this is Sucker Punch&#39;s second go around with the IP
            and that the IP is well-regarded amongst fans, I predict Yōtei will
            surpass Tsushima as the developer&#39;s fastest selling game of all
            time. However, considering the length of game development these days
            as well as how far we&#39;re in to the PS5 lifecycle, I imagine
            Yōtei is the final game coming to PS5 by Sucker Punch.
          </Paragraph>
        </div>
        <div>
          <Image
            src={gotDC}
            alt="Ghost of Tsushima Director's Cut main menu screen"
            id="got-dc"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="got-dc" className="block text-center mb-8">
            GoT: Director&#39;s Cut Main Menu Screen
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Sucker Punch Productions" />
    </Container>
  );
}

export default SuckerPunchProductionsPage;
