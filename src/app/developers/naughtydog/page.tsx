import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import tlouFactions from "../../../../public/images/dev-pages/tlou-factions.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
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
      <SubTitle subtitle="History" />
      <Paragraph>
        Naughty Dog are a California-based developer that was founded back in
        1984. Over a decade before the PS1!
      </Paragraph>
      <Paragraph>
        They&#39;re also one of the earliest first-party developers as Sony
        acquired them in 2001. An easy decision considering the critical and
        commercial success of their Crash Bandicoot trilogy on the PS1.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Naughty Dog had a fine PS2 gen with the Jak & Daxter series. However, it
        was the PS3 gen, with the Uncharted trilogy and The Last of Us, where
        their prestige grew to the point that many consider them the premier
        PlayStation studio. This continued into the PS4 gen with sequels in both
        IP.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Like Insomniac, Naughty Dog have released four games on PS5. A
            record for first-party. Unlike Insomniac though, all four games are
            remasters/remakes of PS4 Uncharted/TLOU games.
          </Paragraph>
          <Paragraph>
            While remakes/remasters are nice, they were somewhat unnecessary due
            to the PS4 versions still playing great on PS5.
          </Paragraph>
          <Paragraph>
            Furthermore, ND&#39;s only announced new game, TLOU Online, was
            cancelled four years into development. It&#39;s therefore hard to be
            confident despite the pedigree over the past two gens.
          </Paragraph>
          <Paragraph>
            Unfortunately, it looks like ND have time for only one new game on
            PS5. A huge drop-off from previous output, although I&#39;m sure it
            will retain their premier quality.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Regardless, first-party developers like Insomniac have already begun
            supplanting them this gen. Something unthinkable when TLOU released
            in 2013. Hopefully they&#39;re able to return to their former glory
            for the PS6.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={tlouFactions}
            alt="The Last of Us Factions"
            width={500}
            height={500}
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
