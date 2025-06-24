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
            Like Insomniac, Naughty Dog have released the most first-party PS5
            games with 4. Unlike Insomniac though, all 4 are remasters/remakes
            of PS4 Uncharted/TLOU games. While nice, these PS5 editions are
            somewhat unnecessary as the PS4 versions still play great on PS5.
          </Paragraph>
          <Paragraph>
            ND were meant to have already released their first new PS5 game with
            The Last of Us Online. However, this was cancelled 4 years into
            development, therefore wasting over half the PS5 generation. Since
            then, ND has announced their first new IP in over a decade -
            Intergalactic: The Heretic Prophet. It&#39;s a religious-themed,
            third-person action-adventure that takes gameplay inspiration from
            Elden Ring and is likely to release around 2027/28.{" "}
          </Paragraph>
          <Paragraph marginBottom={8}>
            It&#39;s very likely that Intergalactic retains the
            industry-defining quality Naughty Dog is known for, but the fact
            remains that Naughty Dog are almost certainly only releasing 1 new
            game on PS5 and it&#39;s shipping in its final years. Other
            first-party developers like Insomniac have already begun supplanting
            them this generation, which was unthinkable when TLOU released in
            2013. Hopefully they&#39;re able to return to form on the PS6.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={tlouFactions}
            alt="The Last of Us Online's Only Public Asset"
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
