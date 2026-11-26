import { Metadata } from "next";
import Image from "next/image";
import sackboy from "../../../../public/images/dev-pages/sackboy.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Media Molecule",
  description:
    "The history and future of Media Molecule, a first-party developer for PlayStation Studios.",
};

function MediaMoleculePage(): JSX.Element {
  return (
    <Container>
      <Title title="Media Molecule" />
      <DeveloperButton
        developer="Media Molecule"
        urlPath="https://www.mediamolecule.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2006, Media Molecule are a Surrey-based developer primarily
        known for their critically and commercially acclaimed LittleBigPlanet
        series. This platformer started on PS3 in 2008 and earned its 95 on
        Metacritic with renowned content creation tools that lived up to the
        title&#39;s &#39;Play, Create, Share&#39; mantra, as many of the 4.5
        million people who purchased LBP built excellent user-generated content.
        2011&#39;s LittleBigPlanet 2 maintained this success before the IP
        continued without MM&#39;s involvement, which resulted in a noticeable
        dip in critical reception.
      </Paragraph>
      <Paragraph>
        MM then moved on to 2013&#39;s platformer-adventure Tearaway, which was
        developed to take advantage of the majority of the PS Vita&#39;s
        features (camera, rear touch panel, etc.), before remaking and expanding
        the game for PS4 in 2015. MM&#39;s next and most recent title was
        2020&#39;s Dreams on PS4, meaning they haven&#39;t released a PS5 game.
        Furthermore, despite Dreams releasing nearly 7 years ago, MM still
        haven&#39;t even announced their next game, let alone shown gameplay.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Fortunately, there is some known info. For example, it&#39;s confirmed
        to be a new IP, is more of a game than a creative tool like Dreams, and
        is led by the director of Tren (the best-received made-in-Dreams game).
        Further rumors also suggest it&#39;s a social simulation inspired by
        Animal Crossing and Harvest Moon. Most crucially, though, both its
        official announcement and release are rumored for 2027.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Whatever MM&#39;s next game is, to call it important is an
            understatement, as they&#39;re far removed from their greatest
            successes seen on PS3. Dreams wasn&#39;t close to a commercial
            success, all 4 founders quit over the past 5 years, and it was
            reported that MM nearly shuttered instead of London Studio in early
            2024.
          </Paragraph>
          <Paragraph>
            However, Sony needs the types of games MM make, even if it&#39;s not
            in their DNA to be commercially mainstream. For one, their many
            BAFTA awards provide utility that can&#39;t be quantified with money
            in/out. Experiments like Dreams also help diversify the PS Studios
            portfolio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Yet with rising development costs and other external economic
            factors (such as their expensive location) at play, these more
            prestigious reasons may not be enough in 2026. It&#39;s therefore
            more likely MM close before shipping a PS5 game.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={sackboy}
            alt="Sackboy from LittleBigPlanet"
            id="sackboy"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="sackboy" className="block text-center">
            LittleBigPlanet&#39;s Mascot - Sackboy
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default MediaMoleculePage;
