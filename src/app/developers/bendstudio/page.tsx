import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import daysGone from "../../../../public/images/dev-pages/days-gone.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";
import List from "../../components/List";

export const metadata: Metadata = {
  title: "Bend Studio",
  description:
    "The history and future of Bend Studio, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function BendStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Bend Studio" />
      <DeveloperButton developer="Bend" urlPath="https://www.bendstudio.com/" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1992, this Oregon-based developer is best known for their
        Syphon Filter series on PS1, PS2 and PSP. They&#39;ve also developed
        spin-off games from IP created at other first-party studios, like
        Uncharted: Golden Abyss (Naughty Dog) and Resistance: Retribution
        (Insomniac).
      </Paragraph>
      <Paragraph marginBottom={8}>
        Bend&#39;s last game was 2019&#39;s Days Gone on PS4, which got
        remastered in April 2025. This native PS5 re-release includes
        resolution/framerate upgrades, a new horde mode, and other small
        elements like new trophies.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite Days Gone releasing 5 years ago, we still know very little
            about their next title. But due to internal leaks and some
            investigative-reporting, here&#39;s what we do know:
          </Paragraph>
          <List>
            <li>
              Bend pitched Days Gone 2, which Sony rejected due to poor critical
              reception of Days Gone.
            </li>
            <li>
              A power struggle occurred in 2020 resulting in the writer and
              creative director leaving.
            </li>
            <li>It will be a new IP under new leadership.</li>
            <li>It will be a live service game.</li>
          </List>
          <Paragraph>
            The vast majority of Days Gone&#39;s criticisms could be attributed
            to those who lost the power struggle and left Bend. Between that and
            the fact that it&#39;s already been 5 years, I believe that
            regardless of the move to live service, Bend&#39;s next game will
            fare better than Days Gone. At least critically.
          </Paragraph>
          <Paragraph marginBottom={8}>
            We should expect to see something soon as Bend have gone the longest
            out of all PS Studios without releasing a game.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={daysGone}
            alt="Days Gone"
            id="days-gone"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="days-gone" className="block text-center">
            Days Gone Cover Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Bend Studio" />
    </Container>
  );
}

export default BendStudioPage;
