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
            Despite Days Gone shipping over 6 years ago, there&#39;s a reason
            why we don&#39;t even have a name for Bend&#39;s next game. It&#39;s
            been a very long string of bad luck:
          </Paragraph>
          <List>
            <li>
              Bend pitched Days Gone 2, which Sony rejected due to poor critical
              reception of Days Gone.
            </li>
            <li>
              A power struggle occurred in 2020, resulting in the writer and
              creative director leaving.
            </li>
            <li>
              All this led to new leadership greenlighting a new IP that would
              be a live-service game.
            </li>
            <li>
              The game was then cancelled in January 2025. Likely due (at least
              in part) to Sony leadership getting cold feet about their chances
              for success in live-service post-Concord.
            </li>
          </List>
          <Paragraph>
            Much of Days Gone&#39;s criticisms could be attributed to those who
            lost the power struggle and left Bend. Between that,
            PlayStation&#39;s new-found reluctance in live-service, the fact
            that Days Gone eventually got a remaster, and that the general
            consensus around the IP is a lot more positive these days,
            there&#39;s a very good chance Days Gone 2 might be greenlit now.
            This would be the best case scenario.
          </Paragraph>
          <Paragraph>
            Regardless of what it is, the fact remains that they&#39;ve gone the
            longest out of all PS Studios without releasing a new game.
            Furthermore, we shouldn&#39;t even expect it until PS6.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Due to Bend&#39;s poor ex-leadership and Sony&#39;s poor execution
            of its live-service strategy, the PS5 generation has been a truly
            wasted one for this developer.
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
