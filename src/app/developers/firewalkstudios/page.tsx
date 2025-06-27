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
        expertise and Sony&#39;s increased focus on live-service, it&#39;s no
        surprise they acquired Firewalk in April 2023.
      </Paragraph>
      <Paragraph>
        Firewalk then announced their first game, Concord, shortly after in May
        2023. A 5vs5 live-service FPS that released on PS5/PC in August 2024.
        Yet it took until May 2024 before we actually saw Concord, via story and
        gameplay trailers that were universally hated.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Playable betas in July didn&#39;t help either. Character designs were
        particularly slated and the gameplay wasn&#39;t good enough to justify
        $40. Especially compared to its F2P competitors like Fortnite.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Concord was a historically poor launch for Sony. It&#39;s tied with
            Firewall Ultra as the worst reviewed PS Studios PS5 game on
            Metacritic at 62 and only sold 25k copies. Results were so bad
            that Sony removed Concord from sale and refunded all purchases just
            11 days later.
          </Paragraph>
          <Paragraph>
            Firewalk explored how to bring back Concord in a way that resonates,
            but on October 29th, Firewalk closed along with confirmation that
            Concord wouldn&#39;t return. It therefore easy to predict that
            they&#39;ll be no more more Firewalk games on PS5.
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
