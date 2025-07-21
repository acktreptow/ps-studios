import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gummyBears from "../../../../public/images/dev-pages/gummy-bears.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "teamLFG",
  description:
    "The history and future of teamLFG, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function TeamLFGPage(): JSX.Element {
  return (
    <Container>
      <Title title="teamLFG" />
      <DeveloperButton
        developer="teamLFG"
        urlPath="https://www.playstation.com/corporate/playstation-studios/teamlfg/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Announced in May 2025, teamLFG are the newest addition to PS Studios.
        LFG stands for &#39;looking for group&#39; as according to them, they
        &#39;create games where players can find friendship, community, and
        belonging&#39;. While these titbits foreshadow their debut game,
        LFG&#39;s unique history must be discussed first because they aren&#39;t
        a new studio - they were an incubation team within Bungie for years.
      </Paragraph>
      <Paragraph>
        As part of Bungie, LFG worked on Destiny and Halo. But their experience
        also extends to non-shooter live-service IP like League of Legends and
        Roblox. This history can be seen all over their &#39;Project Gummy
        Bears&#39; - a team-based action game inspired by fighters, MOBAs,
        platformers, life sims, etc. It&#39;s still set in a science-fantasy
        world, but has a light-hearted, comedic tone to distinguish itself from
        Destiny.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Even when Gummy Bears was an early incubation game, internal playtests
        were not only more positive than Bungie&#39;s Marathon, but was so good
        that word spread throughout PS Studios. So in 2024, when Bungie&#39;s
        significant financial issues came to light and all options were on the
        table for Sony to extract value, the 40-person team was an obvious one
        to bring directly into PS Studios where they&#39;d have full control.
        LFG&#39;s games now have no onus to come to Xbox or Nintendo, whereas
        Bungie is multiplatform.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Little has been officially said about Gummy Bears, but gameplay
            details leaked. It&#39;s a team-based PvP game with multiple modes
            and class types. While fundamentally a MOBA, it takes influence from
            Smash Bros to differentiate from others in the genre. E.g.
            characters falling off maps and percentage-based damage instead of
            HP. Finally, to appeal to a younger audience than Bungie has,
            friends can &#39;express their identity&#39; in a &#39;lo-fi and
            cozy&#39; vibe between matches.
          </Paragraph>
          <Paragraph>
            Out of Sony&#39;s upcoming live-service games, I&#39;m more
            optimistic about Gummy Bears than most because it&#39;s very telling
            that with all of Bungie&#39;s current turmoil, LFG showed enough
            promise for Sony to extract them from a bad situation and directly
            nurture GB&#39;s potential.
          </Paragraph>
          <Paragraph>
            Gummy Bears also doesn&#39;t have certain pitfalls other Sony
            live-service games do. Unlike the saturated shooter-focused genre
            Fairgames/Marathon are in, GB stands out as it&#39;s the only Smash
            Bros type game on PS5. Its lighter tone could also be a major
            selling point - similar to the virality Helldivers 2&#39;s managed
            democracy achieved. Finally, GB launches after the aforementioned
            games, which gives Sony plenty of data to see what went right/wrong.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Nonetheless, despite the optimism, Gummy Bears is still years away
            and due to the volatility of live-service, the truth is that its
            critical and/or commercial success can go either way. Hopefully, LFG
            keep their word of many early playtests. This is the best barometer
            of what an increasingly pessimistic hardcore PS5 base thinks of yet
            another live-service.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gummyBears}
            alt="Gummy Bears concept art"
            id="gummy-bears"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="gummy-bears"
            className="block text-center mb-8 md:ml-5"
          >
            Gummy Bears Only Concept Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="teamLFG" />
    </Container>
  );
}

export default TeamLFGPage;
