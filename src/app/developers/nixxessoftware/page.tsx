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
        Since 2022, Nixxes has already shipped 8 fully-featured (DLSS etc) PC
        ports. As they aren&#39;t new games that need a big marketing cycle, the
        time from announcement to release is very short. It&#39;s therefore hard
        to predict their next port.
      </Paragraph>
      <Paragraph marginBottom={8}>
        However, there&#39;s one port that stands out for PS5 fans - 2017&#39;s
        Horizon Zero Dawn remaster. Since acquisition, this is is the first port
        where Nixxes simultaneously shipped a PS5 version and is certainly a
        sign of things to come.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Nixxes are an incredibly important studio for PlayStation as this is
            the easiest way Sony finds growth outside of the console market. A
            necessity as AAA game development costs continue to rise.
          </Paragraph>
          <Paragraph>
            However, with the PC ports of PS5 games starting to dry up, Nixxes
            are in a unique position to go back into PlayStations PS3/PS4
            catalogue and reintroduce them to a new audience.
          </Paragraph>
          <Paragraph>
            I predict this is a more likely outcome over them working on PC
            ports of upcoming PS5 games and simultaneously releasing them. I
            highly doubt this comes to be as logistically, this is a nightmare
            for an external studio to do so effectively. Unless the PS5 version
            is held until their PC port is ready. It&#39;s also still unclear if
            Sony believe this is an effective strategy, or it could be a
            detrimental one that results in fewer PS5s sold long-term.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Regardless, It&#39;s great to see Nixxes finally break the ice with
            a PS5 game. Considering the excellent reception of the Horizon Zero
            Dawn remaster, despite the original only being 8 years old, it bodes
            well for any other games from around this era that Nixxes work on.
            Especially older PS4 titles that were released before the PS4 Pro
            like Killzone: Shadow Fall. That along with the Killzone trilogy
            would be a best case scenario outcome as Nixxes wait for more
            first-party PS5 games to come out and make a PC port of.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gotTrophies}
            alt="Ghost of Tsushima PC trophies overlay"
            id="got-trophies"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="got-trophies" className="block text-center mb-8">
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
