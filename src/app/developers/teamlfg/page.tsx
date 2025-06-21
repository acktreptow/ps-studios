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
            While little else has been officially said about Project Gummy Bears
            outside of what was stated above, there have been some leaks that
            provide more information. Gummy Bears is a PvP team-based
            competitive game that&#39;s fundamentally a MOBA, but still takes a
            lot of its influences from Smash Bros in order to differentiate
            itself from other games within the genre. This means characters
            falling off maps and replacing health-bar eliminations with
            percentage points. Multiple game modes are being developed and
            teamLFG plan on multiple early access playtests before its official
            launch to tighten up gameplay/monetization etc. Finally, its
            &#39;lo-fi and cozy&#39; vibes are a deliberate attempt to break
            away from Bungie&#39;s usual high-stakes sci-fi worlds.
          </Paragraph>
          <Paragraph>
            Out of all of PlayStation&#39;s live-service games, Gummy Bears is
            the one I&#39;m most optimistic about. And yet that optimism is
            still somewhat tepid. Whatever 40-man teamLFG have created since
            August 2023 has left a mark. With how much Sony have hacked away at
            Bungie&#39;s headcount, they clearly saw something at Gummy Bears to
            extract the game and talent from Bungie to give it the best chance.
            Even internally within Bungie, it was far better received than
            Marathon. Gummy Bears also does not come with some of the pitfalls
            other Sony live-service games have. For example, it&#39;s not a
            competitive shooter. In fact, it will be the only Smash Bros type
            game on PlayStation. It will therefore find it much easier to stand
            out compared to Marathon, Fairgames and Concord. It&#39;s
            light-hearted tone, if done right, could also emulate what
            Helldivers did with its faux democracy, which ended up being a big
            selling point.
          </Paragraph>
          <Paragraph>
            However based off numerous live-service cancellations and horrific
            issues with one that were announced/shipped like Concord and
            Marathon, Sony&#39;s eye on what makes a great live-service game
            cannot be trusted.
          </Paragraph>
          <Paragraph>
            As teamLFG are so new, it&#39;s also not easy to predict Gummy
            Bear&#39;s future as so much changes within the live-service space
            at such a rapid pace. In the past 18 months alone, Sony had shut
            down 2 live-service developers, abruptly took one off the market and
            fired the founder of Haven. With Project Gummy Bears likely not
            shipping for years, there&#39;s just so much that can change.
            However, this does give plenty of time for Sony to learn from their
            live-service mistakes. I just don&#39;t know if they&#39;ll actually
            learn the right lessons from a Concord.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Therefore, while I think it is more like that teamLFG ship Gummy
            Bears than close before doing so, and that it will be critical
            success, I still have little hope that it will launch to the
            commercial success Sony need it to be. If this bears out, teamLFG
            would&#39;ve just started their years long path to eventually
            shutting down.
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
            The Only Concept Art Of Project Gummy Bears Currently
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="teamLFG" />
    </Container>
  );
}

export default TeamLFGPage;
