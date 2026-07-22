import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import goy from "../../../../public/images/dev-pages/ghost-of-yotei.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Sucker Punch Productions",
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
        Sucker Punch are a Washington-based developer, founded in 1997 to work
        on the N64 platformer Rocket: Robot on Wheels. Sony were impressed, so
        they funded SP&#39;s Sly Cooper trilogy for the PS2 and inFamous 1/2 on
        the PS3. Sony then acquired SP in 2011, just after inFamous 2&#39;s
        successful launch, and right before its Festival of Blood expansion,
        which was the fastest-selling digital game on PS3 at the time.
      </Paragraph>
      <Paragraph marginBottom={8}>
        After 2 inFamous titles on PS4, SP then moved on to a new IP -
        2020&#39;s Ghost of Tsushima. This third-person samurai action-adventure
        is the PS4&#39;s fastest-selling first-party debut at 2.4 million copies
        sold in 3 days. Tsushima then got a PS5 Director&#39;s Cut in 2021,
        which included a well-received, 10-hour story expansion that helped push
        Tsushima past 13 million copies, making it their best-selling game.
        It&#39;s therefore not surprising that SP stuck with the IP for their
        most recent game - PS5&#39;s Ghost of Yōtei.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Yōtei - a standalone sequel taking place 329 years after Tsushima -
            launched in October 2025, to similar critical and commercial success
            that Tsushima achieved. It finished as the third-highest selling
            game in the US for 2025, for example. This was followed by its free,
            Yōtei: Legends multiplayer expansion in March 2026.
          </Paragraph>
          <Paragraph>
            However, due to the length of game development and how far the PS5
            is into its lifecycle, Yōtei is almost certainly Sucker Punch&#39;s
            final PS5 game. Despite the success SP have found with both Ghost
            games, it&#39;s entirely possible that their next title will be a
            new IP.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Studio Head Brian Fleming retired shortly after Yōtei&#39;s launch,
            and SP have already confirmed that they&#39;ll continue developing
            one game at a time. With new leadership likely wanting to move on
            with their own ideas after 10+ years on the Ghost IP, the PS6 is a
            great place for something new.
          </Paragraph>
        </div>
        <div>
          <Image
            src={goy}
            alt="Ghost Of Yōtei Key Art"
            id="got-dc"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="got-dc" className="block text-center mb-8 md:ml-5">
            Ghost Of Yōtei Key Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Sucker Punch" />
    </Container>
  );
}

export default SuckerPunchProductionsPage;
