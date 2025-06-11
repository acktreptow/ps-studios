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
        Announced in May 2025, teamLFG are the newest addition to PD Studios.
        The LFG stands for looking for group as they are driven by a mission to
        create games where players can find friendship, community, and
        belonging.. However, their unique history before this official
        announcement provides the backdrop for a developer worth paying
        attention to. That&#39;s because teamLFG are&#39;t a new studio,
        they&#39;re small team born out of Bungie.
      </Paragraph>
      <Paragraph marginBottom={8}>
        This means that this Washington-based studio has a lot of history with
        IP like Destiny and Halo, but also with other live-service such as
        League of Legends and Roblox. However, due to Bungies iussues, they were
        the lone internal group who were working on something promising. As Sony
        want to extract as much value as they can from the failed Bungie
        acquisition, they were brought into PS Studios where they would have
        full control over the team. This means that despite originating from
        Bungie, their games have no onus to come to Xbox or Nintendo consoles.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            teamLFG has not announced their first game yet. However, they have
            described the game as a team-based action game that draws
            inspiration from fighting games, platformers, MOBAs, life sims, and
            frog-type games. All within a lighthearted, comedic world set in
            brand-new, mythic, science-fantasy universe. They want to use early
            access playtests. Earlier leaks suggests its Project Gummybears, a
            well known incubation game that&#39;s been in Bungie for years. A
            PvP team-based competitive game. While fundamentally a MOBA, the
            games “Smash Bros.” influences mean it feels distinct from other
            entries in the genre; falling off maps, and replacing health-bar
            eliminations. Multiple game modes are planned. Gummy Bears is
            described as having lo-fi and cozy vibes, a sharp departure from
            Bungies usual dramatic, high-stakes sci-fi worlds. The project has
            been praised internally as Bungies “most fun” project out of
            incubation.
          </Paragraph>
          <Paragraph>
            Considering Project Gummybears history 40-person strong and been
            around since at least August 2023, I have higher hopes than most
            games within Sony&#39;s live-service strategy. Meaning I still
            don&#39;t have a lot of hope meant to be more lighthearted and
            comical in tone. With how much Sony have hacked away at Bungie&#39;s
            headcount, they clearly saw something at Gummybears to extract the
            game and talent from Bungie to give it the best chance. Internally
            at Bungie it was far better recieved than Marathon. However based
            off numerous live-service cancellations and horrific issues with one
            that were announced/shipped like Concord and Marathon, Sony&#39;s
            eye on what makes a great live-service game cannopt be trusted.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Regardless, as teamLFG are so new, Project Gummybears likely
            won&#39;t ship for years. This gives plently of time for Sony to
            learn from their live-service mistakes. I just dont klnow if
            that&#39;s enough to ensure success given the volatility of the
            live-service market. Therefore, while I think it is more like that
            teamLFG ship Gummybears than close before doing so, I still have
            very little hope that it will launch to the critical/commercial
            success Sony need it to be. If this bears out, teamLFG will have
            walked their first step into a years long path to eventually
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
