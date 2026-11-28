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
        Naughty Dog are a California-based studio founded in 1984, 10 years
        before the PS1 launched. They&#39;re also one of the earliest to join PS
        Studios as Sony acquired them in 2001 - an easy decision considering the
        critical and commercial success of their Crash Bandicoot IP on PS1,
        where the original trilogy sold over 20 million copies. ND then
        continued to find similar success on PS2 with the Jak & Daxter IP, which
        also had a platformer/action-adventure trilogy and racing spinoff.
      </Paragraph>
      <Paragraph>
        While ND had already proven Sony right to acquire them with these
        PS1/PS2 IPs, it was on PS3, with Uncharted 1-3 and The Last of Us, where
        their prestige grew to the point that many consider them the best PS
        Studio. These titles outperformed the already great Crash/Jak critical
        reception, and in sales despite PS3&#39;s far lower install base.
      </Paragraph>
      <Paragraph marginBottom={8}>
        This newfound pedigree and success then continued into the PS4 era with
        critically and commercially acclaimed sequels/remasters across their PS3
        franchises. Uncharted 4 outsold every Jak game on PS2 combined, for
        example. Unfortunately, PS4&#39;s final year (2020) is also where
        ND&#39;s ascent ends, as their output on PS5 so far has been incredibly
        disappointing.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            So far, ND have only shipped remasters or remakes of Uncharted or
            TLOU games on PS5. While they received noticeable graphics and
            framerate improvements, they&#39;re somewhat unnecessary as the PS4
            versions still play great on PS5.
          </Paragraph>
          <Paragraph>
            ND should&#39;ve also already released their first new PS5 title,
            The Last of Us Online, but it was cancelled 4 years into
            development. ND claim this was because creating a live-service would
            permanently change the single-player studio, as they&#39;d need to
            continue feeding it with new content, but this mismatch
            should&#39;ve been obvious from the start. Instead, ND wasted over
            half the PS5 generation on a project that should&#39;ve never been
            greenlit at that scope.
          </Paragraph>
          <Paragraph>
            Fortunately, ND announced a return to their single-player roots with
            their first new IP since 2013, Intergalactic: The Heretic Prophet,
            in 2024. It&#39;s a religious-themed, third-person action-adventure
            that takes gameplay inspiration from Elden Ring and is likely
            launching in 2027/28.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Intergalactic should retain the industry-defining quality ND are
            known for. However, with only 1 new game on PS5 that ships in its
            final years, other PS Studios like Insomniac, who will ship at least
            4 new PS5 titles, have now overtaken ND this generation. This
            would&#39;ve been unthinkable when TLOU released in 2013. Hopefully,
            Intergalactic gets ND back on track and they return to form on PS6.
            Based off the rumored Uncharted sequel and 2 new TLOU projects, this
            ascent back to the top of PS Studios is a path they&#39;re committed
            to.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={tlouFactions}
            alt="The Last of Us Online's key art"
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
