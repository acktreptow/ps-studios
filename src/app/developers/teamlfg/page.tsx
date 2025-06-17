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
        The LFG stands for &#39;looking for group&#39; as according to their
        announcement press release, they are &#39;driven by a mission to create
        games where players can find friendship, community, and belonging&#39;.
        This gives us a solid idea about their debut game, but their unique
        pre-announcement history must be discussed first as it provides the
        backdrop for a developer worth paying attention to. That&#39;s because
        teamLFG aren&#39;t a new studio, in fact, they&#39;ve been around for
        years as small incubation team within Bungie.
      </Paragraph>
      <Paragraph>
        As a part of Bungie, it means teamLFG has a lot of experience with IP
        like Destiny and Halo. But many of the developers have experience with
        other non-shooter live-service games such as League of Legends and
        Roblox. It&#39;s therefore not surprising that this Bungie incubation
        team was working on Project Gummy Bears. A team-based action game that
        draws inspiration from fighting games, platformers, MOBAs, life sims,
        and frog-type games. All within a light-hearted, comedic world set in
        brand-new, mythic, science-fantasy universe.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Despite not even being close to announcement, early internal playtests
        of Gummy Bears was so good that its name was making the rounds around
        the whole of PS Studios. It&#39;s therefore not surprising then that
        when Bungie&#39;s major financial issues came to light, Sony started
        carving away at the developer to extract as much value as they could.
        With Gummy Bears seemingly the most promising project at Bungie
        currently, it was natural for Sony to extract them from Bungie as a new
        40-person studio and have them directly under PS Studios where they
        would have full control over the team. This means that despite
        originating from Bungie who are allowed to be multiplatform,
        teamLFG&#39;s games have no onus to come to Xbox or Nintendo consoles.
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
            Marathon. Gummy Bears also doesn&#39;t come with some of the
            pitfalls other Sony live-service games have. For example, it&#39;s
            not a competitive shooter. In fact, it will be the only Smash Bros
            type game on PlayStation. It will therefore find it much easier to
            stand out compared to Marathon, Fairgames and Concord. It&#39;s
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
