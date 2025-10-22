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
        they aren&#39;t new games that need a long marketing cycle, the time
        from announcement to release is very short. It&#39;s therefore hard to
        predict the next port.
      </Paragraph>
      <Paragraph marginBottom={8}>
        However, Nixxes&#39;s last two ports have stood out to PS5 players - and
        for good reason. The 2024 remaster of 2017&#39;s Horizon Zero Dawn,
        which launched simultaneously on PS5 and PC, and the 2025 Xbox Series
        X|S port of Helldivers 2 both represent firsts for Nixxes that signal
        how Sony potentially uses them in its increasingly multiplatform future.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Nixxes are important for PlayStation as PC is the easiest way Sony
            finds growth outside of the console market. And with PS5 games that
            need a PC port drying up, Nixxes are in a unique position to go back
            to the PS3/PS4 catalogue and reintroduce classics to modern PS5/PC
            audiences.
          </Paragraph>
          <Paragraph>
            This is more likely than Nixxes simultaneously releasing PC ports of
            new singleplayer PS5 games. Logistically, this is hard for an
            external studio to do so effectively unless the finished PS5 version
            is held until the PC port is ready. It&#39;s unclear if Sony even
            want day 1 PC ports of singleplayer games. Regardless, it&#39;s nice
            to see Nixxes ship a PS5 title and HZD&#39;s great reception bodes
            well for ports of others around this era - especially pre-PS4 Pro
            titles like Killzone: SF.
          </Paragraph>
          <Paragraph>
            For Xbox, HD2 sales will really determine just how far Sony delves
            into ecosystem. While currently, sales figures are contradictory
            depending on the source, I predict Nixxes will now help port
            future live-services like Fairgames to Xbox on day 1. While this
            internally delays the games, it&#39;s a worthy tradeoff as
            live-services thrive on the biggest possible audience at launch.
            However, singleplayer titles won&#39;t make the jump at all. At
            least until the next, more PC-like Xbox.
          </Paragraph>
          <Paragraph marginBottom={8}>
            For PS5 owners, this older PS3/4 titles and live-service Xbox
            approach would be a best case scenario while Nixxes wait for more
            PS5 games to come out and to port to PC.
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
