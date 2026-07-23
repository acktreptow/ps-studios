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
        Founded in 1992, Bend Studio (formerly Blank, Berlyn & Co. and Eidetic)
        are an Oregon-based developer Sony acquired in 2000. While they&#39;re
        best known for the Syphon Filter shooter series on PS1, PS2, and PSP,
        they&#39;ve also developed spin-off games from IP created at other
        first-party studios, like Uncharted: Golden Abyss (Naughty Dog) and
        Resistance: Retribution (Insomniac).
      </Paragraph>
      <Paragraph marginBottom={8}>
        Bend&#39;s most recent game is 2019&#39;s action-adventure Days Gone on
        PS4, which got remastered on PS5 in April 2025. This native PS5
        re-release includes resolution and framerate upgrades, a new horde mode,
        and other smaller additions like a PS5 trophy list.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite Days Gone shipping over 6 years ago, we don&#39;t even have
            a name for Bend&#39;s next game due to a very long string of bad
            luck and incompetence:
          </Paragraph>
          <List>
            <li>
              Bend pitched Days Gone 2, which Sony rejected due to of Days
              Gone&#39;s initial reception.
            </li>
            <li>
              A 2020 internal power struggle resulted in DG&#39;s writer and
              creative director leaving.
            </li>
            <li>
              Bend&#39;s new leadership then greenlit a live-service game based
              on an original IP.
            </li>
            <li>
              That game was then cancelled in January 2025, likely due to
              Sony&#39;s colder feet for internal live services, post-Concord.
            </li>
          </List>
          <Paragraph>
            Fortunately, much of the criticism against DG stems from those who
            lost the power struggle. Between that, Sony&#39;s increased
            reluctance in live services, DG getting a remaster, and the more
            positive general consensus around the IP in 2026, there&#39;s a
            better chance Days Gone 2 is greenlit than in recent years, which
            would be the best-case scenario.
          </Paragraph>
          <Paragraph marginBottom={8}>
            The worst-case scenario would be Bend&#39;s closure, which is
            unfortunately more likely. At the very least, don&#39;t expect a new
            Bend title until PS6, making the PS5 a truly wasted generation for
            them due to ex-Bend leadership and Sony&#39;s poor live service
            execution.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={daysGone}
            alt="Days Gone cover art"
            id="days-gone"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="days-gone" className="block text-center mb-8">
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
