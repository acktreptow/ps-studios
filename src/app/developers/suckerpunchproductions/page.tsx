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
        initially to work on N64 platformer Rocket: Robot on Wheels. Sony were
        impressed, so they funded SP&#39;s Sly Cooper trilogy for the PS2 and
        inFamous 1/2 on the PS3. Shortly after, Sony acquired SP in 2011.
      </Paragraph>
      <Paragraph marginBottom={8}>
        After 2 inFamous titles on PS4, SP then moved on to a new IP -
        2020&#39;s Ghost of Tsushima. This third-person samurai action-adventure
        is the PS4&#39;s fastest-selling first-party debut at 2.4 million copies
        sold in 3 days. Tsushima then got a PS5 Director&#39;s Cut in 2021,
        which included a well received 10-hour story expansion that helped push
        Tsushima past 13 million copies, making it their best selling game.
        It&#39;s therefore not surprising that SP stuck with the IP for their
        most recent game - Ghost of Yōtei.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Yōtei - a standalone sequel taking place 329 years later - launched
            in October 2025 to the same critical and commercial success Tsushima
            achieved in 2020. Despite PS4&#39;s larger install base (PS4 was on
            the market for 6.5 years compared to PS5&#39;s 5 years when Yōtei
            launched).
          </Paragraph>
          <Paragraph marginBottom={8}>
            However, due to the length of game development and how far we&#39;re
            into PS5&#39;s lifecycle, I predict Yōtei is Sucker Punch&#39;s
            final PS5 game. Despite Yōtei&#39;s success, I also doubt that
            SP&#39;s next game will be a sequel. SP already confirmed that
            they&#39;ll continue developing one game at a time, and have already
            dedicated 10+ years to the IP. PS6 is a great place for something
            new.
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
      <GamesSection games={gamesArray} developer="Sucker Punch" />
    </Container>
  );
}

export default SuckerPunchProductionsPage;
