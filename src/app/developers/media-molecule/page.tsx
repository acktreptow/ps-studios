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
        developed to take advantage of the majority of PS Vita&#39;s features
        (camera, rear touch panel, etc.), before remaking and expanding the game
        for PS4 in 2015. MM&#39;s next and most recent title was 2020&#39;s
        Dreams on PS4, meaning they haven&#39;t released a PS5 game.
        Furthermore, despite Dreams releasing nearly 7 years ago, MM still
        haven&#39;t even announced their next game, let alone shown gameplay.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Fortunately, there is some known info. For example, it&#39;s confirmed
        to be a new IP, is more of a game than a creative tool like Dreams, and
        is led by the director of Tren (the best-received made-in-Dreams game).
        Further rumors also suggest it&#39;s a social simulation inspired by
        Animal Crossing and Harvest Moon. Most crucially, though, both its
        official announcement and release are finally rumored for 2027.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Whatever MM&#39;s next game is, to call it important is an
            understatement, as they&#39;re now far removed from their greatest
            successes seen on PS3. Dreams wasn&#39;t close to a commercial
            success, all 4 founders quit in recent years, and it was reported
            that MM nearly shuttered instead of London Studio in early 2024.
          </Paragraph>
          <Paragraph>
            Sony does, however, need the types of games MM make, even if their
            post-LBP titles haven&#39;t been commercially mainstream. For one,
            the many awards all their games have won/been nominated for provide
            utility that can&#39;t be quantified with money in/out. These more
            experimental, user-focused titles also helped diversify the PS
            Studios PS3/PS4 portfolio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Yet, with PS5 games taking longer to develop across the industry,
            rising development costs, and other external economic factors like
            MM&#39;s expensive location, these more prestigious reasons may not
            presently be enough. Even if this social simulation title is
            announced and released in 2027, it could easily be MM&#39;s last if
            it doesn&#39;t find an audience fast. The PS5 era will then truly be
            a terrible end to MM&#39;s legacy, which couldn&#39;t have begun
            better on PS3.
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
