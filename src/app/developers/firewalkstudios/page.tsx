import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import concordCharacters from "../../../../public/images/dev-pages/concord-characters.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Firewalk Studios",
  description:
    "The history of Firewalk Studios, a former first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function FirewalkStudiosPage(): JSX.Element {
  return (
    <Container>
      <Title title="Firewalk Studios" />
      <DeveloperButton
        developer="Firewalk"
        urlPath="https://x.com/firewalkstudios"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        This Washington-based developer was founded in 2018, by senior veterans
        of shooters like Halo and Destiny. With this prestige multiplayer
        expertise and Sony&#39;s increased focus on live-service, it&#39;s not
        surprising they acquired Firewalk in April 2023.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Firewalk announced Concord shortly after in May 2023 - a 5vs5
        live-service FPS that released on PS5/PC in August 2024. Yet it took
        until May 2024 to actually see Concord via story and gameplay trailers
        that were universally hated, with character designs especially panned.
        Playtests also showcased how gameplay wasn&#39;t good enough to justify
        $40 - especially compared to its F2P competitors like Fortnite and
        Overwatch.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Concord was a historically poor launch for Sony. It&#39;s tied with
            Firewall Ultra, Destruction AllStars and Lost Soul Aside for the
            lowest first-party PS5 Metacritic score at 62. Concord also only
            sold 25,000 - a figure so low that Sony removed it from sale and
            forced refunds 11 days later because they&#39;d recoup more with
            Concord as a tax writeoff.
          </Paragraph>
          <Paragraph>
            Firewalk explored how to successfully bring back Concord, but in
            October, Firewalk closed along with confirmation that Concord
            wouldn&#39;t return. It&#39;s therefore easy to predict that
            there&#39;ll be no more PS5 titles from them.
          </Paragraph>
          <Paragraph marginBottom={8}>
            This was the first time Sony refunded a game solely due to its
            reception. It also resulted in over $200 million in losses and led
            to Firewalk closing. Concord and Firewalk are therefore easily the
            biggest PS Studios failure of the PS5 era.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={concordCharacters}
            alt="Concord playable characters"
            id="concord-characters"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="concord-characters"
            className="block text-center mb-8"
          >
            Concord&#39;s Panned Character Designs
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Firewalk Studios" />
    </Container>
  );
}

export default FirewalkStudiosPage;
