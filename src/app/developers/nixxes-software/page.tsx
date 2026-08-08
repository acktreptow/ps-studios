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
        Founded in 1999, Nixxes Software are a Utrecht-based studio that have
        occupied a unique position within PS Studios since being acquired in
        2021. All other first-party studios develop PS5 games either as the lead
        studio (Naughty Dog, Insomniac, etc.), or as a support studio (Valkyrie
        Entertainment, Malaysia Studio, etc.). However, Nixxes were acquired, at
        least initially, to develop the PC ports of these PS5 titles.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Since 2022, Nixxes have ported 9 PS5 titles to PC, with the most recent
        being the positively received Death Stranding 2: On the Beach in March
        2026. However, while DS2 was the standard PC port expected out of
        Nixxes, Sony announced a monumental strategic pivot in May 2026 that has
        fundamentally changed their business model and role within PS Studios
        going forward.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Nixxes is important for PlayStation as PC is the easiest way Sony
            finds growth outside of the console market. And with PS5 games that
            need a PC port drying up, Nixxes are in a unique position to go back
            to the PS3/PS4 catalogue and reintroduce classics to modern
            audiences.
          </Paragraph>
          <Paragraph>
            This is more likely than Nixxes simultaneously releasing PC ports of
            singleplayer PS5 titles, which is hard for an external studio to do
            so effectively unless the PS5 version is held until the PC port is
            ready. That&#39;s even if Sony wants day 1 PC ports. Regardless,
            it&#39;s nice to see Nixxes ship on PS5 and HZD&#39;s great
            reception bodes well for other ports from this era - especially
            pre-PS4 Pro titles.
          </Paragraph>
          <Paragraph>
            For Xbox, HD2 sales will determine just how far Sony delves into the
            ecosystem. Though I predict Nixxes will now help port future
            live-services like Fairgames to Xbox on day 1. While this internally
            delays live-services, it&#39;s a worthy tradeoff as they thrive on
            the biggest audience at launch. However, singleplayer titles
            won&#39;t be ported at all - at least until the next, more PC-like
            Xbox.
          </Paragraph>
          <Paragraph marginBottom={8}>
            For PS5 owners, this older PS3/4 titles and live-service Xbox
            approach would be a best case scenario while Nixxes wait for more
            PS5 games to come out and to port to PC.
          </Paragraph>{" "}
          <Paragraph marginBottom={8}>
            it may well be the last one as 2 of their recent projects represent
            uncharted territory for the studio. In 2024, Nixxes fully remade
            2017&#39;s Horizon Zero Dawn, which launched simultaneously on PS5
            and PC. This was not only their first remake, but it was also
            Nixxes&#39;s first PS5 title. Then in 2025, Nixxes ported Sony&#39;s
            most successful live-service, Helldivers 2, to their rival Xbox
            Series X|S consoles. These projects both represent firsts for Nixxes
            that signal how Sony potentially uses them going forward, especially
            since Sony&#39;s 2026 announcement that fundamentally changed
            Nixxes&#39;s business model and role within PS Studios.
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
