import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gotTrophies from "../../../../public/images/dev-pages/got-trophies.png";
import hzdComparison from "../../../../public/images/dev-pages/hzd-comparison.png";
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
        2021. Whereas other first-party studios develop PS5 games either as the
        lead studio (Naughty Dog, Insomniac, etc.), or as a support studio
        (Valkyrie Entertainment, Malaysia Studio, etc.), Nixxes were acquired,
        at least initially, to develop the PC ports of these PS5 titles.
      </Paragraph>
      <Paragraph>
        Since 2022, Nixxes have ported 9 PS5 titles to PC, with the most recent
        being the positively received Death Stranding 2: On the Beach in March
        2026. However, in May 2026, Sony told their studios that going forward,
        their single-player titles will no longer come to PC. Therefore, both
        Saros (Housemarque) and Ghost of Yōtei (Sucker Punch) will remain PS5
        exclusive - even though their predecessors came to PC and it was widely
        expected that Nixxes were already working on ports.
      </Paragraph>
      <Paragraph marginBottom={8}>
        This is a monumental strategic pivot that&#39;s fundamentally changed
        Nixxes&#39;s business model and role within PS Studios going forward.
        Yet, Sony&#39;s reasoning for the shift was simple - the amount of money
        made on PC wasn&#39;t enough to offset any potential dilution of the PS5
        ecosystem. Fortunately, even with their main reason for acquisition
        gone, Nixxes still have 4 paths going forward.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            For PS5 owners, turning Nixxes into a remake studio is the best
            path. Not only does it make up for Bluepoint&#39;s closure, but
            Nixxes already proved they&#39;re good at it with 2024&#39;s Horizon
            Zero Dawn Remastered (which was closer to a remake, with re-recorded
            dialogue, improved AI, new assets, etc.). Remaking IPs that really
            need it, like inFamous and Killzone, is also an easy, relatively
            cheap, hearts-and-minds play that gives Sony some needed goodwill
            going into PS6.
          </Paragraph>
          <Paragraph>
            Nixxes could also help with PC ports of XDev&#39;s single-player
            titles, such as Kena: Scars of Kosmora (Ember Lab), as second-party
            titles are exempt from the May 2026 pivot. However, this is the
            least likely scenario. XDev titles already have a port baked into
            development because PC plans are finalized when contracts are
            signed, so they don&#39;t need Nixxes to achieve this.
          </Paragraph>
          <Paragraph>
            As Sony is still releasing all their live services on PC, Nixxes
            could also help here. They could even port upcoming ones like
            Fairgames (Haven Studios) to Xbox, just as they successfully did
            with Helldivers 2. Given how unpopular Sony&#39;s live-service
            execution has been, it makes sense to ship on as many platforms as
            possible for the best (though still small) chance of success.
          </Paragraph>
          <Paragraph>
            The final path is the most boring one, but unfortunately, also the
            most likely - Nixxes turn into a support studio. This work isn&#39;t
            even new to them, as they supported Housemarque on Saros&#39;s art
            and gameplay, and Firewalk on the ill-fated Concord. It&#39;s
            therefore a natural transition for Nixxes to assist upcoming AAA PS
            Studios titles, where their technical expertise is most useful.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Fortunately, with so many paths, Nixxes should be in no danger of
            closure. It&#39;s also likely that they pursue multiple ways
            forward. Hopefully, Sony&#39;s move away from PC, though
            understandable, at least results in Nixxes becoming more of a remake
            studio than a support studio.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={hzdComparison}
            alt="HZD original and remastered graphics comparison"
            id="got-trophies"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="got-trophies"
            className="block text-center mb-8 md:ml-5"
          >
            HZD Is Nixxes&#39;s Only PS5 Title
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PC Ports" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Nixxes Software" />
    </Container>
  );
}

export default NixxesSoftwarePage;
