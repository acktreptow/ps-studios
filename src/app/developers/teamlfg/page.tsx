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
        LFG stands for &#39;looking for group&#39; as according to their
        announcement, they &#39;create games where players can find friendship,
        community, and belonging&#39;. While these titbits foreshadow their
        debut game, LFG&#39;s unique pre-announcement history must be discussed
        first as it portrays why they&#39;re worth paying attention to.
        That&#39;s because teamLFG aren&#39;t a new studio - they&#39;ve been
        around for years as small incubation team within Bungie.
      </Paragraph>
      <Paragraph>
        As part of Bungie, LFG worked on Destiny and Halo. But their experience
        also extends to non-shooter live-service games like League of Legends
        and Roblox. These fingerprints can be seen all over their game, Project
        Gummy Bears - a team-based action game inspired by fighters, MOBAs,
        platformers, life sims etc. It&#39;s still set in a science-fantasy
        world, but with a light-hearted, comedic tone to distinguish itself from
        Destiny.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Even when Gummy Bears was just an early incubation project, internal
        playtests were not only more positive than Bungie&#39;s upcoming
        Marathon, but word of mouth was so good that it spread throughout all of
        PS Studios. So in 2024, when Bungie&#39;s significant financial issues
        came to light and all options were on the table for Sony to extract
        value, the 40-person incubation team was an obvious one to bring
        directly into PS Studios where they&#39;d now have full control over GB.
        LFG&#39;s games now have no onus to come to Xbox or Nintendo, whereas
        Bungie is multiplatform.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Little else has been officially said about Gummy Bears, but
            there&#39;s been leaked info regarding gameplay. GB is a PvP
            team-based competitive game that will include multiple modes and
            class types. It&#39;s fundamentally a MOBA but takes influence from
            Smash Bros to differentiate from others in the genre. That means
            characters falling off maps and percentage-based damage instead of
            HP. In order to appeal to a younger audience than Bungie has,
            friends can hang out to &#39;express their identity&#39; in a
            &#39;lo-fi and cozy&#39; vibe between matches.
          </Paragraph>
          <Paragraph>
            Out of the upcoming live-service games, I&#39;m more optimistic
            about Gummy Bears than most. Even internally within Bungie, its
            reception was better than Marathon. It&#39;s also very telling that
            with all of Bungie&#39;s current turmoil, LFG showed so much promise
            that Sony extracted them from a bad situation so PS Studios could
            directly nurture GB&#39;s potential.
          </Paragraph>
          <Paragraph>
            Gummy Bears also doesn&#39;t have some of the pitfalls other Sony
            live-service games do. Unlike the saturated shooter-focused genre
            Fairgames/Marathon are in, GB can more easily stand out as it&#39;s
            the only Smash Bros type game on PS5. Its lighter tone could also be
            a major selling point - similar to the virality we saw with
            Helldivers 2&#39;s &#39;managed democracy&#39;. Finally, GB launches
            after the aforementioned games, thus giving Sony plenty of data to
            see what went right/wrong.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Nonetheless, despite the optimism, Gummy Bears is still years away
            and due to the volatility of live-service, the truth is that its
            critical and/or commercial success can go either way. Hopefully, LFG
            stay true to their word of multiple early access playtests. This
            provides the best barometer of what an increasingly pessimistic
            hardcore PS5 base thinks of yet another live-service game.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gummyBears}
            alt="Gummy Bears concept art"
            id="gummy-bears"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="gummy-bears" className="block text-center mb-8">
            Project Gummy Bears Only Concept Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="teamLFG" />
    </Container>
  );
}

export default TeamLFGPage;
