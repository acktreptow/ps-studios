import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import tlouFactions from "../../../../public/images/dev-pages/tlou-factions.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Naughty Dog",
  description:
    "The history and future of Naughty Dog, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function NaughtyDogPage(): JSX.Element {
  return (
    <Container>
      <Title title="Naughty Dog" />
      <DeveloperButton
        developer="Naughty Dog"
        urlPath="https://www.naughtydog.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Naughty Dog are a California-based studio founded well before even the
        PS1, in 1984. They&#39;re also one of the earliest first-party
        developers as Sony acquired them in 2001. An easy decision considering
        the critical and commercial success of their Crash Bandicoot IP on PS1.
      </Paragraph>
      <Paragraph marginBottom={8}>
        ND had a good PS2 generation with the Jak & Daxter IP. But it was the
        PS3 gen, with the Uncharted trilogy and The Last of Us, where their
        prestige grew to the point that many consider them the premier
        PlayStation studio. This continued into the PS4 gen with sequels in both
        IP.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Like Insomniac, Naughty Dog have released the most PS5 games from
            first-party with 4. Unlike Insomniac though, all 4 games are
            remasters/remakes of PS4 Uncharted/TLOU games. And while nice, these
            PS5 editions are somewhat unnecessary due to the PS4 versions still
            playing great on PS5.
          </Paragraph>
          <Paragraph>
            Naughty Dog were meant to have already released their first new PS5
            game with The Last of Us Online, however this was cancelled 4 years
            into development. Essentially wasting over half the PS5 generation
            on a failed project. Since then, Naughty Dog has announced their
            first new IP in over a decade - Intergalactic: The Heretic Prophet.
            A third-person action-adventure that&#39;s taking exploration queues
            from Elden Ring as is centered around religion as its theme that has
            a rough release year of 2027.{" "}
          </Paragraph>
          <Paragraph marginBottom={8}>
            Although it&#39;s highly likely that Intergalactic will retain the
            industry-defining quality Naughty Dog is known for, the fact remains
            that if all goes well, Naughty Dog are only releasing 1 new game for
            the PS5 and it&#39;s arriving in the twilight of the console. Other
            first-party developers like Insomniac have already begun supplanting
            them this generation then. Something unthinkable when TLOU released
            in 2013. Hopefully they&#39;re able to return to their former glory
            for the PS6.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={tlouFactions}
            alt="The Last of Us Factions"
            id="tlou-factions"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="tlou-factions" className="block text-center mb-8">
            TLOU Online&#39;s Only Public Asset
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Naughty Dog" />
    </Container>
  );
}

export default NaughtyDogPage;
