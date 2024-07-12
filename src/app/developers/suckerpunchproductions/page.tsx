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
        SP have since moved on from inFamous to Ghost of Tsushima. A
        third-person samurai action-adventure that quickly became the
        studio&#39;s best selling game.
      </Paragraph>
      <Paragraph marginBottom={8}>
        GoT initially released on PS4 in 2020, followed by a PS5 Director&#39;s
        Cut in 2021 that added around 10 more hours of gameplay via a new island
        to explore. It&#39;s currently SP&#39;s only PS5 game.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            It&#39;s been nearly four years since SP achieved new highs, both
            commercially and critically, with GoT. It&#39;s therefore not
            surprising that a proper sequel is heavily rumoured to be their next
            game.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Considering this, I predict that not only is GoT 2 the next game ANY
            PS developer announces, but it will also release very shortly after
            to new highs for Sucker Punch, critically and commercially.
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
