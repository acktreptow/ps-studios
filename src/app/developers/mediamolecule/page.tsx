import { Metadata } from "next";
import Image from "next/image";
import sackboy from "../../../../public/images/dev-pages/sackboy.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
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
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2006, this Surrey-based developer is primarily known for the
        critically acclaimed LittleBigPlanet series that started on the PS3 in
        2008.
      </Paragraph>
      <Paragraph>
        Media Molecule&#39;s last title was 2020&#39;s Dreams for the PS4, and
        therefore has yet to release a PS5 title.
      </Paragraph>
      <Paragraph marginBottom={8}>
        In regards to their next game, we don&#39;t even have a name, let alone
        gameplay, despite Dreams releasing 4 years ago.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Whatever Media Molecule&#39;s next game is, I wouldn&#39;t expect
            much as they&#39;re far removed from their heyday during the PS3
            generation.
          </Paragraph>
          <Paragraph>
            Dreams wasn&#39;t close to a commercial success, the vast majority
            of Media Molecule&#39;s founders have left, and it&#39;s been
            reported that they were extremely close to being shuttered in late
            2023, instead of London Studio.
          </Paragraph>
          <Paragraph>
            With rising development costs, smaller profit margins, and Media
            Molecule&#39;s games not being commercially viable to a mainstream
            audience, it&#39;s far more likely the studio will close before it
            releases another game.
          </Paragraph>
          <Paragraph marginBottom={8}>
            For what it&#39;s worth, I hope I&#39;m wrong. Even if they
            don&#39;t sell well, Sony needs the types of games Media Molecule
            makes to have a diverse portfolio.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={sackboy}
            alt="Sackboy from LittleBigPlanet"
            width={500}
            height={500}
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
