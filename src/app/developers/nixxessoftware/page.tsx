import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gotTrophies from "../../../../public/images/dev-pages/got-trophies.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Nixxes Software",
  description:
    "The history and future of Nixxes Software, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function NixxesSoftwarePage(): JSX.Element {
  return (
    <Container>
      <Title title="Nixxes Software" />
      <DeveloperButton developer="Nixxes" urlPath="https://nixxes.com" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1999, this Utrecht-based studio holds a unique position
        within PlayStation Studios since being acquired in 2021. Unlike other
        first-party studios who develop new PS5 games, remakes, and remasters,
        Nixxes primarily develop the PC ports of them.
      </Paragraph>
      <Paragraph>
        Since 2022, Nixxes has already shipped 8 fully-featured PC ports. As
        they aren&#39;t new games that need a big marketing cycle, the time from
        announcement to release is very short. It&#39;s therefore hard to
        predict the next.
      </Paragraph>
      <Paragraph marginBottom={8}>
        However, there&#39;s one port that stands out for PS5 fans - 2017&#39;s
        Horizon Zero Dawn remaster. Since acquisition, this 2025 title is the
        first time Nixxes simultaneously shipped both a PS5 and PC version, and
        is certainly a sign of things to come.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Nixxes are very important for PlayStation as PC is the easiest way
            Sony finds growth outside of the console market - a necessity as AAA
            development costs continue to rise. However, with PS5 games that
            need a PC port drying up, Nixxes are in a unique position to go back
            into the PS3/PS4 catalogue and reintroduce classics to a new
            audience.
          </Paragraph>

          <Paragraph>
            I predict this is more likely than Nixxes simultaneously releasing
            PC ports of new PS5 games. Logistically, this is a nightmare for an
            external studio to do so effectively unless the finished PS5 version
            is held until the PC port is ready. It&#39;s also unclear if Sony
            even believe day 1 PC ports is what&#39;s best for their
            singleplayer games.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Regardless, it&#39;s great to see Nixxes finally ship a PS5 game.
            Considering the excellent reception of the HZD remaster, despite the
            original launching only 8 years ago, it bodes well for other games
            around this era that Nixxes could port. Especially older PS4 titles
            that released before the PS4 Pro, like Killzone: Shadow Fall. That
            would be a best case scenario as Nixxes wait for more first-party
            PS5 games to come out and port to PC.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gotTrophies}
            alt="Ghost of Tsushima PC trophies overlay"
            id="got-trophies"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="got-trophies"
            className="block text-center mb-8 md:ml-5"
          >
            PlayStation&#39;s PC Overlay For Trophies
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PC Ports" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Nixxes Software" />
    </Container>
  );
}

export default NixxesSoftwarePage;
