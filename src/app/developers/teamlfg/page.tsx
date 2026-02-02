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
        Announced in May 2025, the 40-person teamLFG are the newest addition to
        PS Studios. LFG stands for &#39;looking for group&#39; as they create
        games where players can find friendship and community. While the name
        foreshadows their debut game, LFG&#39;s unique history must be discussed
        first because they aren&#39;t a new studio - they were an incubation
        team within Bungie for years.
      </Paragraph>
      <Paragraph>
        As part of Bungie, LFG worked on Destiny and Halo, but their experience
        also extends to non-shooter live-services like League of Legends and
        Roblox. This history can be seen all over their project &#39;Gummy
        Bears&#39; - a team-based action game inspired by fighters, MOBAs,
        platformers and sims. It&#39;s also set in a science-fantasy world, but
        has a light-hearted, comedic tone to distinguish itself from Destiny.
      </Paragraph>
      <Paragraph marginBottom={8}>
        When Gummy Bears was in internal incubation, playtest reception was more
        positive than Bungie&#39;s Marathon and word spread throughout Sony. So
        in 2024, when Bungie&#39;s financial issues meant all options were on
        the table for Sony to extract value, LFG was brought directly into PS
        Studios where they&#39;d have full control. LFG titles now have no onus
        to come to Xbox or Nintendo, whereas Bungie is multiplatform.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Little has been said about Gummy Bears, but gameplay details did
            leak. It&#39;s a team-based PvP MOBA with many modes and classes. GB
            is also influenced by Smash Bros to differentiate from others MOBAs,
            like players falling off maps and percentage-based damage. To appeal
            to a younger audience than Destiny, friends can also &#39;express
            their identity&#39; in a &#39;cozy vibe&#39;.
          </Paragraph>
          <Paragraph>
            Out of Sony&#39;s future live-service games, I&#39;m more
            optimistic about Gummy Bears than most. It&#39;s telling that with
            all of Bungie&#39;s current turmoil, LFG showed enough promise for
            Sony to extract them to directly nurture
            GB&#39;s potential.    GB is also the only Smash Bros type game on PS5, instead of the
            saturated shooter genre Fairgames/Marathon are in. Finally, GB
            launches after these games, which gives Sony plenty of data to see
            what went right/wrong.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Nonetheless, GB is years away, and with the volatility of
            live-service, its commercial and/or critical success can still go
            either way. Hopefully, LFG keep their word of many playtests -
            it&#39;s the best barometer of what all segments of the PS5 base think of that specific live-service.
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
